import { Task } from "@/types";
import { FormTask } from "@/types/schemas/task-form";

import { db } from "./db";

export async function addTask(task: FormTask) {
  const date = new Date().toDateString();
  const newTask: Task = {
    title: task.title,
    description: task.description,
    status: "todo",
    updated_at: date,
    created_at: date,
  };

  const id = await db.tasks.add(newTask);
  console.log(`Added new task with id: ${id}`);
}
