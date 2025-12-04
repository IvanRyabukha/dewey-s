import { Link } from 'react-router';
import { generalNewsData } from '../../data/general-news.data';
import { ArrowRight } from 'lucide-react';

export function GeneralNews() {
  return (
    <section className="flex flex-col gap-4">
      {generalNewsData.map((newsItem) => (
        <article
          key={newsItem.title}
          className="pt-4 border-t border-neutral-300"
        >
          <div className="clearfix">
            <img
              src={newsItem.imageUrl}
              alt={newsItem.title}
              className={`w-36 mr-4 rounded object-cover
              ${newsItem.alignment === 'right' ? 'float-right ml-4 mr-0' : 'float-left'}`}
            />

            <div>
              <h2 className="text-3xl font-semibold mb-1.5 font-oswald">
                {newsItem.title}
              </h2>
              {newsItem.date && (
                <p className="text-sm text-gray-500 mb-14">{newsItem.date}</p>
              )}

              <p className="text-sm leading-relaxed text-neutral-700">
                {newsItem.subtitle && (
                  <span className="font-semibold">{newsItem.subtitle}</span>
                )}{' '}
                {newsItem.description}
              </p>

              <Link
                to={'#'}
                className="inline-flex items-center gap-1 mt-2 font-semibold
                  text-black hover:opacity-70 transition"
              >
                {newsItem.linkText || 'Read more'}
                <span className="flex items-center justify-center">
                  {<ArrowRight size={18} />}
                </span>
              </Link>
            </div>
          </div>
        </article>
      ))}
        <img src='/image/home/book.png' />
    </section>
  );
}
