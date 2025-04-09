import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type EarningsDeductionsHeadersParams = {
  appointment_status: string;
  year: number;
  payroll_type: string;
  advno: string;
  fund: string;
};

type EarningsDeductionsHeadersParamsState = {
  earnings_deductions_headers_params: Partial<EarningsDeductionsHeadersParams>; // Allow empty initially
  setParams: (data: Partial<EarningsDeductionsHeadersParams>) => void; // Allow partial updates
  resetParams: () => void;
};

export const useEarningsDeductionsHeadersParamsStore =
  create<EarningsDeductionsHeadersParamsState>()(
    persist(
      (set) => ({
        earnings_deductions_headers_params: {},
        setParams: (data) =>
          set((state) => ({
            earnings_deductions_headers_params: {
              ...state.earnings_deductions_headers_params,
              ...data,
            },
          })),
        resetParams: () => set({ earnings_deductions_headers_params: {} }),
      }),
      {
        name: "params-storage",
        storage: createJSONStorage(() => sessionStorage),
      }
    )
  );
