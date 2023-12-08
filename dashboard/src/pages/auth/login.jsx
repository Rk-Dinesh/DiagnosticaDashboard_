import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import { useNavigate,Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {jwtDecode} from 'jwt-decode';
import MobileLogo from "../../assets/logo.png";
import { API } from '../../host';

function Login({ setToken }) {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(`${API}/doctorlogin`, formData);
            

            const { token } = response.data;
            const decodedToken = jwtDecode(token);
            setToken(token);
            localStorage.setItem('token', token);
            
            toast.success('Login successful');
            navigate('/dashboard', );

        } catch (error) {
            console.error(error.response.data.message);
            toast.error('Invalid credentials');
        }
    }

    return (
        <section className="vh-100" style={{ backgroundColor: "#EEF1F9" }}>
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card shadow-2-strong " style={{ borderRadius: "1rem" }}>
                            <div className="card-body p-5">
                             
                                    <div className="d-flex justify-content-center align-items-center mb-3">
                                        <img src={MobileLogo} alt="" width="40px" />
                                    </div>
                              
                                <h6 className="mb-2 text-center" style={{ color: '#097969' }}>Pain Management</h6>
                                <h6 className="mb-2 text-center">Sign in</h6>
                                <form onSubmit={handleSubmit}>
                                    <div className="form-outline mb-3">
                                        <label className="form-label" htmlFor="email">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            placeholder="Email"
                                            name='email'
                                            className="form-control"
                                            onChange={handleChange}
                                            value={formData.email}
                                            required
                                        />
                                    </div>
                                    <div className="form-outline mb-3">
                                        <label className="form-label" htmlFor="password">
                                            Password
                                        </label>
                                        <input
                                            type="password"
                                            id="password"
                                            placeholder="Password"
                                            name='password'
                                            className="form-control"
                                            onChange={handleChange}
                                            value={formData.password}
                                            required
                                        />
                                    </div>
                                    <div className='text-center'>
                                        <button className="btn btn-dark text-center" type="submit">
                                            Sign in
                                        </button>
                                    </div>
                                </form>
                                <p className="small fw-bold mt-2 pt-1 mb-0">
                                    
                                    <Link to="/forgotpassword" className="link-danger">Forgot Password ?</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login;

