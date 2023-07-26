import { create } from "zustand";

import { Task } from "@/types";

type TasksState = {
  newTask: Task | undefined;
};

export const useTaskStore = create<TasksState>()(() => ({
  newTask: undefined,
}));
