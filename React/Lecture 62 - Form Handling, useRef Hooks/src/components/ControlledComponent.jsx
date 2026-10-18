import { useState } from 'react'

function ControlledComponent() {
    // const[name, setName] = useState("")
    // const[email, setEmail] = useState("")
    // const[password, setPassword] = useState("")

    const [form, setForm] = useState({ name: "nishant", email: "nishant@123gmail.com", password: "" })

    function signUp(e) {
        e.preventDefault()
        console.log("Form Submitted");
        console.log(form);
    }

    function handleInput(e) {
        // let value = e.target.value
        // let name = e.target.name

        const { value, name } = e.target
        setForm((prev) => ({ ...prev, [name]: value }))
    }

    console.log("re render");

    return (
        <>
            <h1>Forms in React (ControlledComponent)</h1>

            <form action="" onSubmit={signUp}>
                <label htmlFor="name">Name: </label>
                <input
                    value={form.name} type="text" name='name' id='name'
                    onInput={handleInput}
                />
                <br />

                <label htmlFor="email">Email: </label>
                <input
                    value={form.email} type="text" name='email' id='email'
                    onInput={handleInput}
                />
                <br />

                <label htmlFor="password">Password: </label>
                <input
                    type="text" name='password' id='password'
                    onInput={handleInput}
                />
                <br />

                <button>Submit</button>
            </form>
        </>
    )
}

export default ControlledComponent
