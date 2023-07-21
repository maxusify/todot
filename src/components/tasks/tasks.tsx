"use client";

import { Task } from "@/types";

import { columns } from "./columns";
import DataTable from "./data-table";

const TasksPanel: React.FC = () => {
  return (
    <div className="py-2 mb-4">
      <h1 className="font-bold text-2xl mb-2">Controls</h1>
      <p>
        Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
        cillum sint consectetur cupidatat.
      </p>
      <div></div>
    </div>
  );
};

interface TasksListProps {
  data: Task[];
}

const TasksList = ({ data }: TasksListProps) => {
  return (
    <div className="container mx-auto py-10 px-0">
      <DataTable columns={columns} data={data} />
    </div>
  );
};

interface TasksProps {
  data: Task[];
}

const Tasks = ({ data }: TasksProps) => {
  return (
    <>
      <TasksPanel />
      <TasksList data={data} />
    </>
  );
};

export default Tasks;
