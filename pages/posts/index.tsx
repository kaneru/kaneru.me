import { NextPage } from 'next';
import Link from 'next/link';
import { Container } from '../../components/container';
import { MONTHS } from '../../constants/months';
import { getAllPosts } from '../../lib/api';
import { groupPostsByYear } from '../../lib/groupPostsByYear';
import Post from '../../types/post';

type Props = {
  allPosts: Post[];
};

const Index: NextPage<Props> = ({ allPosts }: Props) => {
  const posts = groupPostsByYear(allPosts);

  return (
    <Container className="flex-1">
      <h1 className="text-5xl lg:text-7xl font-bold my-8 tracking-tighter leading-tight text-zinc-900">
        Посты
      </h1>
      <div>
        {Object.keys(posts)
          .sort((a, b) => parseInt(b) - parseInt(a))
          .map(year => {
            return (
              <div key={year}>
                <h2
                  key={year}
                  className="text-3xl lg:text-6xl mb-4 font-bold tracking-tighter leading-tight text-zinc-900"
                >
                  {year}
                </h2>
                <ul className="mb-10">
                  {posts[year].map(post => {
                    const formattedDate = new Date(post.date);
                    const month = formattedDate.getMonth();
                    const day = formattedDate.getDate();
                    return (
                      <li key={post.slug} className="text-lg md:text-xl mb-4">
                        <Link href={`/posts/${post.slug}`}>
                          <a className="font-medium text-zinc-900 hover:underline hover:text-blue-500">
                            {post.title}
                          </a>
                        </Link>
                        <span className="ml-4 text-sm text-slate-600">
                          {`${day} ${MONTHS[month]}`}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
      </div>
    </Container>
  );
};

export default Index;

export const getStaticProps = async () => {
  const allPosts = getAllPosts(['title', 'date', 'slug']);

  return {
    props: { allPosts },
  };
};