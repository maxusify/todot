import { db } from "@/lib/db";
import logger from "@/lib/logger";
import { Task } from "@/types";
import { FormTask } from "@/types/schemas/task-form";

/**
 * Adds a task to the database.
 *
 * @param task The task to be added.
 * @return A promise that resolves with the added task.
 */
export async function addTask(task: FormTask): Promise<boolean> {
  const date = new Date().toString();
  const newTask: Task = {
    title: task.title,
    description: task.description,
    status: "todo",
    updated_at: date,
    created_at: date,
  };

  const result = await db.tasks.add(newTask);

  if (result == 0) {
    logger.warn(`Task with title '${newTask.title}' already exists.`);
    return false;
  }

  logger.info(`Task with id ${newTask.id} has been added.`);
  return true;
}

export async function updateTask(task: Task): Promise<boolean> {
  const result = await db.tasks.update(task.id!, task);

  if (result == 0) {
    logger.warn(`Task with id ${task.id} not found.`);
    return false;
  }

  logger.info(`Task with id ${task.id} has been updated.`);
  return true;
}

/**
 * Clears all tasks in the database.
 *
 * @return A Promise that resolves when all tasks have been cleared.
 */
export async function clearAllTasks(): Promise<void> {
  await db.tasks.clear();
  logger.info(`All tasks have been cleared.`);
}
