import { mainNewsData } from "../../data/main-news.data";

export function Carusel() {
  return (
    <section>
      <div>
        {mainNewsData.map((newsItem, index) => (
          <div key={index}>
            <img src={newsItem.imageUrl} alt={newsItem.title} className="grayscale-100 saturate-0 opacity-100"/>
            <div>
              <p>Trending</p>
              <h2>{newsItem.title}</h2>
              <p>{newsItem.description}</p>
              <div>
                <img src={newsItem.author.profileUrl} alt={newsItem.author.name} />
                <div>
                  <p>{newsItem.author.name}</p>
                  <p>{newsItem.author.date}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
        <button></button>
        <button></button>
      </div>
    </section>
  )
}
