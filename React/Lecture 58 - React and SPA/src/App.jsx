
let colors = ["red", "green", "pink", "yellow", "black"]

let user = {
  name : "Niraj",
  isOnline : false
}

function printName(){
  console.log(user.name);
}


function App() {
  return (
    <>
      <div>Hello</div>
      <div>Hello</div>
      <p>{5 + 6}</p>
      <p>5 + 6</p>

      <ul>
        {
          colors.map((c) => {
            return <li>{c}</li>
          })
        }
      </ul>

        <p>{user.isOnline ? `${user.name} is Online` : `${user.name} is Offline`}</p>

        <button onClick={printName}>Clicked on Mee</button>

        <img src="" alt="" />
    </>
  )
}

export default App
