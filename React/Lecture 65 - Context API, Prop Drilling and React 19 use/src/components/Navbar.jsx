import React, { use } from 'react'
import { ThemeContext } from '../context/ThemeContext'

function Navbar() {
    const {theme} = use(ThemeContext)
    return (

        < div style={{ backgroundColor: "rebeccapurple", padding: "20px" }}>
            <h1>Navbar</h1>
            <p>Theme: {theme}</p>
        </div >
    )
}

export default Navbar