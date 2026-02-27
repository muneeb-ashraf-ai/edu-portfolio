export const PERSONAL = {
  name: 'Muneeb Ashraf',
  firstName: 'Muneeb',
  title: 'Mathematics & Technology Educator',
  missionStatement:
    'Bridging the gap between abstract theory and real-world application — one student at a time.',
  bio: `A mathematics educator and AI practitioner with over six years of teaching experience spanning secondary school through university level. Grounded in a rigorous academic background in pure and applied mathematics, and further shaped by advanced studies in data science and machine learning, my work sits at the intersection of deep subject expertise and practical application — with a constant focus on making complex ideas genuinely accessible.`,
  philosophy: `Teaching, for me, is not about transferring information — it is about building intuition. I believe every complex concept has a simple core waiting to be uncovered. My approach centers on starting with the "why", building mental models, and then grounding those models in concrete examples. Whether it is calculus, statistics, or machine learning — my goal is always the same: make the student feel that they understand, not just that they memorized.`,
  location: 'Gujrat / Lahore, Pakistan',
  email: 'muneebashraf.edu@gmail.com',
  phone: '(+92) 3006275648',
  youtube: 'https://www.youtube.com/@alphaaa_m',
  linkedin: 'https://linkedin.com/in/muneeb-ashraf-ai',
  github: 'https://github.com/alphaaa-m',
  cv: '/assets/CV_Muneeb_Ashraf.pdf',
};

export const STATS = [
  { value: '6+', label: 'Years Teaching' },
  { value: '500+', label: 'Students Taught' },
  { value: '15+', label: 'AI Projects' },
  { value: '08+', label: 'Certifications' },
];

export const TEACHING_EXPERIENCE = [
  {
    role: 'Mathematics Teacher',
    institution: 'Hajveri Lyceum School',
    location: 'Lahore, Pakistan',
    duration: 'Aug 2023 – May 2025',
    grades: 'Grades 5 – 9',
    description:
      'Taught Mathematics to students from grades 5 through 9, designing lesson plans that made abstract concepts tangible. Developed strong communication skills by adapting explanations to diverse learning styles, building student confidence in problem-solving.',
    highlights: [
      'Designed structured lesson plans for multi-grade teaching',
      'Improved student pass rates through targeted problem-solving sessions',
      'Mentored students struggling with foundational math concepts',
      'Refined pedagogy to accommodate different learning speeds',
    ],
  },
  {
    role: 'Mathematics Teacher',
    institution: 'Ali Science Academy',
    location: 'Gujrat, Pakistan',
    duration: 'Jun 2018 – Mar 2020',
    grades: 'Intermediate level',
    description:
      'Began teaching Mathematics during my own FSc studies after discovering an innate ability to explain concepts clearly and effectively. This role planted the seed for a lifelong passion for education.',
    highlights: [
      'Taught alongside completing personal FSc studies',
      'Focused on exam preparation and concept clarity',
      'Built early career foundation in classroom management',
      'Developed a passion for making complex ideas accessible',
    ],
  },
];

export const EDUCATION = [
  {
    degree: 'MS Data Science',
    institution: 'University of Engineering and Technology (UET)',
    location: 'Lahore, Pakistan',
    duration: '2025 – 2027',
    status: 'current',
    detail: 'Pursuing advanced studies in data science, machine learning, and statistical modeling.',
  },
  {
    degree: 'MSc Mathematics',
    institution: 'Government College University (GCU)',
    location: 'Lahore, Pakistan',
    duration: '2020 – 2023',
    status: 'completed',
    detail: 'CGPA 3.37 / 4.00 — Deep study of pure and applied mathematics including analysis, algebra, and statistics.',
  },
  {
    degree: 'BSc Mathematics & Physics',
    institution: 'Government Zamindar Postgraduate College',
    location: 'Gujrat, Pakistan',
    duration: '2018 – 2020',
    status: 'completed',
    detail: '74.63% — Strong foundation in classical mathematics and physics.',
  },
];

