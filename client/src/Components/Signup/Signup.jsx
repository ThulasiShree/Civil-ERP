import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const Signup = () => {

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('', {name, email, password})
        .then(result => console.log(result))
        .catch(err => console.log(err))
    }

    return (
        <div className='d-flex align-items-center justify-content-center bg-secondary vh-100'>
            <div className="bg-white p-3 rounded w-25">
                <h2>Register</h2>
                <from onSubmit={handleSubmit}>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Name</label>
                        <input type="text" className="form-control rounded-0" id="exampleFormControlInput1" autoComplete="off" placeholder="Enter the Name" onChange={(e) => setName( e.target.value )} />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter the Mail Id" onChange={(e) => setEmail( e.target.value )} />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleFormControlInput1" placeholder="Entet the Password" onChange={(e) => setPassword( e.target.value )} />
                    </div>
                    <button className='btn btn-success w-100 rounded-0' type='submit'>Register</button>
                </from>
                <p>Already have an account</p>
                <Link to='/' className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Login</Link>
            </div>

        </div>
    )
}

export default Signup