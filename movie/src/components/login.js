import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';


function Login() {

    let email = useRef(null);
    let password = useRef(null);
    let navigate = useNavigate()

    const CheckAuth = () => {
        let users = JSON.parse(localStorage.getItem("users")) || [];
        let flag = false;

        users.map((elem) => {
            if (elem.email == email.current.value) {
                if (elem.password == password.current.value) {
                    flag = true;
                }
            }
        })
        if (flag == true) {
            navigate("/search");
        }
    }

    return (
        <div>
            <input ref={email} type='text' placeholder='Enter email' /><br />
            <input ref={password} type='password' placeholder='Enter password' /><br />
            <button onClick={CheckAuth}>Log in</button><br />
            <span>Create an account! </span>
            <a href='/signup'>signup</a>
        </div>
    )
}

export default Login