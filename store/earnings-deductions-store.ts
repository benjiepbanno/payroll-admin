import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { fetchEarningsDeductions } from "@/actions/dbase";

type EarningsDeductions = {
  body: any[];
};

type EarningsDeductionsState = {
  earnings_deductions: EarningsDeductions;
  isLoading: boolean;
  error: string | null;

  setEarningsDeductions: (data: EarningsDeductions) => void;
  resetEarningsDeductions: () => void;
  fetchAndSetEarningsDeductions: (params: {
    appointment_status: string;
    year: number;
    period: number;
    advno: string;
    carded_date: string;
    fund: string;
  }) => Promise<void>;
};

export const useEarningsDeductionsStore = create<EarningsDeductionsState>()(
  persist(
    (set) => ({
      earnings_deductions: { body: [] },
      isLoading: false,
      error: null,

      setEarningsDeductions: (data) => set({ earnings_deductions: data }),

      resetEarningsDeductions: () =>
        set({
          earnings_deductions: { body: [] },
          isLoading: false,
          error: null,
        }),

      fetchAndSetEarningsDeductions: async (params) => {
        set({ isLoading: true, error: null });

        try {
          console.log("Store fetchAndSetEarningsDeductions: ", params);
          const result = await fetchEarningsDeductions(params);
          console.log("Store fetchAndSetEarningsDeductions: ", result);

          if (result.error) {
            set({ error: result.error, isLoading: false });
          } else {
            set({
              earnings_deductions: result,
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
      name: "earnings-deductions-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);