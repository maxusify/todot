"use client";

import { useLiveQuery } from "dexie-react-hooks";

import { db } from "@/lib/db";

import { Skeleton } from "../ui/skeleton";

import { columns } from "./tasks-columns";
import DataTable from "./tasks-data-table";

const Tasks = () => {
  const data = useLiveQuery(() => db.tasks.toArray());

  let taskListContent = <Skeleton className="h-[300px] w-full" />;
  if (data) taskListContent = <DataTable columns={columns} data={data} />;

  return <div className="container mx-auto py-10 px-0">{taskListContent}</div>;
};

export default Tasks;
