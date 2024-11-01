/* eslint-disable @typescript-eslint/no-unused-vars */
import { useAppDispatch } from "@/redux/hooks";
import { TodoDeleteComponent } from "./todo.delete";
import { TodoEditComponent } from "./todo.edit";
import { completeToggle } from "@/redux/features/todo.slice";
// import { completeToggle } from "@/redux/features/todo.slice";

export const TodoCard = ({ item }) => {
  const dispatch = useAppDispatch()
  const { title, description, id, priority,  } = item;
  const handelIsCompleteToggle = () => {
    dispatch(completeToggle(id));
  }
  return (
    <>
      <div className="bg-my-primary-gradient w-full rounded-xl border p-2">
        <div className="flex justify-between items-center bg-white rounded-xl ">
          <input onClick={handelIsCompleteToggle} type="checkbox" name="completeToggle" id="completeToggle" />
          <p>{id} </p>
          <p>{title} </p>
          <p>{priority} </p>
          <p>{description}</p>
          <div className="flex space-x-3">
            <TodoDeleteComponent id={id}/>
            <TodoEditComponent />
          </div>
        </div>
      </div>
    </>
  );
};
