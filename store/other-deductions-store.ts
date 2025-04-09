import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { fetchOtherDeductions } from "@/actions/dbase";

type OtherDeductions = {
  body: any[];
};

type OtherDeductionsState = {
  other_deductions: OtherDeductions;
  isLoading: boolean;
  error: string | null;

  setOtherDeductions: (data: OtherDeductions) => void;
  resetOtherDeductions: () => void;
  fetchAndSetOtherDeductions: (params: {
    appointment_status: string;
    year: number;
    period: number;
    advno: string;
    carded_date: string;
  }) => Promise<void>;
};

export const useOtherDeductionsStore = create<OtherDeductionsState>()(
  persist(
    (set) => ({
      other_deductions: { body: [] },
      isLoading: false,
      error: null,

      setOtherDeductions: (data) => set({ other_deductions: data }),

      resetOtherDeductions: () =>
        set({
          other_deductions: { body: [] },
          isLoading: false,
          error: null,
        }),

      fetchAndSetOtherDeductions: async (params) => {
        set({ isLoading: true, error: null });

        try {
          console.log("Store fetchAndSetOtherDeductions: ", params);
          const result = await fetchOtherDeductions(params);
          console.log("Store fetchAndSetOtherDeductions: ", result);

          if (result.error) {
            set({ error: result.error, isLoading: false });
          } else {
            set({
              other_deductions: result,
              isLoading: false,
            });
          }
        } catch (error) {
          set({ error: "Failed to fetch data", isLoading: false });
          console.error("Error fetching other deductions:", error);
        }
      },
    }),
    {
      name: "other-deductions-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);