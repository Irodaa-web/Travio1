import { create } from "zustand";
import { persist } from "zustand/middleware";

const useThemeToggle = create(
  persist(
    (set) => ({
      theme: "light",

      themeToggle: () =>
        set((state) => ({
          theme: state.theme === "light" ? "dark" : "light",
        })),
    }),
    {
      name: "theme-storage", // localStorage key
    }
  )
);

export default useThemeToggle;