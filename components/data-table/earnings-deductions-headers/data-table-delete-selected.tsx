"use client";

import { Table } from "@tanstack/react-table";
import { earningsDeductionsHeadersSchema } from "@/lib/schema";
import { usePayrollsDeletionStore } from "@/store/payrolls-deletion-store";

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

import DetailsCard from "@/components/delete/details-card";
import RemarksForm from "@/components/delete/remarks-form";

interface DataTableDeleteSelectedProps<TData> {
  table: Table<TData>;
}

export function DataTableDeleteSelected<TData>({
  table,
}: DataTableDeleteSelectedProps<TData>) {
  const { setPayrollsDeletion } = usePayrollsDeletionStore();

  const selected = table
    .getFilteredSelectedRowModel()
    .rows.map((row) => earningsDeductionsHeadersSchema.parse(row.original));

  function initializePayrollsDeletion() {
    const props_list = selected.map(({ period, carded_by, carded_date }) => ({
      status: "selected",
      period,
      carded_by,
      carded_date,
    }));
    setPayrollsDeletion(props_list);
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          variant="destructive"
          size="sm"
          className="hidden h-8 lg:flex shadow-none"
          disabled={selected.length === 0}
          onClick={initializePayrollsDeletion}
        >
          <Trash2 />
          Delete Selected
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            You are going to delete <strong>{selected.length}</strong> selected
            item(s) with the following details:
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
