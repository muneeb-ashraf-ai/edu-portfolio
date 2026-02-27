import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'Muneeb Ashraf — Mathematics & Technology Educator',
  description:
    'Teaching portfolio of Muneeb Ashraf — Mathematics educator, AI & Data Science instructor, and technology mentor. Passionate about making complex ideas accessible.',
  keywords: ['mathematics teacher', 'AI instructor', 'data science educator', 'Muneeb Ashraf', 'teaching portfolio'],
  authors: [{ name: 'Muneeb Ashraf' }],
  openGraph: {
    title: 'Muneeb Ashraf — Mathematics & Technology Educator',
    description: 'Teaching portfolio — Mathematics, AI, and Data Science education.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <Navbar />
          <main style={{ minHeight: '100vh' }}>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}

