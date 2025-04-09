"use client";

import { DataTableColumnHeader } from "@/components/data-table/data-table-column-header";
import { ColumnDef } from "@tanstack/react-table";
import { RegularEarningsMandatoryDeductions } from "@/lib/schema";

export const columns: ColumnDef<RegularEarningsMandatoryDeductions>[] = [
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
    accessorKey: "FROM",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="from" />
    ),
  },
  {
    accessorKey: "TO",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="to" />
    ),
  },
  {
    accessorKey: "MRATE",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="mrate" />
    ),
  },
  {
    accessorKey: "PERA",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="pera" />
    ),
  },
  {
    accessorKey: "ADDCOM",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="addcom" />
    ),
  },
  {
    accessorKey: "COMPEN",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="compen" />
    ),
  },
  {
    accessorKey: "TOTDED",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="totded" />
    ),
  },
  {
    accessorKey: "GLIFE",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="glife" />
    ),
  },
  {
    accessorKey: "HPREM",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="hprem" />
    ),
  },
  {
    accessorKey: "MCARE",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="mcare" />
    ),
  },
  {
    accessorKey: "LWOP",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="lwop" />
    ),
  },
  {
    accessorKey: "WTAX",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="wtax" />
    ),
  },
  {
    accessorKey: "GVLIFE",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="gvlife" />
    ),
  },
  {
    accessorKey: "GVMED",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="gvmed" />
    ),
  },
  {
    accessorKey: "GVHDMF",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="gvhdmf" />
    ),
  },
  {
    accessorKey: "STATE",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="state" />
    ),
  },
  {
    accessorKey: "NETPAY",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="netpay" />
    ),
  },
  {
    accessorKey: "WEEK1",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="week1" />
    ),
  },
  {
    accessorKey: "WEEK2",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="week2" />
    ),
  },
  {
    accessorKey: "WEEK3",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="week3" />
    ),
  },
  {
    accessorKey: "WEEK4",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="week4" />
    ),
  },
  {
    accessorKey: "CLSCD",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="clscd" />
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
