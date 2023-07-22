import React from "react";

import { Task } from "@/types";

import { columns } from "./columns";
import DataTable from "./data-table";

type Props = {
  data: Task[];
};

const TasksList = ({ data }: Props) => {
  return (
    <div className="container mx-auto py-10 px-0">
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default TasksList;
