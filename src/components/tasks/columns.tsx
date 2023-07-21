"use client";

import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";

import { ellipsis } from "@/lib/utils";
import { Task } from "@/types";

import { Checkbox } from "../ui/checkbox";

import TaskBadge from "./task-badge";

const formatDate = (value: string) => {
  const formatted = format(new Date(value), "iiii, io MMM yyyy");
  return <div className="text-right">{formatted}</div>;
};

export const columns: ColumnDef<Task>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select All"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "title",
    header: "Title",
    cell: ({ row }) => (
      <div className="text-ellipsis ...">{ellipsis(row.getValue("title"))}</div>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => <TaskBadge status={row.getValue("status")} />,
  },
  {
    accessorKey: "updated_at",
    header: () => <div className="text-right">Updated At</div>,
    cell: ({ row }) => formatDate(row.getValue("updated_at")),
  },
  {
    accessorKey: "created_at",
    header: () => <div className="text-right">Created At</div>,
    cell: ({ row }) => formatDate(row.getValue("created_at")),
  },
];
