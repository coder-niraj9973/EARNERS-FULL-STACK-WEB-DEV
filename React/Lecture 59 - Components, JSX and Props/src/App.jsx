import { Footer } from "./components/Footer";
import Navbar from "./components/Navbar";
import Products  from "./components/Products";


const user = {
  name: "Nishant",
  isLoggedIn: true,

}

const products = [
  {
    title: "Nike ka Jutta",
    price: 2000
  },
  {
    title: "Puma ka Jutta",
    price: 11500
  },
  {
    title: "XYZ ka Jutta",
    price: 52220
  }
]

function App() {
  return (
    <div>
      <Navbar user={user}/>
      <Products products={products} />

    </div>


  )
}

export default App
