"use client";

import React from "react";
import { format } from "date-fns";
import { useLiveQuery } from "dexie-react-hooks";
import { Pencil } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { db } from "@/lib/db";
import { capitalizeFirstLetter } from "@/lib/utils";

function TaskDetailsPage({ params }: { params: { id: string } }) {
  const taskData = useLiveQuery(() => db.tasks.get(+params.id));

  if (!taskData) return null;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <span>{taskData.title}</span>
          <Badge variant="default">
            {capitalizeFirstLetter(taskData.status)}
          </Badge>
        </CardTitle>
        <CardDescription>{taskData.description}</CardDescription>
      </CardHeader>
      <CardContent>
        {format(new Date(taskData.created_at), "EEEE, do MMMM yyyy - HH:mm")}
      </CardContent>
      <CardFooter className="flex justify-between">
        <div>
          <Button variant="outline">
            <Pencil className="w-4 h-4" />
          </Button>
        </div>
        <div className="space-x-2">
          <Button variant="secondary">Abandon</Button>
          <Button>Mark as done</Button>
        </div>
      </CardFooter>
    </Card>
  );
}

export default TaskDetailsPage;
