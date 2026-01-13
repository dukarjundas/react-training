import React, { useEffect, useState } from 'react'

function Login() {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirm: ""
    })
    const [errorData, setError] = useState({
        username: "",
        email: "",
        password: "",
        confirm: ""
    })

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [event.target.name]: event.target.value })

    }
    const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        const error = {
            username: "",
            email: "",
            password: "",
            confirm: ""
        }
        if (formData.username.length < 3) {
            error.username = "username must be at least 3 characters"
        }
        if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)) {
            error.email = "email doesn't in correct format"
        }
        if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(formData.password)) {
            error.password = "password is not in correct format"
        }

        if (formData.password != formData.confirm || formData.confirm == "") {
            error.confirm = "password do not match"
        }

        setError(error);
        if (Object.values(error).some(msg => msg !== "")) {
            return;
        }
        alert("Registration successfull");
    }
    useEffect(() => {
        console.log(formData);
        return () => {
            console.log("cleanup")
        }
    }, [errorData]);
    return (
        <form>
            <label htmlFor='username'>username :</label> {"  "}
            <input onChange={handleChange} style={{ backgroundColor: 'lightblue' }} type="text" name="username" id="username" placeholder='Enter Name' /><br />
            <p style={{ color: "red" }}>{errorData.username}</p>
            <label htmlFor='email'>email :</label> {"  "}
            <input onChange={handleChange} style={{ backgroundColor: 'lightblue' }} type="email" name="email" id="email" placeholder='Enter Email' /><br />
            <p style={{ color: "red" }}>{errorData.email}</p>
            <label htmlFor='password'>password :</label> {"  "}
            <input onChange={handleChange} style={{ backgroundColor: 'lightblue' }} type="password" name="password" id="password" placeholder='Set password' /><br />
            <p style={{ color: "red" }}>{errorData.password}</p>
            <label htmlFor='confirm'>confirm password :</label> {"  "}
            <input onChange={handleChange} style={{ backgroundColor: 'lightblue' }} type="password" name="confirm" id="confirm" placeholder='Confirm Password' /><br />
            <p style={{ color: "red" }}>{errorData.confirm}</p>
            <button type="submit" onClick={handleSubmit}>Submit</button>
        </form>
    )
}

export default Login;