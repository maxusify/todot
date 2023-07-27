import React from "react";

import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

import TaskForm from "./task-form-add";

const TasksPanel = () => {
  return (
    <div className="py-2 px-5 lg:px-0">
      <h1 className="font-bold text-2xl mb-2">Controls</h1>
      <p>
        Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
        cillum sint consectetur cupidatat.
      </p>
      <div className="mt-4">
        <Dialog>
          <DialogTrigger asChild>
            <Button>Add task</Button>
          </DialogTrigger>
          <DialogContent className="max-w-500px">
            <DialogHeader>
              <DialogTitle>Add new task</DialogTitle>
              <DialogDescription>
                You can add new task here. Click &quot;Add&quot; button when you
                are done.
              </DialogDescription>
              <div className="pt-4">
                <TaskForm />
              </div>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default TasksPanel;
