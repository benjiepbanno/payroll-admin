import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { fetchRemittances } from "@/actions/dbase";

type Remittances = {
  body: any[];
};

type RemittancesState = {
  remittances: Remittances;
  isLoading: boolean;
  error: string | null;

  setRemittances: (data: Remittances) => void;
  resetRemittances: () => void;
  fetchAndSetRemittances: (params: {
    appointment_status: string;
    year: number;
    period: number;
    advno: string;
  }) => Promise<void>;
};

export const useRemittancesStore = create<RemittancesState>()(
  persist(
    (set) => ({
      remittances: { body: [] },
      isLoading: false,
      error: null,

      setRemittances: (data) => set({ remittances: data }),

      resetRemittances: () =>
        set({
          remittances: { body: [] },
          isLoading: false,
          error: null,
        }),

      fetchAndSetRemittances: async (params) => {
        set({ isLoading: true, error: null });

        try {
          console.log("Store fetchAndSetRemittances Params: ", params);
          const result = await fetchRemittances(params);
          console.log("Store fetchAndSetRemittances Result: ", result);

          if (result.error) {
            set({ error: result.error, isLoading: false });
          } else {
            set({
              remittances: result,
              isLoading: false,
            });
          }
        } catch (error) {
          set({ error: "Failed to fetch data", isLoading: false });
          console.error("Error fetching earnings deductions:", error);
        }
      },
    }),
    {
      name: "remittances-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