export const CERTIFICATIONS = [
  {
    issuer: 'IELTS',
    title: 'Overall Band 7.0 (CEFR C1)',
    detail: 'Listening 8.0 · Reading 7.5 · Writing 6.5 · Speaking 6.0',
  },
  {
    issuer: 'NAVTTC / Minhaj University',
    title: 'Artificial Intelligence — ML & DL',
    detail: 'Jun 2023 – Dec 2023',
  },
  {
    issuer: 'Coursera – Duke University',
    title: 'Data Science Math Skills',
    detail: '',
  },
  {
    issuer: 'Coursera – Stanford University',
    title: 'Introduction to Mathematical Thinking',
    detail: '',
  },
  {
    issuer: 'Coursera – Johns Hopkins University',
    title: 'Algebra: Elementary to Advanced',
    detail: '',
  },
  {
    issuer: 'Coursera – UC San Diego',
    title: 'Intro to Discrete Mathematics for CS',
    detail: '',
  },
  {
    issuer: 'Coursera – Colorado Boulder',
    title: 'Expressway to Data Science: Essential Math',
    detail: '',
  },
  {
    issuer: 'Coursera – University of London',
    title: 'Understanding Research Methods',
    detail: '',
  },
];

export const SUBJECTS = {
  mathematics: [
    {
      name: 'Algebra',
      icon: '∑',
      description:
        'From elementary equations to abstract algebraic structures — building logic and symbolic reasoning.',
      level: 'Beginner → Advanced',
      topics: ['Linear Equations', 'Polynomials', 'Abstract Algebra', 'Group Theory'],
    },
    {
      name: 'Calculus',
      icon: '∫',
      description:
        'Limits, derivatives, and integration taught with geometric intuition before formal notation.',
      level: 'Intermediate → Graduate',
      topics: ['Limits & Continuity', 'Differentiation', 'Integration', 'Multivariable Calculus'],
    },
    {
      name: 'Linear Algebra',
      icon: '⟨v⟩',
      description:
        'Vectors, matrices, and transformations — the backbone of machine learning and computer graphics.',
      level: 'Intermediate → Advanced',
      topics: ['Vectors & Matrices', 'Eigenvalues / Eigenvectors', 'Vector Spaces', 'Linear Transformations'],
    },
    {
      name: 'Statistics & Probability',
      icon: 'P(x)',
      description:
        'Making sense of data through probability theory, distributions, and inferential methods.',
      level: 'Beginner → Advanced',
      topics: ['Descriptive Statistics', 'Probability Distributions', 'Hypothesis Testing', 'Bayesian Methods'],
    },
  ],
  technology: [
    {
      name: 'Python for Data Science',
      icon: 'py',
      description:
        'Python from fundamentals to data manipulation and visualization using NumPy, Pandas, and Matplotlib.',
      level: 'Beginner → Intermediate',
      topics: ['Python Basics', 'NumPy & Pandas', 'Data Visualization', 'EDA'],
    },
    {
      name: 'Machine Learning',
      icon: 'ML',
      description:
        'Supervised and unsupervised algorithms explained mathematically and implemented with scikit-learn.',
      level: 'Intermediate → Advanced',
      topics: ['Regression & Classification', 'Model Evaluation', 'Scikit-learn', 'Feature Engineering'],
    },
    {
      name: 'Deep Learning',
      icon: 'NN',
      description:
        'Neural networks, CNNs, and training principles — demystifying the "black box" of modern AI.',
      level: 'Advanced',
      topics: ['Neural Networks', 'CNNs', 'TensorFlow / Keras', 'Transfer Learning'],
    },
    {
      name: 'AI Fundamentals',
      icon: 'AI',
      description:
        'Conceptual understanding of how AI systems think, learn, and make decisions.',
      level: 'Beginner → Intermediate',
      topics: ['AI vs ML vs DL', 'Data Pipelines', 'Model Deployment Basics', 'AI Ethics'],
    },
  ],
};

