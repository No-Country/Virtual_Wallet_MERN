import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "../slices/counterSlice"

export const Counter = () => {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  const center2 = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap:'10px'
  }
  
  return (
    <>
      <div style={center2}>
        <button aria-label="decrement value" onClick={()=> dispatch(decrement())}>increment</button>
        <span>{count}</span>
        <button aria-label="increment value" onClick={()=> dispatch(increment())}>increment</button>
      </div>
    </>
  )
}