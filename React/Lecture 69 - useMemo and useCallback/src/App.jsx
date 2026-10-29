import { useCallback, useMemo, useState } from "react"
import ChildComponents from "./components/ChildComponents";

function calculateTotalSum() {
  let sum = 0;
  for (let i = 0; i < 10000000; i++) {
    sum += i;
  }
  return sum;
}

function App() {
  const [count, setCount] = useState(0)

  const value = useMemo(() => {
    return calculateTotalSum()

  }, [])

  // function printHello(){
  //   console.log("Hii");
  // }

  const memoizedPrintHello = useCallback(() => {
    console.log("Hii");
  }, [])

  let obj = {
    count: 53,
    printHello: memoizedPrintHello,
  }

  return (
    <>
      <div>
        <p>Value : {count}</p>
        <button onClick={() => setCount((prev) => prev + 1)} >Click</button>
        <p>Total Sum : {value}</p>

        {/* <ChildComponents count = {count}/> */}
        <ChildComponents {...obj} />
      </div>
    </>
  )
}

export default App
