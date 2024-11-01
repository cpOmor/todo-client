import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { deleteTodo } from "@/redux/features/todo.slice";
import { useAppDispatch } from "@/redux/hooks";

export const TodoDeleteComponent = ({ id }) => {
  const dispatch = useAppDispatch();
  const handelDelete = (e) => {
    e.preventDefault();
    console.log(id)
    dispatch(deleteTodo(id));
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-red-500">Del</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl my-10 mt-16 text-center">
            Are you sure delete todo
          </DialogTitle>
        </DialogHeader>
        <DialogFooter>
          <div className="flex justify-between gap-4 py-4 ">
            <Button className="bg-blue-500">Cancel</Button>
            <Button
              onClick={(e) => handelDelete(e)}
              className="border border-red-500  hover:bg-red-500"
            >
              Yes
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
