import { create } from 'zustand';

const Store = create((set) => ({
  followers: 98641, // boshlang'ich son
  increaseFollowers: () => set((state) => ({ followers: state.followers + 1 },)),
}));

export default Store;