import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from './_components/theme-provider';
import Header from './_components/layout/header';
import { ScrollProgress } from './_components/layout/scroll-progress';
import { Toaster } from '@/components/ui/toaster';
import { Inter, Poppins } from 'next/font/google';
import Footer from './_components/layout/footer';


const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700', '900'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'FinAI - AI-Powered Financial Dashboard',
  description: 'Transform your financial future with AI-powered insights. Smart budgeting, personalized recommendations, and real-time analytics.',
  icons: {
    icon: [
      // prefer a PNG fallback for platforms that expect a raster icon
      { url: '/icon.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: '/icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-body antialiased" suppressHydrationWarning>
        <ThemeProvider>
          <ScrollProgress />
          <Header />
          <div className="animate-in fade-in-0 duration-600 ease-out">
            {children}
          </div>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
