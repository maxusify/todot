"use client";

import { useLiveQuery } from "dexie-react-hooks";

import { db } from "@/lib/db";

import { Skeleton } from "../ui/skeleton";

import TasksControls from "./tasks-controls";
import TasksList from "./tasks-list";

const Tasks = () => {
  const data = useLiveQuery(() => db.tasks.toArray());

  let taskListContent = <Skeleton className="h-[300px] w-full" />;

  if (data) taskListContent = <TasksList data={data} />;

  return (
    <>
      <TasksControls />
      <div className="container mx-auto py-10 px-0">{taskListContent}</div>
    </>
  );
};

export default Tasks;
