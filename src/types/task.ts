export type TaskStatus = "done" | "todo" | "abandoned"; 

export interface Task {
  id?: string,
  title: string,
  description?: string,
  status: TaskStatus,
  created_at: string,
  updated_at: string,
}
