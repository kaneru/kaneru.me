import Image from 'next/image';

type Props = {
  title: string;
  description: string;
  image: string;
  url?: string;
};

export const ProjectCard = ({ title, description, image, url }: Props) => {
  return (
    <article className="relative h-96 w-full rounded-xl hover:shadow-xl transition-shadow duration-200">
      <Image
        src={image || '/images/example.png'}
        alt=""
        layout="fill"
        className="object-cover rounded-xl brightness-75"
      />
      <div className="absolute inset-0 p-6 flex flex-col justify-end">
        <h3 className="text-4xl font-bold text-white mb-2 drop-shadow">
          {title}
        </h3>
        <p className="text-lg text-white">{description}</p>
      </div>
    </article>
  );
};
