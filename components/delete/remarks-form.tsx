import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { useToggleComponentStore } from "@/store/toggle-component-store";
import { useEarningsDeductionsHeadersParamsStore } from "@/store/params-store";
import { useEarningsDeductionsHeadersStore } from "@/store/earnings-deductions-headers-store";
import { usePayrollsDeletionStore } from "@/store/payrolls-deletion-store";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { AlertDialogCancel, AlertDialogFooter } from "../ui/alert-dialog";

const formSchema = z.object({
  remarks: z.string().min(1, "Required"),
});

export default function RemarksForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      remarks: "",
    },
  });

  const { earnings_deductions_headers_params } =
    useEarningsDeductionsHeadersParamsStore();
  const {
    payrolls_deletion,
    updatePayrollsDeletionStatus,
    deleteAndUpdatePayrollsDeletion,
  } = usePayrollsDeletionStore();
  const { fetchAndSetEarningsDeductionsHeaders } =
    useEarningsDeductionsHeadersStore();
  const { setValue } = useToggleComponentStore();

  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  async function onSubmit(data: z.infer<typeof formSchema>) {
    setDone(false);
    setLoading(true);
    updatePayrollsDeletionStatus("pending");

    const user = "benjie";

    if (
      earnings_deductions_headers_params.appointment_status &&
      earnings_deductions_headers_params.year &&
      earnings_deductions_headers_params.payroll_type &&
      earnings_deductions_headers_params.advno &&
      earnings_deductions_headers_params.fund
    ) {
      await Promise.all(
        payrolls_deletion.map(({ period, carded_by, carded_date }) =>
          deleteAndUpdatePayrollsDeletion({
            appointment_status:
              earnings_deductions_headers_params.appointment_status ?? "",
            year: earnings_deductions_headers_params.year ?? 0,
            payroll_type: earnings_deductions_headers_params.payroll_type ?? "",
            period: period,
            advno: earnings_deductions_headers_params.advno ?? "",
            carded_by: carded_by,
            carded_date: carded_date,
            fund: earnings_deductions_headers_params.fund ?? "",
            user: user,
            remarks: data.remarks,
          })
        )
      );
    }

    setLoading(false);
    setDone(true);
  }

  function refreshDashboard() {
    if (done) {
      if (
        earnings_deductions_headers_params.appointment_status &&
        earnings_deductions_headers_params.year &&
        earnings_deductions_headers_params.payroll_type &&
        earnings_deductions_headers_params.advno &&
        earnings_deductions_headers_params.fund
      ) {
        fetchAndSetEarningsDeductionsHeaders({
          appointment_status:
            earnings_deductions_headers_params.appointment_status,
          year: earnings_deductions_headers_params.year,
          payroll_type: earnings_deductions_headers_params.payroll_type,
          advno: earnings_deductions_headers_params.advno,
          fund: earnings_deductions_headers_params.fund,
        });
      }
      setValue(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="space-y-4">
          <FormField
            control={form.control}
            name="remarks"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Remarks</FormLabel>
                <FormControl>
                  <Textarea {...field} className="max-h-[150px]" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <AlertDialogFooter>
            <AlertDialogCancel asChild>
              <Button
                type="button"
                variant="secondary"
                disabled={loading}
                onClick={refreshDashboard}
              >
                Close
              </Button>
            </AlertDialogCancel>
            <Button
              type="submit"
              variant="destructive"
              disabled={loading || done}
            >
              Delete
            </Button>
          </AlertDialogFooter>
        </div>
      </form>
    </Form>
  );
}
