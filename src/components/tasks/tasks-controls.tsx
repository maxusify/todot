import React from "react";

import { Button } from "../ui/button";

type Props = {};

const TasksControls = (props: Props) => {
  return (
    <div className="py-2 mb-4">
      <h1 className="font-bold text-2xl mb-2">Controls</h1>
      <p>
        Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
        cillum sint consectetur cupidatat.
      </p>
      <div className="mt-4">
        <Button>Quick Add</Button>
      </div>
    </div>
  );
};

export default TasksControls;
