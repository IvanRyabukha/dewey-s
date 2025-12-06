import { latestNewsData } from '../../data/general-news.data';

export function LatestNews() {
  return (
    <section className="flex flex-col divide-y divide-neutral-300">
      {latestNewsData.map((news) => (
        <article key={news.id} className="flex items-center gap-3 py-3">
          <img
            src={news.imageUrl}
            alt={news.title}
            className="w-30 h-20 rounded object-cover"
          />
          <div>
            <h3 className="text-lg font-semibold leading-tight font-oswald w-36">
              {news.title}
            </h3>
          </div>
        </article>
      ))}
    </section>
  );
}
