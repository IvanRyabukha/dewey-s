import { ArrowBigLeft, ArrowBigRight } from 'lucide-react';
import { mainNewsData } from '../../data/main-news.data';
import { useMemo, useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';

export function Carusel() {
  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(true);
  const [direction, setDirection] = useState('');

  const contentRef = useRef(null);

  const nextNews = () => {
    setDirection('next');
    setShow(false);
  };

  const prevNews = () => {
    setDirection('prev');
    setShow(false);
  };

  const newsItem = useMemo(() => mainNewsData[index], [index]);

  return (
    <section
      className="relative w-full overflow-hidden border border-neutral-300 p-3
        flex flex-col"
    >
      <CSSTransition
        nodeRef={contentRef}
        in={show}
        timeout={250}
        classNames={'fade'}
        unmountOnExit
        onExited={() => {
          setIndex((prev) =>
            direction === 'next'
              ? (prev + 1) % mainNewsData.length
              : (prev - 1 + mainNewsData.length) % mainNewsData.length
          );
          setShow(true);
        }}
      >
        <div ref={contentRef} className="relative flex flex-col flex-1">
          <img
            src={newsItem.imageUrl}
            alt={newsItem.title}
            className="w-full h-86 object-cover animate-img"
          />

          <div
            className="pt-5 flex flex-col flex-1 justify-between
              animate-content"
          >
            <div>
              <p
                className="uppercase tracking-wide text-lg text-neutral-500 mb-1
                  font-oswald"
              >
                Trending
              </p>
              <h2 className="text-4xl font-bold leading-snug mb-2">
                {newsItem.title}
              </h2>
              <p className="text-lg text-neutral-700 leading-relaxed mb-4">
                {newsItem.description}
              </p>
            </div>

            <div className="flex items-end justify-between">
              <div className="flex items-center gap-3">
                <img
                  src={newsItem.author.profileUrl}
                  alt={newsItem.author.name}
                  className="w-25 h-25 object-cover"
                />
                <div className="flex flex-col">
                  <p className="font-medium font-oswald text-lg">
                    {newsItem.author.name}
                  </p>
                  <p className="text-neutral-300">{newsItem.author.date}</p>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  className="w-10 h-10 flex items-center justify-center bg-black
                    text-white hover:opacity-70 transition"
                  onClick={prevNews}
                >
                  <ArrowBigLeft />
                </button>
                <button
                  className="w-10 h-10 flex items-center justify-center bg-black
                    text-white hover:opacity-70 transition"
                  onClick={nextNews}
                >
                  <ArrowBigRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </CSSTransition>
    </section>
  );
}
