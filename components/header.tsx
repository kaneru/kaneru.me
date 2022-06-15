import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import cn from 'classnames';
import { Container } from './container';

const HEADER_MENU_ITEMS = [
  { id: 0, title: 'Посты', url: '/posts' },
  // { id: 1, title: 'Проекты', url: '/projects' },
  { id: 2, title: 'Лайфлист', url: '/lifelist' },
  { id: 3, title: 'Путешествия', url: '/travel' },
  // { id: 4, title: 'Вишлист', url: '/wishlist' },
  { id: 5, title: 'Обо мне', url: '/about' },
];

export const Header = () => {
  const router = useRouter();
  const isMainPage = router.pathname === '/';

  return (
    <>
      <header
        className={cn(
          {
            'absolute z-10 top-0 left-0 right-0': isMainPage,
          },
          {
            'bg-zinc-800 mb-10': !isMainPage,
          },
        )}
      >
        <Container className="py-8">
          <nav className="flex gap-8 items-end">
            <Link href="/">
              <a
                className={cn('text-zinc-50 hover:text-blue-500', {
                  'hover:text-zinc-200': isMainPage,
                })}
              >
                <h1 className="text-xl md:text-3xl font-bold">
                  Блог Анатолия Гуляева
                </h1>
              </a>
            </Link>
            <ul className="hidden gap-6 lg:flex">
              {HEADER_MENU_ITEMS.map(item => (
                <li key={item.id} className="text-lg font-medium">
                  <Link href={item.url}>
                    <a
                      className={cn(
                        'text-zinc-50 hover:underline hover:text-blue-500',
                        {
                          'hover:text-zinc-200': isMainPage,
                        },
                      )}
                    >
                      {item.title}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </Container>
      </header>
      {router.pathname === '/' ? (
        <div className="w-full coverMain relative">
          <Image
            src="/images/title_image.jpg"
            alt=""
            layout="fill"
            className="object-cover"
            quality={100}
          />
          <p className="absolute text-4xl md:text-6xl md:text-8xl font-black text-white top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            kaneru.me
          </p>
        </div>
      ) : null}
    </>
  );
};
