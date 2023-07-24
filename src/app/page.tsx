import Tasks from "@/components/tasks/tasks";

export default async function Home() {
  const tasksData: [] = [];
  return (
    <>
      <Tasks data={tasksData} />
    </>
  );
}
