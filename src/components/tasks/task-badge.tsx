import React from "react";
import Link from "next/link";

import { capitalizeFirstLetter, cn } from "@/lib/utils";
import { TaskStatus } from "@/types";

import { badgeVariants } from "../ui/badge";

interface Props {
  status: TaskStatus;
}

const TaskBadge = ({ status }: Props) => {
  return (
    <Link href="#" className={cn(badgeVariants({ variant: "secondary" }))}>
      {capitalizeFirstLetter(status)}
    </Link>
  );
};

export default TaskBadge;
