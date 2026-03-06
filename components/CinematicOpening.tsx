'use client';

import { useEffect, useRef } from 'react';
import { Montserrat } from 'next/font/google';
import * as THREE from 'three';
import { PERSONAL } from '@/lib/data';

type SparkState = {
  x: number;
  y: number;
  z: number;
  life: number;
  decay: number;
};

type SmokeState = {
  vx: number;
  vy: number;
  vz: number;
  life: number;
  scaleSpeed: number;
  rotSpeed: number;
};

type AmbientSmokeState = {
  vx: number;
  vy: number;
  vz: number;
  age: number;
  ageSpeed: number;
  maxOpacity: number;
  scaleGrow: number;
  rotSpeed: number;
};

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  display: 'swap',
});

function createGlowTexture(color = '255,255,255') {
  const canvas = document.createElement('canvas');
  canvas.width = 64;
  canvas.height = 64;

  const ctx = canvas.getContext('2d');
  if (!ctx) {
    return new THREE.CanvasTexture(canvas);
  }

  const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
  gradient.addColorStop(0, `rgba(${color}, 1)`);
  gradient.addColorStop(0.2, `rgba(${color}, 0.8)`);
  gradient.addColorStop(0.5, `rgba(${color}, 0.2)`);
  gradient.addColorStop(1, `rgba(${color}, 0)`);

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 64, 64);

  return new THREE.CanvasTexture(canvas);
}

