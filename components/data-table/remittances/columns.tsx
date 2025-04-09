"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Remittances } from "@/lib/schema";
import { DataTableColumnHeader } from "@/components/data-table/data-table-column-header";

export const columns: ColumnDef<Remittances>[] = [
  {
    accessorKey: "PERIOD",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="period" />
    ),
  },
  {
    accessorKey: "PAYTYP",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="paytyp" />
    ),
  },
  {
    accessorKey: "RMCOD",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="rmcod" />
    ),
  },
  {
    accessorKey: "EMPNO",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="empno" />
    ),
  },
  {
    accessorKey: "ADVNO",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="advno" />
    ),
  },
  
  {
    accessorKey: "AMT",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="amt" />
    ),
  },
  {
    accessorKey: "GOV",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="gov" />
    ),
  },
];
