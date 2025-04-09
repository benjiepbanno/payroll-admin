"use client";

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

import DetailsCard from "@/components/delete/details-card";
import RemarksForm from "@/components/delete/remarks-form";

interface DataTableRowDeleteProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export function DataTableRowDelete({ open, setOpen }: DataTableRowDeleteProps) {
  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
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
