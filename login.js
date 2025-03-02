



import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        axios.post('http://localhost:8081/login', { email, password })
            .then(res => {
                if (res.data === "Login Successful!") {
                    navigate('/home'); // Redirect to Home.js
                } else {
                    console.log("Login Failed");
                }
            })
            .catch(err => console.log(err));
    }

    return (
        <div className='d-flex vh-100 justify-content-center align-items-center'>
            <div className='p-3 bg-white w-25'>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder='Enter email' className='form-control'
                            onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" placeholder='Enter password' className='form-control'
                            onChange={e => setPassword(e.target.value)} />
                    </div>
                    <button className='btn btn-success'>Login</button>
                </form>
            </div>
        </div>
    );
}

export default Login;
