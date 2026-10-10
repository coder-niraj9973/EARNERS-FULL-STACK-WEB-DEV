

function Navbar({ user }) {
  return (
    <ul>
      <li>Home</li>
      <li>About us</li>
      <li>Contact Us</li>
      <li>{user.isLoggedIn ? user.name : "Login"}</li>
    </ul>
  )
}


export default Navbar;