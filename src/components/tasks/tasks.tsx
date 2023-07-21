const TasksPanel: React.FC = () => {
  return (
    <div className="py-2 mb-4">
      <h1 className="font-bold text-2xl mb-2">Controls</h1>
      <p>Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.</p>
      <div></div>
    </div>
  );
}

const TasksList: React.FC = () => {
  return (<div>Tasks List</div>);
}

const Tasks: React.FC = () => {
  return (
    <>
      <TasksPanel />
      <TasksList />
    </>
  );
}

export default Tasks;
