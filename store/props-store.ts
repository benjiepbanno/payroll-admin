import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export type EarningsDeductionsHeadersProps = {
  office: string;
  period: number;
  type: string;
  gross: number;
  net: number;
  fund: string;
  carded_by: string;
  carded_date: string;
};

type EarningsDeductionsHeadersPropsState = {
  earnings_deductions_headers_props: Partial<EarningsDeductionsHeadersProps>;
  setProps: (data: Partial<EarningsDeductionsHeadersProps>) => void;
  resetProps: () => void;
};

export const useEarningsDeductionsHeadersPropsStore =
  create<EarningsDeductionsHeadersPropsState>()(
    persist(
      (set) => ({
        earnings_deductions_headers_props: {},
        setProps: (data) =>
          set((state) => ({
            earnings_deductions_headers_props: {
              ...state.earnings_deductions_headers_props,
              ...data,
            },
          })),
        resetProps: () => set({ earnings_deductions_headers_props: {} }),
      }),
      {
        name: "props-storage",
        storage: createJSONStorage(() => sessionStorage),
      }
    )
  );
