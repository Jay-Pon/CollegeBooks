import React, {useState, useRef} from 'react'
import {useHistory} from 'react-router-dom'
import ViewBooks from './ViewBooks'

export default function Login() {
    
    const history = useHistory();

    const [myBooks, setMyBooks] = useState([]);
    const [error, setError] = useState("");

    const email = useRef();
    const password = useRef();

    const validLogin = async (email, password) => {
        console.log(email.current.value, password.current.value);
        const response = await fetch(`http://localhost:5000/login/${email.current.value}/${password.current.value}`);
        const data = await response.json();
        if (data === 0){
            setError("No such email-password combination")
        }
        else{
            history.push(`/mybooks/${email.current.value}`)
        }
        console.log(data);
    }

    const isInput = async (email, password) => {
        if (email.current.value === "" || password.current.value === ""){
            setError("No such email-password combination")
        }
        else{
            validLogin(email, password);
        }
    }

    return (
        <div class='container center'>
            <div class='input-group mb-4 mt-5'>
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="">Email</span>
                    </div>
                    <input ref={email} className='form-control' name="email" placeholder='example@university.edu'/>
            </div>
            <div class='input-group mb-4'>
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="">Password</span>
                    </div>
                    <input ref={password} type='password' className='form-control' name="password"/>
            </div>
            <p>{error}</p>
            <button class='btn btn-lg search-btn' onClick={e => isInput(email, password)}>Login</button>
        </div>
    )
}
