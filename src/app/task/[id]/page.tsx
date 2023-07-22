import React from "react";

function TaskDetailsPage({ params }: { params: { id: string } }) {
  return <div>Task: {params.id}</div>;
}

export default TaskDetailsPage;
