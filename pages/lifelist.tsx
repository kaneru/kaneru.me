import Link from 'next/link';
import cn from 'classnames';
import { Container } from '../components/container';
import { LIFELIST } from '../constants/lifelist';

const LifelistPage = () => {
  return (
    <Container className="mb-10 flex-1">
      <h1 className="text-5xl lg:text-7xl font-bold my-8 tracking-tighter leading-tight text-zinc-900">
        Лайфлист
      </h1>
      <ol className="list-decimal">
        {LIFELIST.map((item, index) => (
          <li
            key={index}
            className={cn('text-zinc-700 text-lg md:text-xl mb-4', {
              'text-zinc-400': item.isCompleted,
            })}
          >
            {item.isCompleted ? (
              <>
                {item.linkToPost ? (
                  <Link href={item.linkToPost}>
                    <a className="underline">{item.title}</a>
                  </Link>
                ) : (
                  item.title
                )}
                <span className="ml-2">✅</span>
              </>
            ) : (
              item.title
            )}
          </li>
        ))}
      </ol>
    </Container>
  );
};

export default LifelistPage;
