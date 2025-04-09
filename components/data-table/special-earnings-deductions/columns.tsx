"use client";

import { ColumnDef } from "@tanstack/react-table";
import { SpecialEarningsDeductions } from "@/lib/schema";
import { DataTableColumnHeader } from "@/components/data-table/data-table-column-header";

export const columns: ColumnDef<SpecialEarningsDeductions>[] = [
  {
    accessorKey: "PERIOD",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="period" />
    ),
  },
  {
    accessorKey: "TYPE",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="type" />
    ),
  },
  {
    accessorKey: "ADVNO",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="advno" />
    ),
  },
  {
    accessorKey: "EMPNO",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="empno" />
    ),
  },
  {
    accessorKey: "AMT1",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="amt1" />
    ),
  },
  {
    accessorKey: "AMT2",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="amt2" />
    ),
  },
  {
    accessorKey: "TAX1",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="tax1" />
    ),
  },
  {
    accessorKey: "TAX2",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="tax2" />
    ),
  },
  {
    accessorKey: "POSTED",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="posted" />
    ),
  },
  {
    accessorKey: "USER",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="user" />
    ),
  },
  {
    accessorKey: "DTAP",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="dtap" />
    ),
  },
  {
    accessorKey: "FUND",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="fund" />
    ),
  },
];
