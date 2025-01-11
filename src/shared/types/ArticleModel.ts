export type Article = {
  author: {
    username: string;
    image: string | null;
    following: boolean;
    followersCount: number;
    bio: string | null;
  };
  slug: string;
  title: string;
  body: string;
  description: string;
  favorited: boolean;
  favoritesCount: number;
  tagList: string[];
  createdAt: string;
};
