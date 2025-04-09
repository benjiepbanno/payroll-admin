import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { deletePayroll } from "@/actions/dbase";

type PayrollsDeletion = {
  status: string;
  period: number;
  carded_by: string;
  carded_date: string;
};

type PayrollsDeletionState = {
  payrolls_deletion: PayrollsDeletion[];
  isLoading: boolean;
  error: string | null;

  setPayrollsDeletion: (payrolls: PayrollsDeletion[]) => void;
  resetPayrollsDeletion: () => void;
  updatePayrollsDeletionStatus: (status: string) => void;
  deleteAndUpdatePayrollsDeletion: (params: {
    appointment_status: string;
    year: number;
    payroll_type: string;
    period: number;
    advno: string;
    carded_by: string;
    carded_date: string;
    fund: string;
    user: string;
    remarks: string;
  }) => Promise<void>;
};

export const usePayrollsDeletionStore = create<PayrollsDeletionState>(
  (set) => ({
    payrolls_deletion: [],
    isLoading: false,
    error: null,

    setPayrollsDeletion: (payrolls_deletion) => set({ payrolls_deletion }),

    resetPayrollsDeletion: () =>
      set({
        payrolls_deletion: [],
        isLoading: false,
        error: null,
      }),

    updatePayrollsDeletionStatus: (status) => {
      set((state) => ({
        payrolls_deletion: state.payrolls_deletion.map((payroll) => ({
          ...payroll,
          status,
        })),
      }));
    },

    deleteAndUpdatePayrollsDeletion: async (params) => {
      set({ isLoading: true, error: null });

      try {
        console.log("Store deleteAndUpdatePayroll Params: ", params);
        const result = await deletePayroll(params);
        console.log("Store deleteAndUpdatePayroll Result: ", result);

        set((state) => ({
          payrolls_deletion: state.payrolls_deletion.map((payroll) =>
            payroll.period === params.period &&
            payroll.carded_by === params.carded_by &&
            payroll.carded_date === params.carded_date
              ? { ...payroll, status: result.error ? "error" : "deleted" }
              : payroll
          ),
          isLoading: false,
          error: result.error ? result.error : null,
        }));
      } catch (error) {
        set({ error: "Failed to delete payroll", isLoading: false });
        console.error("Error deleting payroll:", error);
      }
    },
  })
);
