import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'Project 1788534249264',
  description: 'Zenflow is a premium yet approachable yoga and wellness studio website designed to help urban professionals discover classes, meet instructors, understand memberships, and book their first session. The experience combines grounding editorial design with warm studio imagery, calming motion, and conversion-focused booking flows.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: '#faf8f5', margin: 0 }}>
        {children}
      </body>
    </html>
  );
}
