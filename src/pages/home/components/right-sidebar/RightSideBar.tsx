import { BookNow } from './BookNow';
import { LatestNews } from './LatestNews';
import { SubscribeForm } from './SubscribeForm';

export function RightSideBar() {
  return (
    <div className='flex flex-col justify-between'>
      <BookNow />
      <LatestNews />
      <SubscribeForm />
    </div>
  );
}
