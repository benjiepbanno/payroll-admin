"use client";

import { DataTableColumnHeader } from "@/components/data-table/data-table-column-header";
import { Checkbox } from "@/components/ui/checkbox";
import { ColumnDef } from "@tanstack/react-table";
import { DataTableRowActions } from "./data-table-row-actions";
import { EarningsDeductionsHeaders } from "@/lib/schema";

export const columns: ColumnDef<EarningsDeductionsHeaders>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="translate-y-[2px]"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-[2px]"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "office",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Office" />
    ),
  },
  {
    accessorKey: "period",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Period" />
    ),
  },
  {
    accessorKey: "type",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Type" />
    ),
  },
  {
    accessorKey: "gross",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Gross" />
    ),
    cell: ({ row }) => (
      <span>
        {Number(row.original.gross).toFixed(2)}
      </span>
    ),
  },
  {
    accessorKey: "net",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Net" />
    ),
    cell: ({ row }) => (
      <span>
        {Number(row.original.net).toFixed(2)}
      </span>
    ),
  },
  {
    accessorKey: "fund",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Fund" />
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
  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
];
