import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { EarningsDeductionsHeadersProps } from "./props-store";
import { fetchEarningsDeductionsHeaders } from "@/actions/dbase";

type EarningsDeductionsHeaders = {
  body: EarningsDeductionsHeadersProps[];
};

type EarningsDeductionsHeadersState = {
  earnings_deductions_headers: EarningsDeductionsHeaders;
  isLoading: boolean;
  error: string | null;

  setEarningsDeductionsHeaders: (data: EarningsDeductionsHeaders) => void;
  resetEarningsDeductionsHeaders: () => void;
  fetchAndSetEarningsDeductionsHeaders: (params: {
    appointment_status: string;
    year: number;
    payroll_type: string;
    advno: string;
    fund: string;
  }) => Promise<void>;
};

export const useEarningsDeductionsHeadersStore =
  create<EarningsDeductionsHeadersState>()(
    persist(
      (set) => ({
        earnings_deductions_headers: { body: [] },
        isLoading: false,
        error: null,

        setEarningsDeductionsHeaders: (data) =>
          set({ earnings_deductions_headers: data }),

        resetEarningsDeductionsHeaders: () =>
          set({
            earnings_deductions_headers: { body: [] },
            isLoading: false,
            error: null,
          }),

        fetchAndSetEarningsDeductionsHeaders: async (params) => {
          set({ isLoading: true, error: null });

          try {
            console.log("Store fetchAndSetEarningsDeductionsHeaders: ", params);
            const result = await fetchEarningsDeductionsHeaders(params);
            console.log("Store fetchAndSetEarningsDeductionsHeaders: ", result);

            if (result.error) {
              set({ error: result.error, isLoading: false });
            } else {
              set({
                earnings_deductions_headers: result,
                isLoading: false,
              });
            }
          } catch (error) {
            set({ error: "Failed to fetch data", isLoading: false });
            console.error("Error fetching earnings deductions headers:", error);
          }
        },
      }),
      {
        name: "earnings-deductions-headers-storage",
        storage: createJSONStorage(() => sessionStorage),
      }
    )
  );
