import { useState } from 'react'

function UncontrolledComponent() {

    function signUp(e) {
        e.preventDefault()
        const formData = new FormData(e.target)
        console.log(Object.fromEntries(formData));
    }

    console.log("re render");


    return (
        <>
            <h1>Forms in React (UncontrolledComponent)</h1>

            <form action="" onSubmit={signUp}>
                <label htmlFor="name">Name: </label>
                <input
                    defaultValue={"skijd"} type="text" name='name' id='name'
                />
                <br />

                <label htmlFor="email">Email: </label>
                <input
                    type="text" name='email' id='email'

                />
                <br />

                <label htmlFor="password">Password: </label>
                <input
                    type="text" name='password' id='password'

                />
                <br />

                <button>Submit</button>
            </form>
        </>
    )
}

export default UncontrolledComponent
