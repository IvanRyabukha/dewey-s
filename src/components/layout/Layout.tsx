import { Header } from './header/Header';
import { MoviesRating } from '../movies-rating/MoviesRating';
import { Menu } from '../navigation-bar/Menu';
import { Outlet } from 'react-router';

export default function Layout() {
  return (
    <div className="h-screen">
      <Header />
      <MoviesRating />
      <Menu />
      <Outlet />
    </div>
  );
}
