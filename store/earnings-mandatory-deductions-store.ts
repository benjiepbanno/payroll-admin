import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { fetchEarningsMandatoryDeductions } from "@/actions/dbase";

type EarningsMandatoryDeductions = {
  body: any[];
};

type EarningsMandatoryDeductionsState = {
  earnings_mandatory_deductions: EarningsMandatoryDeductions;
  isLoading: boolean;
  error: string | null;

  setEarningsMandatoryDeductions: (data: EarningsMandatoryDeductions) => void;
  resetEarningsMandatoryDeductions: () => void;
  fetchAndSetEarningsMandatoryDeductions: (params: {
    appointment_status: string;
    year: number;
    period: number;
    advno: string;
    carded_date: string;
    fund: string;
  }) => Promise<void>;
};

export const useEarningsMandatoryDeductionsStore =
  create<EarningsMandatoryDeductionsState>()(
    persist(
      (set) => ({
        earnings_mandatory_deductions: { body: [] },
        isLoading: false,
        error: null,

        setEarningsMandatoryDeductions: (data) =>
          set({ earnings_mandatory_deductions: data }),

        resetEarningsMandatoryDeductions: () =>
          set({
            earnings_mandatory_deductions: { body: [] },
            isLoading: false,
            error: null,
          }),

        fetchAndSetEarningsMandatoryDeductions: async (params) => {
          set({ isLoading: true, error: null });

          try {
            console.log(
              "Store fetchAndSetEarningsMandatoryDeductions: ",
              params
            );
            const result = await fetchEarningsMandatoryDeductions(params);
            console.log(
              "Store fetchAndSetEarningsMandatoryDeductions: ",
              result
            );

            if (result.error) {
              set({ error: result.error, isLoading: false });
            } else {
              set({
                earnings_mandatory_deductions: result,
                isLoading: false,
              });
            }
          } catch (error) {
            set({ error: "Failed to fetch data", isLoading: false });
            console.error(
              "Error fetching earnings mandatory deductions:",
              error
            );
          }
        },
      }),
      {
        name: "earnings-mandatory-deductions-storage",
        storage: createJSONStorage(() => sessionStorage),
      }
    )
  );