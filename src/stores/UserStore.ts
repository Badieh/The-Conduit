import { createStore } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

// "email": "jake@jake.jake",
// "token": "jwt.token.here",
// "username": "jake",
// "bio": "I work at statefarm",
// "image": null
type User = {
  email: string;
  token: string;
  username: string;
  bio: string;
  image: string | null;
};

type UserState = {
  user: User | null;
  setUser: (user: User) => void;
};
export const useUserStore = createStore<UserState>()(
  persist(
    (set, get) => ({
      user: null,
      setUser: (user: User) => set({ user }),
    }),
    { name: "user", storage: createJSONStorage(() => sessionStorage) }
  )
);
