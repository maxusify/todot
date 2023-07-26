import React from "react";

import { Task } from "@/types";

import { columns } from "./columns";
import DataTable from "./data-table";

type Props = {
  data: Task[];
};

const TasksList = ({ data }: Props) => {
  return <DataTable columns={columns} data={data} />;
};

export default TasksList;
