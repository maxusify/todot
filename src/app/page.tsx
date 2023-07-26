import Tasks from "@/components/tasks/tasks";
import TasksPanel from "@/components/tasks/tasks-panel";

export default async function Home() {
  return (
    <>
      <TasksPanel />
      <Tasks />
    </>
  );
}
