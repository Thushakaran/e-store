import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signup } from '../redux/userSlice';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { loading, error, userInfo } = useSelector(state => state.user);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [terms, setTerms] = useState(false);

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
    if (password !== confirmPassword) return;
    dispatch(signup({ name, email, password }));
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
                <h2 className="h4 fw-bold mb-1">Create your account</h2>
                <p className="text-muted small">Join us and start shopping today</p>
              </div>
              <form onSubmit={handleSubmit} className="vstack gap-3">
                <div>
                  <label htmlFor="name" className="form-label small fw-semibold">Name</label>
                  <input
                    id="name"
                    type="text"
                    className="form-control"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required
                  />
                </div>
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
                <div>
                  <label htmlFor="confirmPassword" className="form-label small fw-semibold">Confirm Password</label>
                  <input
                    id="confirmPassword"
                    type="password"
                    className="form-control"
                    value={confirmPassword}
                    onChange={e => setConfirmPassword(e.target.value)}
                    required
                  />
                  {confirmPassword && password !== confirmPassword && (
                    <div className="alert alert-danger py-2 small mt-2 mb-0">Passwords do not match</div>
                  )}
                </div>
                <div className="form-check mb-2">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="terms"
                    checked={terms}
                    onChange={e => setTerms(e.target.checked)}
                    required
                  />
                  <label className="form-check-label small" htmlFor="terms">
                    I agree to the <a href="#" className="text-warning text-decoration-none">Terms & Conditions</a>
                  </label>
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
                  Sign Up
                </button>
              </form>
              <div className="text-center mt-3">
                <span className="small text-muted">Already have an account? </span>
                <Link to={`/login?redirect=${encodeURIComponent(redirectPath)}`} className="fw-semibold text-warning text-decoration-none">Sign In</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
