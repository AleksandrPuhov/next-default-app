import { Cards } from '@/widgets/Cards';

export default function HomePage() {
  return (
    <>
      <p>HomePage</p>
      <Cards link={'/about'} name={'About Page'} />
    </>
  );
}