export default function CinematicOpening() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const heroTextRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    const heroText = heroTextRef.current;

    if (!container || !heroText) {
      return;
    }

    let animationFrameId = 0;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x1a1a1c, 0.03);

    const getSize = () => {
      const width = container.clientWidth || window.innerWidth;
      const height = container.clientHeight || window.innerHeight;
      return { width, height };
    };

    const { width, height } = getSize();
    const isCoarsePointer = window.matchMedia('(pointer: coarse)').matches;
    const isSmallViewport = Math.min(width, height) < 860;

    const camera = new THREE.PerspectiveCamera(45, width / Math.max(height, 1), 0.1, 1000);
    camera.position.z = 12;

    let renderer: THREE.WebGLRenderer | null = null;

    try {
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, isCoarsePointer ? 1.5 : 2));
      container.appendChild(renderer.domElement);
    } catch {
      heroText.classList.add('reveal');
      return;
    }

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambientLight);

    const spotLight = new THREE.SpotLight(0xffffff, 1.5);
    spotLight.position.set(5, 10, 5);
    spotLight.angle = Math.PI / 4;
    spotLight.penumbra = 0.5;
    scene.add(spotLight);

    const backLight = new THREE.DirectionalLight(0x888899, 1);
    backLight.position.set(-5, -5, -5);
    scene.add(backLight);

    const whiteGlow = createGlowTexture('200,200,220');
    const darkGlow = createGlowTexture('98,104,116');
    const ambientGreyGlow = createGlowTexture('190,196,208');

    const structureGroup = new THREE.Group();
    scene.add(structureGroup);

    const coreGeo = new THREE.IcosahedronGeometry(1.2, 1);
    const coreMat = new THREE.MeshPhysicalMaterial({
      color: 0x333333,
      metalness: 0.8,
      roughness: 0.2,
      wireframe: true,
      transparent: true,
      opacity: 0.6,
    });
    const core = new THREE.Mesh(coreGeo, coreMat);
    structureGroup.add(core);

    const latticeGeo = new THREE.IcosahedronGeometry(2.5, 2);

    const edges = new THREE.EdgesGeometry(latticeGeo);
    const lineMat = new THREE.LineBasicMaterial({
      color: 0x555560,
      transparent: true,
      opacity: 0.3,
    });
    const latticeLines = new THREE.LineSegments(edges, lineMat);
    structureGroup.add(latticeLines);

    const nodeMat = new THREE.PointsMaterial({
      size: 0.15,
      map: whiteGlow,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const latticeNodes = new THREE.Points(latticeGeo, nodeMat);
    structureGroup.add(latticeNodes);

    const sparkCount = isCoarsePointer || isSmallViewport ? 560 : 800;
    const sparkGeo = new THREE.BufferGeometry();
    const sparkPos = new Float32Array(sparkCount * 3);
    const sparkVel: SparkState[] = [];

    for (let i = 0; i < sparkCount; i += 1) {
      sparkPos[i * 3] = 0;
      sparkPos[i * 3 + 1] = 0;
      sparkPos[i * 3 + 2] = 0;

      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const speed = 0.1 + Math.random() * 0.4;

      sparkVel.push({
        x: Math.sin(phi) * Math.cos(theta) * speed,
        y: Math.sin(phi) * Math.sin(theta) * speed,
        z: Math.cos(phi) * speed,
        life: 1,
        decay: 0.01 + Math.random() * 0.02,
      });
    }

    sparkGeo.setAttribute('position', new THREE.BufferAttribute(sparkPos, 3));

    const sparkMat = new THREE.PointsMaterial({
      size: 0.1,
      color: 0xaaaaaa,
      map: whiteGlow,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const sparks = new THREE.Points(sparkGeo, sparkMat);
    sparks.visible = false;
    scene.add(sparks);

    const smokeGroup = new THREE.Group();
    smokeGroup.visible = false;
    scene.add(smokeGroup);

    const smokeCount = isCoarsePointer || isSmallViewport ? 28 : 40;
    const smokeSprites: THREE.Sprite[] = [];

    const smokeMat = new THREE.SpriteMaterial({
      map: darkGlow,
      transparent: true,
      opacity: 0.72,
      depthWrite: false,
      blending: THREE.NormalBlending,
    });

    for (let i = 0; i < smokeCount; i += 1) {
      const sprite = new THREE.Sprite(smokeMat.clone());
      sprite.scale.set(1, 1, 1);

      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const speed = 0.02 + Math.random() * 0.05;

      sprite.userData = {
        vx: Math.sin(phi) * Math.cos(theta) * speed,
        vy: Math.sin(phi) * Math.sin(theta) * speed + 0.02,
        vz: Math.cos(phi) * speed,
        life: 1,
        scaleSpeed: 1.01 + Math.random() * 0.03,
        rotSpeed: (Math.random() - 0.5) * 0.05,
      } satisfies SmokeState;

      smokeGroup.add(sprite);
      smokeSprites.push(sprite);
    }

    const ambientSmokeGroup = new THREE.Group();
    ambientSmokeGroup.visible = false;
    scene.add(ambientSmokeGroup);

    const ambientSmokeCount = isCoarsePointer || isSmallViewport ? 46 : 68;
    const ambientSmokeSprites: THREE.Sprite[] = [];

    const ambientSmokeMat = new THREE.SpriteMaterial({
      map: ambientGreyGlow,
      transparent: true,
      opacity: 0.7,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    const resetAmbientSmoke = (sprite: THREE.Sprite, randomizeAge = false) => {
      const material = sprite.material as THREE.SpriteMaterial;

      sprite.position.set(
        (Math.random() - 0.5) * 12,
        -4.8 - Math.random() * 2.3,
        -7.2 + Math.random() * 2.6,
      );

      const baseScale = 1.6 + Math.random() * 2.8;
      sprite.scale.set(baseScale, baseScale, baseScale);

      sprite.userData = {
        vx: (Math.random() - 0.5) * 0.005,
        vy: 0.008 + Math.random() * 0.018,
        vz: 0.0008 + Math.random() * 0.003,
        age: randomizeAge ? Math.random() : 0,
        ageSpeed: 0.004 + Math.random() * 0.005,
        maxOpacity: 0.24 + Math.random() * 0.2,
        scaleGrow: 0.002 + Math.random() * 0.003,
        rotSpeed: (Math.random() - 0.5) * 0.012,
      } satisfies AmbientSmokeState;

      material.opacity = 0;
      material.color.setHex(0xb4bccb);
    };

    for (let i = 0; i < ambientSmokeCount; i += 1) {
      const ambientSprite = new THREE.Sprite(ambientSmokeMat.clone());
      resetAmbientSmoke(ambientSprite, true);
      ambientSmokeGroup.add(ambientSprite);
      ambientSmokeSprites.push(ambientSprite);
    }

    const ringGeo = new THREE.RingGeometry(0.1, 0.2, 64);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.8,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const shockwave = new THREE.Mesh(ringGeo, ringMat);
    shockwave.visible = false;
    shockwave.rotation.x = Math.PI / 3;
    scene.add(shockwave);

    const clock = new THREE.Clock();
    let totalTime = 0;
    let phase = 0;
    let cameraShake = 0;
    let phaseElapsed = 0;
    let postExplosionTime = 0;

    const compressionDuration = 0.95;
    const revealDelayAfterExplosion = 0.55;
    let ambientSmokeEnabled = false;
    let ambientSmokeIntensity = 0;

    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const pointerNdc = new THREE.Vector2();
    const raycaster = new THREE.Raycaster();

    const triggerCompression = () => {
      if (phase !== 0) {
        return;
      }

      phase = 1;
      phaseElapsed = 0;
    };

    const updatePointerState = (clientX: number, clientY: number) => {
      mouseX = (clientX - window.innerWidth / 2) * 0.001;
      mouseY = (clientY - window.innerHeight / 2) * 0.001;

      const rect = container.getBoundingClientRect();
      if (rect.width <= 0 || rect.height <= 0) {
        return false;
      }

      pointerNdc.x = ((clientX - rect.left) / rect.width) * 2 - 1;
      pointerNdc.y = -((clientY - rect.top) / rect.height) * 2 + 1;

      return true;
    };

    const tryPointerCompressionTrigger = () => {
      if (phase !== 0) {
        return;
      }

      raycaster.setFromCamera(pointerNdc, camera);
      const intersectsCore = raycaster.intersectObject(core, false);
      if (intersectsCore.length > 0) {
        triggerCompression();
      }
    };

    const onPointerMove = (event: PointerEvent) => {
      if (!updatePointerState(event.clientX, event.clientY)) {
        return;
      }

      tryPointerCompressionTrigger();
    };

    const onPointerDown = (event: PointerEvent) => {
      if (!updatePointerState(event.clientX, event.clientY)) {
        return;
      }

      tryPointerCompressionTrigger();
    };

    const onScrollStart = () => {
      triggerCompression();
    };

    const onResize = () => {
      if (!renderer) {
        return;
      }

      const nextSize = getSize();
      camera.aspect = nextSize.width / Math.max(nextSize.height, 1);
      camera.updateProjectionMatrix();
      renderer.setSize(nextSize.width, nextSize.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, isCoarsePointer ? 1.5 : 2));
    };

    const previousTouchAction = container.style.touchAction;
    container.style.touchAction = 'pan-y';

    container.addEventListener('pointermove', onPointerMove, { passive: true });
    container.addEventListener('pointerdown', onPointerDown, { passive: true });
    window.addEventListener('wheel', onScrollStart, { passive: true });
    window.addEventListener('scroll', onScrollStart, { passive: true });
    window.addEventListener('touchmove', onScrollStart, { passive: true });
    window.addEventListener('resize', onResize);

    const animate = () => {
      if (!renderer) {
        return;
      }

      animationFrameId = window.requestAnimationFrame(animate);

      const delta = clock.getDelta();
      totalTime += delta;

      const frameStep = Math.min(delta * 60, 4);

      if (ambientSmokeEnabled) {
        ambientSmokeIntensity = Math.min(1, ambientSmokeIntensity + delta * 1.35);

        ambientSmokeGroup.position.x += (mouseX * 0.75 - ambientSmokeGroup.position.x) * 0.035;
        ambientSmokeGroup.position.y += (-mouseY * 0.45 - ambientSmokeGroup.position.y) * 0.03;
        ambientSmokeGroup.rotation.y += (mouseX * 0.2 - ambientSmokeGroup.rotation.y) * 0.04;

        for (let i = 0; i < ambientSmokeCount; i += 1) {
          const sprite = ambientSmokeSprites[i];
          const data = sprite.userData as AmbientSmokeState;
          const material = sprite.material as THREE.SpriteMaterial;

          data.age += data.ageSpeed * frameStep;

          const cursorDriftX = mouseX * 0.018;
          const cursorDriftZ = mouseY * 0.012;

          sprite.position.x += (data.vx + cursorDriftX) * frameStep;
          sprite.position.y += data.vy * frameStep;
          sprite.position.z += (data.vz + cursorDriftZ) * frameStep;
          sprite.scale.multiplyScalar(1 + data.scaleGrow * frameStep);
          material.rotation += data.rotSpeed * frameStep;

          const fade = Math.sin(Math.min(data.age, 1) * Math.PI);
          material.opacity = Math.max(0, fade * data.maxOpacity * ambientSmokeIntensity);

          if (data.age >= 1.02 || sprite.position.y > 5.5) {
            resetAmbientSmoke(sprite);
          }
        }
      }

      targetX = mouseX * 2;
      targetY = mouseY * 2;

      if (phase === 0) {
        structureGroup.rotation.y += 0.2 * delta;
        structureGroup.rotation.x += 0.1 * delta;
        structureGroup.rotation.z += 0.05 * delta;

        const scale = 1 + Math.sin(totalTime * 2) * 0.02;
        structureGroup.scale.set(scale, scale, scale);
      } else if (phase === 1) {
        phaseElapsed += delta;
        const t = Math.min(phaseElapsed / compressionDuration, 1);
        const easeIn = t * t * t;

        const scale = 1 - easeIn * 0.95;
        structureGroup.scale.set(scale, scale, scale);

        structureGroup.rotation.y += (0.2 + easeIn * 2) * delta;
        structureGroup.rotation.x += (0.1 + easeIn * 1.5) * delta;

        coreMat.opacity = 0.6 - easeIn * 0.6;
        lineMat.opacity = 0.3 + easeIn * 0.7;

        if (t >= 1) {
          phase = 2;
          structureGroup.visible = false;

          sparks.visible = true;
          smokeGroup.visible = true;
          shockwave.visible = true;
          ambientSmokeEnabled = true;
          ambientSmokeGroup.visible = true;
          ambientSmokeIntensity = 0;
          postExplosionTime = 0;

          for (let i = 0; i < ambientSmokeCount; i += 1) {
            resetAmbientSmoke(ambientSmokeSprites[i], true);
          }

          cameraShake = 0.5;
        }
      }

      if (phase >= 2) {
        postExplosionTime += delta;

        if (shockwave.visible) {
          shockwave.scale.x += 15 * delta;
          shockwave.scale.y += 15 * delta;
          ringMat.opacity -= 1.5 * delta;
          if (ringMat.opacity <= 0) {
            shockwave.visible = false;
          }
        }

        const sparkPositions = (sparkGeo.attributes.position as THREE.BufferAttribute).array as Float32Array;
        let activeSparks = false;

        for (let i = 0; i < sparkCount; i += 1) {
          const velocity = sparkVel[i];
          if (velocity.life > 0) {
            activeSparks = true;

            velocity.x *= 0.92;
            velocity.y *= 0.92;
            velocity.z *= 0.92;

            sparkPositions[i * 3] += velocity.x;
            sparkPositions[i * 3 + 1] += velocity.y;
            sparkPositions[i * 3 + 2] += velocity.z;

            velocity.life -= velocity.decay;
          } else {
            sparkPositions[i * 3] = 999;
          }
        }

        (sparkGeo.attributes.position as THREE.BufferAttribute).needsUpdate = true;

        if (!activeSparks && phase === 2) {
          sparks.visible = false;
        }

        let activeExplosionSmoke = false;

        for (let i = 0; i < smokeCount; i += 1) {
          const sprite = smokeSprites[i];
          const data = sprite.userData as SmokeState;
          const material = sprite.material as THREE.SpriteMaterial;

          if (data.life > 0) {
            activeExplosionSmoke = true;
            sprite.position.x += data.vx;
            sprite.position.y += data.vy;
            sprite.position.z += data.vz;

            sprite.scale.multiplyScalar(data.scaleSpeed);
            material.rotation += data.rotSpeed;

            data.life -= 0.008;
            material.opacity = Math.max(0, data.life * 0.6);
          } else {
            material.opacity = 0;
          }
        }

        if (!activeExplosionSmoke && phase === 2) {
          smokeGroup.visible = false;
        }

        if (postExplosionTime > revealDelayAfterExplosion && phase === 2) {
          phase = 3;
          heroText.classList.add('reveal');
        }
      }

      let shakeX = 0;
      let shakeY = 0;

      if (cameraShake > 0) {
        shakeX = (Math.random() - 0.5) * cameraShake;
        shakeY = (Math.random() - 0.5) * cameraShake;
        cameraShake -= delta * 0.5;

        if (cameraShake < 0) {
          cameraShake = 0;
        }
      }

      camera.position.x += (targetX - camera.position.x) * 0.05 + shakeX;
      camera.position.y += (-targetY - camera.position.y) * 0.05 + shakeY;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      container.style.touchAction = previousTouchAction;
      container.removeEventListener('pointermove', onPointerMove);
      container.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('wheel', onScrollStart);
      window.removeEventListener('scroll', onScrollStart);
      window.removeEventListener('touchmove', onScrollStart);
      window.removeEventListener('resize', onResize);
      window.cancelAnimationFrame(animationFrameId);

      smokeSprites.forEach((sprite) => {
        (sprite.material as THREE.SpriteMaterial).dispose();
      });

      ambientSmokeSprites.forEach((sprite) => {
        (sprite.material as THREE.SpriteMaterial).dispose();
      });

      coreGeo.dispose();
      latticeGeo.dispose();
      edges.dispose();
      sparkGeo.dispose();
      ringGeo.dispose();

      coreMat.dispose();
      lineMat.dispose();
      nodeMat.dispose();
      sparkMat.dispose();
      smokeMat.dispose();
      ambientSmokeMat.dispose();
      ringMat.dispose();

      whiteGlow.dispose();
      darkGlow.dispose();
      ambientGreyGlow.dispose();

      scene.clear();

      if (renderer) {
        renderer.dispose();
        if (container.contains(renderer.domElement)) {
          container.removeChild(renderer.domElement);
        }
      }
    };
  }, []);

  return (
    <section className={`${montserrat.className} opening-scene`}>
      <div className="opening-background-gradient" />
      <div className="opening-grid-overlay" />

      <div ref={containerRef} className="opening-canvas-container" aria-hidden />

      <div ref={heroTextRef} className="opening-hero-content">
        <h1 className="opening-title">{PERSONAL.name}</h1>
        <h2 className="opening-subtitle">{PERSONAL.title}</h2>
        <span className="opening-divider" aria-hidden />
        
        <div style={{ marginTop: 80, maxWidth: '88vw', color: '#c8d0e0', textShadow: '0 0 18px rgba(200, 208, 224, 0.28)' }}>
            <p className="opening-kicker">Preparing students for the AI era through mathematics and technology</p>
        </div>

      </div>

      <style jsx>{`
        .opening-scene {
          position: relative;
          min-height: 100svh;
          width: 100%;
          overflow: hidden;
          background-color: #111;
          color: #fff;
        }

        .opening-background-gradient {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at center, #2c2c30 0%, #161618 60%, #0d0d0f 100%);
          z-index: 0;
        }

        .opening-grid-overlay {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px);
          background-size: 40px 40px;
          background-position: center;
          opacity: 0.8;
          z-index: 1;
          pointer-events: none;
        }

        .opening-canvas-container {
          position: absolute;
          inset: 0;
          z-index: 2;
        }

        .opening-hero-content {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
          text-align: center;
          pointer-events: none;
          z-index: 10;
        }

        .opening-title {
          margin: 0;
          font-size: clamp(2.4rem, 6.8vw, 4.5rem);
          font-weight: 600;
          letter-spacing: 0.1em;
          opacity: 0;
          filter: blur(10px);
          transform: scale(0.95);
          background: linear-gradient(110deg, #fcfdff 12%, #c7cedd 42%, #ffffff 54%, #afb7c7 80%);
          background-size: 210% 100%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-shadow: 0 0 42px rgba(220, 226, 242, 0.32);
          transition: opacity 1.25s ease-out, filter 1.45s ease-out, transform 1.8s cubic-bezier(0.2, 1, 0.3, 1);
          padding: 0 24px;
        }

        .opening-subtitle {
          margin-top: 1rem;
          padding: 0 24px;
          font-size: clamp(0.72rem, 1.8vw, 1.2rem);
          font-weight: 300;
          letter-spacing: 0.3em;
          color: #a0a0a5;
          text-transform: uppercase;
          opacity: 0;
          filter: blur(5px);
          transform: translateY(20px);
          transition: opacity 1.25s ease-out 0.35s, filter 1.25s ease-out 0.35s, transform 1.6s cubic-bezier(0.2, 1, 0.3, 1) 0.35s;
        }

        .opening-kicker {
          margin-top: 1rem;
          padding: 0 24px;
          font-family: 'JetBrains Mono', 'Fira Code', monospace;
          font-weight: 500;
          font-size: clamp(0.72rem, 1.2vw, 0.92rem);
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #d2d8e6;
          max-width: min(92vw, 760px);
          opacity: 0;
          filter: blur(4px);
          transform: translateY(14px);
          text-shadow: 0 0 28px rgba(191, 198, 215, 0.28);
          transition: opacity 1.05s ease-out 0.72s, filter 1.05s ease-out 0.72s, transform 1.35s cubic-bezier(0.2, 1, 0.3, 1) 0.72s;
        }

        .opening-divider {
          margin-top: 0.85rem;
          width: clamp(56px, 9vw, 92px);
          height: 1px;
          border-radius: 9999px;
          background: linear-gradient(90deg, rgba(183, 192, 213, 0) 0%, rgba(183, 192, 213, 0.78) 50%, rgba(183, 192, 213, 0) 100%);
          box-shadow: 0 0 14px rgba(183, 192, 213, 0.35);
          opacity: 0;
          transform: scaleX(0.65);
          transform-origin: center;
          transition: opacity 0.9s ease-out 0.54s, transform 1.05s cubic-bezier(0.2, 1, 0.3, 1) 0.54s;
        }

        .reveal .opening-title {
          opacity: 1;
          filter: blur(0);
          transform: scale(1);
          animation: title-shimmer 8s linear infinite, title-breathe 3.8s ease-in-out infinite;
        }

        .reveal .opening-subtitle {
          opacity: 1;
          filter: blur(0);
          transform: translateY(0);
        }

        .reveal .opening-divider {
          opacity: 1;
          transform: scaleX(1);
        }

        .reveal .opening-kicker {
          opacity: 1;
          filter: blur(0);
          transform: translateY(0);
        }

        @keyframes title-shimmer {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 210% 50%;
          }
        }

        @keyframes title-breathe {
          0%,
          100% {
            text-shadow: 0 0 28px rgba(223, 230, 244, 0.22);
          }
          50% {
            text-shadow: 0 0 58px rgba(223, 230, 244, 0.42);
          }
        }

        @media (max-width: 768px) {
          .opening-title {
            letter-spacing: 0.075em;
          }

          .opening-subtitle {
            letter-spacing: 0.16em;
          }

          .opening-kicker {
            margin-top: 1.05rem;
            letter-spacing: 0.085em;
            font-size: 0.72rem;
          }

          .opening-divider {
            margin-top: 0.72rem;
            width: 62px;
          }
        }
      `}</style>
    </section>
  );
}
