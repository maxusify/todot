export type TaskStatus = "done" | "todo" | "abandoned"; 

export type Task = {
  id: string,
  title: string,
  status: TaskStatus,
  created_at: string,
  updated_at: string,
}
