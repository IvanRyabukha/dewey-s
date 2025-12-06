import { ArrowBigLeft, ArrowBigRight } from 'lucide-react';
import { mainNewsData } from '../../data/main-news.data';
import { useMemo, useRef, useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

export function Carusel() {
  const [index, setIndex] = useState(0);
  const imgRef = useRef(null);
  const contentRef = useRef(null);

  const nextNews = () =>
    setIndex((prev) => (prev + 1 + mainNewsData.length) % mainNewsData.length);

  const prevNews = () =>
    setIndex((prev) => (prev + -1 + mainNewsData.length) % mainNewsData.length);

  const newsItem = useMemo(() => mainNewsData[index], [index]);

  return (
    <section
      className="relative w-full overflow-hidden border border-neutral-300 p-3
        flex flex-col"
    >
      
      <div className="relative w-full h-86 overflow-hidden">
        <TransitionGroup component={null}>
          <CSSTransition
            key={newsItem.imageUrl}
            timeout={500}
            classNames="fade"
            nodeRef={imgRef}
          >
            <img
              src={newsItem.imageUrl}
              alt={newsItem.title}
              className="animate-img w-full h-86 absolute inset-0 object-cover"
            />
          </CSSTransition>
        </TransitionGroup>
      </div>

      <TransitionGroup component={null}>
        <CSSTransition
          key={index}
          timeout={500}
          classNames="fade"
          nodeRef={contentRef}
        >
          <div
            className="animate-content pt-5 flex flex-col flex-1
              justify-between"
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
                  width="90"
                  height="90"
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
        </CSSTransition>
      </TransitionGroup>
    </section>
  );
}
