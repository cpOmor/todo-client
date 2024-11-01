import { TodoCard } from "./todo.card";
import { TodoFilter } from "./todo.filter";
import { TodoAddComponent } from "./todo.add";
import { useAppSelector } from "@/redux/hooks";
import { useGetTodoQuery } from "@/redux/api/api";
import { Loading } from "../loading/loading";
import React from "react";

export const TodoContainer = () => {
  const { todo } = useAppSelector((state) => state.todoSlice);
  // form server api call
  const [priority, setPriority] = React.useState("");
  const { data, isLoading, isError } = useGetTodoQuery(priority);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className=" p-4">
          <div className="p-4">
            <h1 className="text-3xl font-semibold text-center my-10">Todo</h1>
            <div className="my-4 flex justify-between">
              <TodoAddComponent />
              <TodoFilter priority={priority} setPriority={setPriority} />
            </div>
          </div>

          <div className="space-y-4 bg-gradient-to-r from-violet-500 to-fuchsia-500 p-2 rounded-xl">
            <div className="bg-white rounded-xl">
              {data.data.length > 0 ? (
                data?.data?.map((item, i) => <TodoCard key={i} item={item} />)
              ) : (
                <div className="bg-my-primary-gradient w-full rounded-xl border p-2">
                  <div className="flex justify-between items-center bg-white rounded-xl ">
                    <h3>No task added</h3>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
