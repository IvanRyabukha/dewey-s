import { Search, TextAlignStart } from 'lucide-react';
import { menu } from './menu.data';
import { Link } from 'react-router';

export function Menu() {
  return (
    <div className="flex items-center gap-5 py-4">
      <button>
        <TextAlignStart />
      </button>

      <nav className="w-full">
        <ul className="flex items-center justify-between">
          {menu.map((item) => (
            <li key={item.link}>
              <Link
                to={item.link}
                className="font-oswald font-medium opacity-60
                  hover:opacity-100 duration-200 text-lg"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <button>
        <Search />
      </button>
    </div>
  );
}
