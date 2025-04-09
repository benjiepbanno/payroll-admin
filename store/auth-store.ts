import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface AuthState {
  userId: string | null;
  sessionExpiry: number | null;
  setUserId: (id: string | null, expiry?: number) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      userId: null,
      sessionExpiry: null,
      setUserId: (id, expiry = Date.now() + 60 * 1000) =>
        set({ userId: id, sessionExpiry: expiry }), // Default expiry: 1 hour
      logout: () => set({ userId: null, sessionExpiry: null }),
    }),
    {
      name: "auth-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
