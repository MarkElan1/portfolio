import { create } from 'zustand';

interface ThemeState {
  darkTheme: boolean;
  toggleTheme: () => void;
}

export const useDarkTheme = create<ThemeState>((set, get) => ({
  darkTheme: window.matchMedia('(prefers-color-scheme: dark)').matches,

  toggleTheme: () => set({ darkTheme: !get().darkTheme }),
}));
