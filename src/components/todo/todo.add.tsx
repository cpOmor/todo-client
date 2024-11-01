/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAddTodoMutation } from "@/redux/api/api";
// import { addTodo } from "@/redux/features/todo.slice";
// import { useAppDispatch } from "@/redux/hooks";
import { useState } from "react";
import { useAppDispatch } from "@/redux/hooks";

export const TodoAddComponent = () => {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("");

  const [description, setDescription] = useState("");
  // for local tasks
  const dispatch = useAppDispatch();

  // for server
  const [addTodo, { isLoading, isSuccess, isError }] = useAddTodoMutation();

  const taskAddedHandel = (e: any) => {
    e.preventDefault();
    const taskDetails = {
      title,
      description,
      priority,
      isCompleted: false,
    };
    console.log(taskDetails);
    // for local tasks
    // dispatch(addTodo(taskDetails));
    //for server tasks
    addTodo(taskDetails);
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Add task</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add your tasks that you want to finish </DialogTitle>
        </DialogHeader>
        <form onSubmit={taskAddedHandel} className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Task
            </Label>
            <Input
              onBlur={(e) => setTitle(e.target.value)}
              id="task"
              placeholder="Enter your task"
              className="col-span-3 focus:outline-none"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              Description
            </Label>
            <Input
              onBlur={(e) => setDescription(e.target.value)}
              id="description"
              placeholder="Enter a description (optional)"
              className="col-span-3 focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              Priority
            </Label>
            <Select
              onValueChange={(value) => {
                setPriority(value);
              }}
            >
              <SelectTrigger className="w-[280px]">
                <SelectValue placeholder="Select a Priority" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="high">High</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="low">Low</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <Button type="submit">Save changes</Button>
        </form>
        <DialogFooter></DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
