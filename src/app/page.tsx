import Footer from "@/components/footer";
import MainNavigation from "@/components/main-navigation";
import Tasks from "@/components/tasks/tasks";
import { Task } from "@/types";

async function getData(): Promise<Task[]> {
  return [
    {
      id: "task1",
      title: "Test task #1",
      status: "todo",
      created_at: "2023-07-21",
      updated_at: "2023-07-21",
    },
    {
      id: "task2",
      title: "Test task #2",
      status: "done",
      created_at: "2023-07-21",
      updated_at: "2023-07-21",
    },
    {
      id: "task3",
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, in totam? Odio at est quia facilis illo delectus. Pariatur neque minus, expedita libero delectus similique id eum assumenda harum. Vitae.",
      status: "done",
      created_at: "2023-07-21",
      updated_at: "2023-07-21",
    },
  ];
}

export default async function Home() {
  const tasksData = await getData();
  return (
    <>
      <MainNavigation />
      <Tasks data={tasksData} />
      <Footer />
    </>
  );
}
