"use client";

import { ColumnDef } from "@tanstack/react-table";
import { RegularOtherDeductions } from "@/lib/schema";
import { DataTableColumnHeader } from "@/components/data-table/data-table-column-header";

export const columns: ColumnDef<RegularOtherDeductions>[] = [
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
    accessorKey: "TYPE",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="type" />
    ),
  },
  {
    accessorKey: "CODE",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="code" />
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
];
