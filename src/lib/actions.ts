import { Task } from "@/types";
import { FormTask } from "@/types/schemas/task-form";

import { db } from "./db";

export async function addTask(task: FormTask) {
  const date = new Date().toString();
  const newTask: Task = {
    title: task.title,
    description: task.description,
    status: "todo",
    updated_at: date,
    created_at: date,
  };

  return await db.tasks.add(newTask);
}

export async function clearAllTasks() {
  await db.tasks.clear();
  console.log(`[Todot] All tasks have been cleared.`);
}
