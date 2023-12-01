import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';

function Signup() {
    let navigate = useNavigate()
    let email = useRef(null);
    let password = useRef(null);

    const AddUser = () => {
        let arr = JSON.parse(localStorage.getItem("users")) || [];

        let obj = {
            email: email.current.value,
            password: password.current.value
        }
        arr.push(obj);
        localStorage.setItem("users", JSON.stringify(arr));
        navigate("/")
    }

    return (
        <div>
            <input ref={email} type='text' placeholder='Enter email' /><br />
            <input ref={password} type='password' placeholder='Enter password' /><br />
            <button onClick={AddUser}>Sign up</button><br />
            <span>Already have and account! </span>
            <a href='/'>Login</a>
        </div>
    )
}

export default Signup