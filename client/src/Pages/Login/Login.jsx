import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {

    const navigate = useNavigate();

    return (
        <div className="login-page">
            <div className="container">
                <div className="row justify-content-end">
                    <div className="col-md-5 col-lg-4">
                        <div className="card login-card mb-5">
                            <div className="card-body">
                                <h3 className="card-title text-center text-light">Login</h3>
                                <form >
                                    <div className="form-group text-light">
                                        <label htmlFor="email" className='fw-semibold font-monospace'>Email</label>
                                        <input
                                            type="email"
                                            className="form-control text-body-secondary"
                                            id="email"
                                            placeholder="Email Address"
                                        />
                                    </div>
                                    <div className="form-group text-light">
                                        <label htmlFor="password" className='fw-semibold font-monospace'>Password</label>
                                        <input
                                            type="password"
                                            className="form-control border border-0 text-body-secondary"
                                            id="password"
                                            placeholder="Password"
                                        />
                                    </div>
                                    {/* {error && <div className="alert alert-danger">{error}</div>} */}
                                    <div className='d-flex flex-row justify-content-between'>
                                        <div className="form-group form-check form-switch">
                                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                            <label className="form-check-label pt-1" htmlFor="rememberMe">Remember me</label>
                                        </div>
                                        <a href="#" className="form-link text-dark text-decoration-underline pt-1">Forgot password?</a>
                                    </div>
                                    <button type="submit" className="login-btn fw-bolder text-white border border-0 rounded" onClick={() => navigate("/dashboard")}>Login</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
