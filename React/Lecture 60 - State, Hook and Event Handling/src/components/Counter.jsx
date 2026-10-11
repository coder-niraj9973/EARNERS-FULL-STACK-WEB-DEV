import { useState } from "react";


function Counter({ printCountValue }) {

    let [value, setValue] = useState(0)

    let count = 0;

    console.log("re-render");

    function increment() {
        // count++;
        // setValue(value + 1)
        // setValue(value + 1)
        // setValue(value + 1)

        setValue((prev) => prev + 1)
        // setValue((prev) => prev + 1)
        // setValue((prev) => prev + 1)

        // setValue(value++)
        // setValue(value++)
        // setValue(value++)
        printCountValue(++value)
        // setValue(++value)
        // setValue(++value)
        // setValue(++value)
    }

    function decrement() {
        // count--;
        // setValue(value--)
        setValue(value - 1)
        printCountValue(--value)
    }

    return (
        <div>
            <h1>Counter</h1>

            <button onClick={increment}>+</button>
            <p>{value}</p>
            <button onClick={decrement}>-</button>
        </div>
    )
}

export default Counter