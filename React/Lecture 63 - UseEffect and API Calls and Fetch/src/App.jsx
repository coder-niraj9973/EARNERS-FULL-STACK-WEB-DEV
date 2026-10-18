import React, { useEffect, useState } from 'react'



function Timer() {

  useEffect(() => {
    const id = setInterval(() => {
      console.log("Timer");
    }, 1000)

    return () => {
      console.log("Timer clean up");
      clearInterval(id)
    }

  }, [])

  return <div style={{backgroundColor : "Red"}}>
    <h2>Timer Component</h2>
  </div>
}




function App({ title = "App Component" }) {
  const [productCount, setproductCount] = useState(0)
  const [product, setproduct] = useState([])
  const [name, setName] = useState("")
  const [showTimer, setShowTimer] = useState(true)



  useEffect(() => {
    async function getProducts() {
      let response = await fetch("https://dummyjson.com/products")
      let data = await response.json()
      setproductCount(data.length)
      setproduct(data.products)
    }

    getProducts()
  }, [name])

  return (
    <div>

      {showTimer && <Timer />}
      <button onClick={() => setShowTimer((prev) => !prev)}>Toggle Timer Component</button>
      <br />


      Product - {productCount}, {title}
      <input type="text" onInput={(e) => setName(e.target.value)} />
      <br />
      <p>{name}</p>

      {/* <ul>
        {
          product.map((p) => <li key={p.id}>{p.title}</li>)
        }
      </ul> */}
    </div>
  )
}

export default App