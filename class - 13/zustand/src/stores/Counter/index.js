import { create } from "zustand";

export const useCounterStore = create((set) => ({
  value: 0,

  inc: () => {
    set((state) => {
      console.log("state", state);

      return { value: state.value + 1 };
    });
  },
  dec: () => {
    set((state) => ({ value: state.value - 1 }));
  },
  reset: () => {
    set(() => ({ value: 0 }));
  },
}));
