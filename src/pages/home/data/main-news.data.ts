export interface IMainNews {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  date: string | null;
  author: {
    name: string;
    profileUrl: string;
    date: string | null;
  }
}

export const mainNewsData: IMainNews[] = [
  {
    id: "1",
    title: 'Hollywood Star Dies at 90',
    description:
      'Renowned actor John Doe passed away peacefully at his home surrounded by family. He was known for his roles in classic films such as "Sunset Boulevard" and "The Great Escape".',
    imageUrl: '/image/home/main1.jpg',
    date: 'June 15, 2024',
    author: {
      name: 'Smith Johnson',
      profileUrl: '/image/home/author-3.jpg',
      date: 'June 15, 2024',
    },
  },
  {
    id: "2",
    title: 'New Blockbuster Breaks Box Office Records',
    description:
      'The latest sci-fi thriller "Galactic Odyssey" has shattered box office records, grossing over $500 million in its opening weekend. Critics praise its stunning visuals and gripping storyline.',
    imageUrl: '/image/home/main2.webp',
    date: 'June 10, 2024',
    author: {
      name: 'Mike Johnson',
      profileUrl: '/image/home/author-2.webp',
      date: 'June 10, 2024',
    },
  },
  {
    id: "3",
    title: 'Award Season Highlights',
    description:
      'The annual film awards celebrated the best in cinema, with "Eternal Horizons" taking home the top prize for Best Picture. The event was filled with memorable speeches and glamorous fashion.',
    imageUrl: '/image/home/main3.jpg',
    date: 'June 5, 2024',
    author: {
      name: 'Emily Davis',
      profileUrl: '/image/home/author-1.jpg',
      date: 'June 5, 2024',
    },
  }
];