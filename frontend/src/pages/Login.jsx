import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/userSlice';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const { loading, error, userInfo } = useSelector(state => state.user);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Get redirect path from URL parameters
    const searchParams = new URLSearchParams(location.search);
    const redirectPath = searchParams.get('redirect') || '/';

    useEffect(() => {
        if (userInfo) {
            // Redirect to the intended page or home
            navigate(redirectPath);
        }
    }, [userInfo, navigate, redirectPath]);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login({ email, password }));
    };

    return (
        <div className="bg-gradient-to-br from-white via-[#f8f9fa] to-[#f3f6fd] min-vh-100 d-flex align-items-center justify-content-center" style={{ minHeight: '100vh', background: 'linear-gradient(120deg, #f8fafc 0%, #f3f6fd 100%)' }}>
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-6 col-lg-5 col-xl-4">
                        <div className="card p-4 border-0 shadow-lg rounded-4 bg-white" style={{ backdropFilter: 'blur(6px)', border: '1px solid #f3f3f3' }}>
                            <div className="text-center mb-4">
                                <div className="mx-auto mb-3 d-flex align-items-center justify-content-center rounded bg-warning bg-opacity-75" style={{ width: 48, height: 48 }}>
                                    <span className="text-white fw-bold fs-3">E</span>
                                </div>
                                <h2 className="h4 fw-bold mb-1">Sign in to your account</h2>
                                <p className="text-muted small">Welcome back! Please enter your details.</p>
                            </div>
                            <form onSubmit={handleSubmit} className="vstack gap-3">
                                <div>
                                    <label htmlFor="email" className="form-label small fw-semibold">Email address</label>
                                    <input
                                        id="email"
                                        type="email"
                                        className="form-control"
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="password" className="form-label small fw-semibold">Password</label>
                                    <input
                                        id="password"
                                        type="password"
                                        className="form-control"
                                        value={password}
                                        onChange={e => setPassword(e.target.value)}
                                        required
                                    />
                                </div>
                                {error && <div className="alert alert-danger py-2 small mb-0">{error}</div>}
                                <button
                                    type="submit"
                                    className="btn btn-warning fw-semibold w-100 rounded-pill py-2 fs-5 shadow-sm"
                                    disabled={loading}
                                    style={{ letterSpacing: 1 }}
                                >
                                    {loading ? (
                                        <span className="spinner-border spinner-border-sm me-2"></span>
                                    ) : null}
                                    Sign In
                                </button>
                            </form>
                            <div className="text-center mt-3">
                                <span className="small text-muted">Don't have an account? </span>
                                <Link to={`/signup?redirect=${encodeURIComponent(redirectPath)}`} className="fw-semibold text-warning text-decoration-none">Sign Up</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;