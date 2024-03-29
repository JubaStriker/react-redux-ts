import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { addTodo } from "@/redux/features/todoSlice";
import { useAppDispatch } from "@/redux/hook";
import { FormEvent, useState } from "react";

const AddTodoModal = () => {

    const [task, setTask] = useState('')
    const [description, setDescription] = useState('')
    const dispatch = useAppDispatch()
    const taskDetails = {
        title: task,
        description: description,

    }
    const onSubmit = (e: FormEvent) => {
        e.preventDefault()
        dispatch(addTodo(taskDetails))
    }
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="bg-primary-gradient text-lg font-semibold">Add todo</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Add Task</DialogTitle>
                    <DialogDescription>
                        Add your task that you want to finish
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={onSubmit} className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="task" className="text-right">
                            Task
                        </Label>
                        <Input
                            onBlur={(e) => setTask(e.target.value)}
                            id="task" className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="description" className="text-right">
                            Description
                        </Label>
                        <Input
                            onBlur={(e) => setDescription(e.target.value)}
                            id="description" className="col-span-3" />
                    </div>
                    <DialogFooter>
                        <Button type="submit">Save changes</Button>
                    </DialogFooter>
                </form>

            </DialogContent>
        </Dialog>
    );
};

export default AddTodoModal;