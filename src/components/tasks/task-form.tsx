"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { X } from "lucide-react";

import {
  FORM_DESC_LIMIT,
  FORM_TITLE_LIMIT,
  IMPORTANT_WARNING_COLOR,
  LESSER_WARNING_COLOR,
} from "@/config/app";
import { addTask } from "@/lib/actions";
import { FormTask, taskFormSchema } from "@/types/schemas/task-form";

import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

const TaskFormLimitIndicator = ({
  limit,
  current,
}: {
  limit: number;
  current: number;
}) => {
  const charactersLeft = limit - current;

  if (current >= Math.floor(limit * 0.9))
    return <span className={IMPORTANT_WARNING_COLOR}>({charactersLeft})</span>;

  if (current >= Math.floor(limit * 0.7))
    return <span className={LESSER_WARNING_COLOR}>({charactersLeft})</span>;

  return <span>({charactersLeft})</span>;
};

const TaskForm = () => {
  const form = useForm<FormTask>({
    resolver: zodResolver(taskFormSchema),
    defaultValues: {
      title: "",
      description: "",
    },
  });

  const onSubmitHandler = async (values: FormTask) => {
    await addTask(values);
    form.reset();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmitHandler)}>
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Task Title</FormLabel>
              <FormControl>
                <div className="flex">
                  <Input placeholder="New task title" {...field} />
                  <Button
                    variant="outline"
                    className="ml-2"
                    onClick={() => form.resetField(field.name)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </FormControl>
              <FormDescription>
                Max of {FORM_TITLE_LIMIT} characters.{" "}
                <TaskFormLimitIndicator
                  current={field.value.length}
                  limit={FORM_TITLE_LIMIT}
                />
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem className="mt-3">
              <FormLabel>Task description</FormLabel>
              <FormControl>
                <Textarea placeholder="This task is about..." {...field} />
              </FormControl>
              <FormDescription>
                Max of {FORM_DESC_LIMIT} characters.{" "}
                <TaskFormLimitIndicator
                  current={field.value?.length || 0}
                  limit={FORM_DESC_LIMIT}
                />
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-end">
          <Button type="reset" variant="secondary" onClick={() => form.reset()}>
            Cancel
          </Button>
          <Button type="submit" className="ml-2">
            Add
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default TaskForm;
