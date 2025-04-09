import { useEarningsDeductionsHeadersParamsStore } from "@/store/params-store";
import { useEarningsDeductionsHeadersPropsStore } from "@/store/props-store";
import { useEarningsMandatoryDeductionsStore } from "@/store/earnings-mandatory-deductions-store";
import { useOtherDeductionsStore } from "@/store/other-deductions-store";
import { useEarningsDeductionsStore } from "@/store/earnings-deductions-store";
import { useRemittancesStore } from "@/store/remittances-store";
import { usePayrollsDeletionStore } from "@/store/payrolls-deletion-store";

import { Trash2 } from "lucide-react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";
import { Button } from "../ui/button";

import DetailsCard from "../delete/details-card";
import RemarksForm from "../delete/remarks-form";

export function DeleteDialog() {
  const { earnings_deductions_headers_params } =
    useEarningsDeductionsHeadersParamsStore();
  const { earnings_deductions_headers_props } =
    useEarningsDeductionsHeadersPropsStore();
  const { setPayrollsDeletion } = usePayrollsDeletionStore();

  const earnings_mandatory_deductions_store =
    useEarningsMandatoryDeductionsStore();
  const earnings_deductions_store = useEarningsDeductionsStore();
  const other_deductions_store = useOtherDeductionsStore();
  const remittances_store = useRemittancesStore();

  function isLoading() {
    if (earnings_deductions_headers_params.payroll_type === "regular") {
      return (
        earnings_mandatory_deductions_store.isLoading ||
        other_deductions_store.isLoading ||
        remittances_store.isLoading
      );
    } else {
      return earnings_deductions_store.isLoading || remittances_store.isLoading;
    }
  }

  function initializePayrollsDeletion() {
    const props_list = [
      {
        status: "selected",
        period: earnings_deductions_headers_props.period ?? 0,
        carded_by: earnings_deductions_headers_props.carded_by ?? "",
        carded_date: earnings_deductions_headers_props.carded_date ?? "",
      },
    ];
    setPayrollsDeletion(props_list);
    console.log("Props List:", props_list);
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          variant="destructive"
          disabled={isLoading()}
          onClick={initializePayrollsDeletion}
        >
          <Trash2 />
          Delete
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            You are going to delete <strong>1</strong> selected item(s) with the
            following details:
          </AlertDialogDescription>
        </AlertDialogHeader>

        <div className="space-y-4">
          <DetailsCard />
          <RemarksForm />
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
}
