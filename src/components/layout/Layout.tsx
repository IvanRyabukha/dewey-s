import type { PropsWithChildren } from 'react';
import { Header } from './header/Header';
import { MoviesRating } from '../movies-rating/MoviesRating';

export default function Layout({ children }: PropsWithChildren<unknown>) {
  return (
    <div className="h-screen">
      <Header />
      <MoviesRating />
      {children}
    </div>
  );
}
