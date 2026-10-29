import React, { memo } from 'react'

// function ChildComponents() {
//     console.log("child component re-render");

//   return (
//     <div>ChildComponents</div>
//   )
// }

// export default ChildComponents


const ChildComponents = memo(({printHello}) => {
    console.log("Child");
    return (
        <div>ChildComponents <br />
            <button onClick={printHello}>Print Hello in Console</button>
        </div>
    )
})
export default ChildComponents