export type Comment = {
  id: number;
  body: string;
  createdAt: string;

  author: {
    username: string;
    bio: string | null;
    image: string | null;
    following: boolean;
    followersCount: number;
  };
};