export const PROJECTS = [
  {
    id: 1,
    title: 'Brain Tumor Detection',
    category: 'Computer Vision',
    teachingAngle:
      'A live demonstration of how CNNs learn spatial features from medical images — ideal for teaching convolutional architectures and real-world AI application.',
    description:
      'A CNN-based deep learning model that detects brain tumors from MRI scans using TensorFlow and Keras. Achieves high accuracy through careful preprocessing and architecture design.',
    tags: ['CNN', 'Deep Learning', 'TensorFlow', 'Medical Imaging'],
    concepts: ['Convolutional Layers', 'Transfer Learning', 'Binary Classification'],
  },
  {
    id: 2,
    title: 'House Price Prediction',
    category: 'Regression Analysis',
    teachingAngle:
      'A comprehensive comparison of 8+ regression algorithms — perfect as a classroom case study for understanding model evaluation, bias-variance tradeoff, and feature selection.',
    description:
      'Compared over 8 regression models including Linear Regression, Ridge, Lasso, Decision Trees, and Gradient Boosting to predict house prices with Python and scikit-learn.',
    tags: ['Regression', 'Scikit-learn', 'Feature Engineering', 'Model Comparison'],
    concepts: ['Bias-Variance Tradeoff', 'Regularization', 'Cross-Validation'],
  },
  {
    id: 3,
    title: 'Student Management System',
    category: 'Backend API',
    teachingAngle:
      'A working demonstration of software architecture for students learning API design, database normalization, and authentication — real-world software engineering in practice.',
    description:
      'A production-ready RESTful API built with FastAPI and SQLAlchemy for managing students, courses, and enrollments. Features JWT authentication and full CRUD operations.',
    tags: ['FastAPI', 'SQLAlchemy', 'JWT', 'REST API'],
    concepts: ['REST Architecture', 'Database Design', 'API Security'],
  },
  {
    id: 4,
    title: 'Heart Disease & Diabetes Classification',
    category: 'Healthcare AI',
    teachingAngle:
      'Using real medical datasets to teach classification algorithms, precision vs recall tradeoffs, and the ethical responsibility of AI in healthcare.',
    description:
      'Built classification models for heart disease and diabetes prediction using logistic regression, SVM, and ensemble methods with comprehensive evaluation metrics.',
    tags: ['Classification', 'Healthcare', 'SVM', 'Ensemble Methods'],
    concepts: ['Classification Metrics', 'Precision/Recall', 'Data Imbalance'],
  },
  {
    id: 5,
    title: 'Credit Card Fraud Detection',
    category: 'Anomaly Detection',
    teachingAngle:
      'Teaches students about imbalanced datasets, SMOTE, and anomaly detection — critical challenges in real-world machine learning that textbooks often skip.',
    description:
      'Developed an anomaly detection pipeline for identifying fraudulent transactions from highly imbalanced financial data using resampling and ensemble classifiers.',
    tags: ['Anomaly Detection', 'SMOTE', 'Imbalanced Data', 'Finance'],
    concepts: ['Class Imbalance', 'SMOTE Oversampling', 'ROC-AUC Curve'],
  },
  {
    id: 6,
    title: 'MNIST Digit Recognition',
    category: 'Computer Vision',
    teachingAngle:
      'The classic "hello world" of deep learning — used to teach neural network fundamentals, backpropagation, and how machines learn to see.',
    description:
      'Implemented digit classification on the MNIST dataset using fully connected and convolutional neural networks, demonstrating the progression from simple to deep architectures.',
    tags: ['Neural Networks', 'MNIST', 'TensorFlow', 'Computer Vision'],
    concepts: ['Backpropagation', 'Activation Functions', 'Softmax Classification'],
  },
];

export const SKILLS = {
  teaching: [
    { name: 'Curriculum Design', level: 95 },
    { name: 'Concept Simplification', level: 98 },
    { name: 'Student Mentorship', level: 92 },
    { name: 'Problem-Based Learning', level: 90 },
    { name: 'Lesson Planning', level: 93 },
    { name: 'Academic Communication', level: 91 },
  ],
  technical: [
    { name: 'Python', level: 90 },
    { name: 'Machine Learning', level: 85 },
    { name: 'Deep Learning / CNNs', level: 80 },
    { name: 'Statistics & Probability', level: 92 },
    { name: 'Data Analysis (Pandas/NumPy)', level: 88 },
    { name: 'LaTeX & Academic Writing', level: 82 },
    { name: 'FastAPI / Backend Dev', level: 78 },
    { name: 'SQL & Databases', level: 80 },
  ],
  soft: [
    'Communication',
    'Emotional Intelligence',
    'Adaptability',
    'Leadership',
    'Time Management',
    'Resilience',
    'Creativity',
  ],
};
