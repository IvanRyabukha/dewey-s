import type { PropsWithChildren } from 'react';
import { Header } from './header/Header';
import { Footer } from './footer/Footer';

export default function Layout({ children }: PropsWithChildren<unknown>) {
  return (
    <div className="h-screen">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
