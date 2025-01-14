import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type User = {
  email?: string;
  token?: string;
  username?: string;
  bio?: string;
  image?: string;
};

type UserState = {
  user: User | null;
  setUser: (user: User) => void;
};
export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      user: null,
      setUser: (user: User) => set({ user }),
    }),
    { name: "user", storage: createJSONStorage(() => sessionStorage) }
  )
);
