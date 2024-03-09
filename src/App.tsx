import { decrement, increment, incrementByValue } from "./redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";

function App() {
  const { count } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch()
  return (
    <>
      <h1 className="text-lime-950">React with redux</h1>
      <div className="flex">
        <button type="button" className="button bg-indigo-200" onClick={() => dispatch(increment())}>Increment</button>
        <h2>{count}</h2>
        <button type="button" className="button bg-indigo-500" onClick={() => dispatch(decrement())}>Decrement</button>
        <button type="button" className="button bg-indigo-400" onClick={() => dispatch(incrementByValue(5))}>Increment 5</button>
      </div>
    </>
  )
}

export default App
