type PostType = {
  slug: string;
  title: string;
  date: string;
  image: string;
  description: string;
  ogImage: {
    url: string;
  };
  content: string;
  tags: string | string[];
};

export default PostType;
