import { Carusel } from './components/carusel/Carusel';
import { GeneralNews } from './components/general-news/GeneralNews';
import { RightSideBar } from './components/right-sidebar/RightSideBar';

export function Home() {
  return (
    <div className="grid grid-cols-[1.1fr_3fr_1fr] gap-6 mt-2">
      <GeneralNews />
      <Carusel />
      <RightSideBar />
    </div>
  );
}
