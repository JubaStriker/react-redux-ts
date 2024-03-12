import { Button } from "../ui/button";
import TodoCard from "./TodoCard";

const TodoContainer = () => {
    return (
        <div>
            <div className="flex justify-between mb-5">
                <Button className="bg-primary-gradient text-xl font-semibold">Add todo</Button>
                <Button className="bg-primary-gradient text-xl font-semibold">Filter</Button>
            </div>
            <div className="bg-primary-gradient w-full h-full rounded-lg p-4 space-y-3">
                <TodoCard />
                <TodoCard />
                <TodoCard />
                <TodoCard />
            </div>
        </div>
    )
};

export default TodoContainer;