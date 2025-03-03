// app/layout.js
import { inter } from './fonts/fonts';
import './globals.css';

export const metadata = {
  title: 'Next.js Demo App',
  description: 'Demonstrating various Next.js features',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
      </body>
    </html>
  );
}