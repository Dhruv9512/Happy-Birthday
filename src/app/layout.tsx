import type { Metadata } from 'next';
import { Dancing_Script } from 'next/font/google'; // Romantic script font for headings
import { Raleway } from 'next/font/google'; // Elegant sans-serif for body
import './globals.css';
import { cn } from '@/lib/utils';

// Font configuration
const dancingScript = Dancing_Script({
  subsets: ['latin'],
  variable: '--font-dancing-script',
  weight: ['400', '700'], // Include weights if needed
});

const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-raleway',
  weight: ['300', '400', '500', '700'], // Include weights for flexibility
});


export const metadata: Metadata = {
  title: 'Happy Birthday, My Love!', // Updated title
  description: 'A special birthday celebration website.', // Updated description
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased", // Use Raleway as default sans-serif
          dancingScript.variable,
          raleway.variable
        )}
       style={{ fontFamily: 'var(--font-raleway)' }} // Apply Raleway globally
      >
        {children}
      </body>
    </html>
  );
}
