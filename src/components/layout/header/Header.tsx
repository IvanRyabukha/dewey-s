import { formattedDate } from '../../../shared/utils/formattedDate';

export function Header() {
  return (
    <header className="grid grid-cols-[1fr_3fr_1fr] items-center">
      <div className="flex gap-4 items-center">
        <img src="image/logo.png" alt="Vintage Saloon" width={90} height={90} />

        <div className="w-max">
          <b className="text-xl font-semibold font-oswald">
            DEWY’S PUBLIC HOUSE
          </b>
          <div className="opacity-70 font-medium font-oswald">
            BEERS • BOURBONS • BREAD
          </div>
          <hr className="text-neutral-300 my-1" />
          <div className="text-sm font-oswald tracking-wide">
            Los Angeles • Montreal • New York
          </div>
        </div>
      </div>

      <div>
        <div
          className="text-center mx-auto border-y border-solid border-neutral-300
            py-3 w-max px-10"
        >
          <h1 className="text-4xl tracking-widest mb-2">HOLLYWOOD FACTORY</h1>
          <div className='flex items-center justify-center gap-3'>
            <span className='flex border-y border-solid border-neutral-300 h-2 w-20' />
            <time className="opacity-60 font-oswald">{formattedDate(new Date())}</time>
            <span className='flex border-y border-solid border-neutral-300 h-2 w-20' />
          </div>
        </div>
      </div>

      <div className='flex justify-end'>
        <div
          className="flex items-center gap-5 border-b border-b-neutral-300
            w-max"
        >
          <div>
            <div className="font-oswald text-xl font-light mb-1">
              Telephone is here
            </div>
            <div className="flex items-center gap-2">
              <b className="font-oswald text-xl">$18.90</b>
              <span> | </span>
              <span className="font-oswald text-[0.7rem] leading-snug opacity-70">
                Los Angeles <br />
                Montreal
              </span>
            </div>
          </div>
          <img
            src="image/vintage-phone-sm.png"
            alt="Vintage Phone"
            width={90}
            height={90}
            className="grayscale-100 saturate-0 opacity-90"
          />
        </div>
      </div>
    </header>
  );
}
