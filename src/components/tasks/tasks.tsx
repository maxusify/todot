"use client";

import { useLiveQuery } from "dexie-react-hooks";

import { db } from "@/lib/db";

import TasksControls from "./tasks-controls";
import TasksList from "./tasks-list";

const Tasks = () => {
  const data = useLiveQuery(() => db.tasks.toArray());

  return (
    <>
      <TasksControls />
      <TasksList data={data} />
    </>
  );
};

export default Tasks;
