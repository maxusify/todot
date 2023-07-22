"use client";

import { Task } from "@/types";

import { columns } from "./columns";
import DataTable from "./data-table";
import TasksControls from "./tasks-controls";
import TasksList from "./tasks-list";

interface TasksProps {
  data: Task[];
}

const Tasks = ({ data }: TasksProps) => {
  return (
    <>
      <TasksControls />
      <TasksList data={data} />
    </>
  );
};

export default Tasks;
