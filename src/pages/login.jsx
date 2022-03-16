import '../App.css';
import React, { useState,useEffect } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from "redux";
import {actionCreators} from '../state/index';

const api = axios.create({
    baseURL: `http://localhost:8003/auth/`
})

export default function Login_page() {

    const dispatch = useDispatch();
    const { loginUser } = bindActionCreators(actionCreators, dispatch);

    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [status, setStatus] = useState('');
    const [token, setToken] = useState(null);


    useEffect(() => {
        if(token){
            navigate('/main');
        }
    }, [token])

    const handleSubmit = async () => {
        loginUser();
        // await api.post('/login', { 'username': username, 'password': password }).then(res => {
        //     if (res.status === 200) {
        //         setToken(res.data);
        //     }
        // }).catch(err=>{setStatus('wrong credentials')})

        navigate('/main');
    }

    return (
        <div className="App">
            <h1>Linkedin</h1>
            <h1>Login:</h1>

            <label>Username: </label><input type="text" onChange={e => setUsername(e.target.value)} /><br />
            <label>Password: </label><input type="password" onChange={e => setPassword(e.target.value)} /><br />
            <button onClick={e => handleSubmit()}>Login</button>
            <p>{status}</p>
        </div>
    )
}
