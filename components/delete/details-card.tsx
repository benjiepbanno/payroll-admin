"use client";

import { useEarningsDeductionsHeadersParamsStore } from "@/store/params-store";
import { usePayrollsDeletionStore } from "@/store/payrolls-deletion-store";

import { columns } from "../data-table/payrolls-deletion/columns";
import { DataTable } from "../data-table/payrolls-deletion/data-table";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function DetailsCard() {
  const { earnings_deductions_headers_params } =
    useEarningsDeductionsHeadersParamsStore();
  const { payrolls_deletion } = usePayrollsDeletionStore();

  return (
    <div className="space-y-4">
      <div className="flex gap-2 justify-between">
        <div>
          <Label>Payroll Type</Label>
          <Input
            value={
              earnings_deductions_headers_params.payroll_type === "regular"
                ? "Regular"
                : "Special"
            }
            disabled
          ></Input>
        </div>
        <div>
          <Label>ADV Number</Label>
          <Input
            value={earnings_deductions_headers_params.advno}
            disabled
          ></Input>
        </div>
        <div>
          <Label>Fund</Label>
          <Input
            value={earnings_deductions_headers_params.fund}
            disabled
          ></Input>
        </div>
      </div>

      <ScrollArea className="h-[150px]">
        <DataTable columns={columns} data={payrolls_deletion} />
      </ScrollArea>
    </div>
  );
}
