import { BookNow } from './BookNow';
import { LatestNews } from './LatestNews';
import { SubscribeForm } from './SubscribeForm';

export function RightSideBar() {
  return (
    <div>
      <BookNow />
      <LatestNews />
      <SubscribeForm />
    </div>
  );
}
