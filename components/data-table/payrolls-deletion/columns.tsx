"use client";

import { ColumnDef } from "@tanstack/react-table";
import { PayrollsDeletion } from "@/lib/schema";
import { DataTableColumnHeader } from "@/components/data-table/data-table-column-header";
import { statuses } from "@/lib/data";
import { Badge } from "@/components/ui/badge";

export const columns: ColumnDef<PayrollsDeletion>[] = [
  {
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => {
      const status = statuses.find(
        (status) => status.value === row.original.status
      );

      return (
        <div className="">
          {status?.value === "selected" && (
            <Badge variant="outline">{status.label}</Badge>
          )}
          {status?.value === "pending" && (
            <Badge className="bg-orange-400">{status.label}</Badge>
          )}
          {status?.value === "error" && (
            <Badge variant="destructive">{status.label}</Badge>
          )}
          {status?.value === "deleted" && <Badge>{status.label}</Badge>}
        </div>
      );
    },
  },
  {
    accessorKey: "period",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Period" />
    ),
  },
  {
    accessorKey: "carded_by",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Carded By" />
    ),
  },
  {
    accessorKey: "carded_date",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Carded Date" />
    ),
  },
];
