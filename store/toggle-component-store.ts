import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface ToggleComponentState {
  value: boolean;
  setValue: (newValue: boolean) => void;
  toggleValue: () => void;
}

export const useToggleComponentStore = create<ToggleComponentState>()(
  persist(
    (set) => ({
      value: false,
      setValue: (newValue) => set({ value: newValue }),
      toggleValue: () => set((state) => ({ value: !state.value })),
    }),
    {
      name: "toggle-component-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);