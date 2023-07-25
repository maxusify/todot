import React from "react";

import { Task } from "@/types";

import { columns } from "./columns";
import DataTable from "./data-table";

type Props = {
  data: Task[] | undefined;
};

const TasksList = ({ data }: Props) => {
  let tasksData: Task[] = [];

  if (typeof data !== undefined) tasksData = data || [];

  return (
    <div className="container mx-auto py-10 px-0">
      <DataTable columns={columns} data={tasksData} />
    </div>
  );
};

export default TasksList;
