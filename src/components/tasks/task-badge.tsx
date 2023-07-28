import React from "react";
import Link from "next/link";

import { capitalizeFirstLetter } from "@/lib/utils";
import { TaskStatus } from "@/types";

import { badgeVariants } from "../ui/badge";

interface Props {
  status: TaskStatus;
}

const TaskBadge = ({ status }: Props) => {
  let variant: "default" | "secondary" | "outline" = "default";

  if (status === "done") variant = "secondary";
  if (status === "abandoned") variant = "outline";

  return (
    <Link
      href="#"
      className={badgeVariants({
        variant,
      })}
    >
      {capitalizeFirstLetter(status)}
    </Link>
  );
};

export default TaskBadge;
