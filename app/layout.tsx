import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Venejobs',
  description: 'Conecta con freelancers talentosos de Venezuela para potenciar tu negocio.!',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}