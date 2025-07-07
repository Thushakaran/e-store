import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.userInfo);
  const cartCount = useSelector((state) => state.cart.items?.length || 0);

  const [menuOpen, setMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
    setUserMenuOpen(false);
    navigate("/login");
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light shadow-sm sticky-top border-bottom"
      style={{ color: "#fff", backgroundColor: "#343434" }}
    >
      <style>{`
        .nav-link-white {
          color: #fff !important;
          transition: color 0.2s;
        }
        .nav-link-white:hover, .nav-link-white:focus {
          color: #ff9800 !important;
          text-decoration: none;
        }
        .dropdown-menu .nav-link-white {
          color: #fff !important;
        }
        .dropdown-menu .nav-link-white:hover, .dropdown-menu .nav-link-white:focus {
          color: #ff9800 !important;
          background-color: #212529 !important;
        }
        .dropdown-menu {
          background-color: #212529 !important;
        }
        .navbar-toggler {
          color: #fff !important;
        }
      `}</style>
      <div className="container-fluid px-4">
        {/* Logo */}
        <a
          href="/"
          className="navbar-brand d-flex align-items-center gap-2 text-white"
          style={{ color: "#fff" }}
        >
          <div className="d-flex flex-column lh-1">
            <span
              className="fs-4 fw-bold text-white navbar-brand-hover"
              style={{ color: "#fff", cursor: "pointer" }}
            >
              🛒 E-Store
            </span>
            <style>{`
              .navbar-brand-hover:hover, .navbar-brand-hover:focus {
                color: #ff9800 !important;
                transition: color 0.2s;
              }
            `}</style>
          </div>
        </a>
        {/* Hamburger for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ color: "#fff" }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* Navbar content */}
        <div className={`collapse navbar-collapse${menuOpen ? " show" : ""}`}>
          {/* Right Side - Navigation Links and Auth */}
          <ul className="navbar-nav ms-auto align-items-center gap-2">
            {/* Navigation Links */}
            <li className="nav-item">
              <a className="nav-link nav-link-white" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-link-white" href="/about">About</a>
            </li>
            {/* Cart */}
            <li className="nav-item position-relative">
              <a
                href={user ? "/cart" : `/login?redirect=${encodeURIComponent('/cart')}`}
                className="nav-link position-relative nav-link-white"
              >
                <i className="bi bi-cart fs-4" style={{ color: "#fff" }}></i>
                {cartCount > 0 && (
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {cartCount}
                  </span>
                )}
              </a>
            </li>
            {/* Auth Section */}
            {user ? (
              <li className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link nav-link-white d-flex align-items-center gap-2 dropdown-toggle"
                  id="userDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded={userMenuOpen}
                  onClick={(e) => {
                    e.preventDefault();
                    setUserMenuOpen(!userMenuOpen);
                  }}
                  style={{
                    backgroundColor: "transparent",
                    border: "none",
                    cursor: "pointer",
                  }}
                  role="button"
                >
                  <span
                    className="d-flex align-items-center justify-content-center rounded-circle bg-primary text-white fw-bold"
                    style={{
                      width: 40,
                      height: 40,
                      background: "linear-gradient(135deg, #8f5fe8, #f857a6)",
                      color: "#fff",
                    }}
                  >
                    {user.name.charAt(0).toUpperCase()}
                  </span>
                  <span className="fw-semibold" style={{ color: "#fff" }}>
                    Hi, {user.name}
                  </span>
                </a>
                <ul
                  className={`dropdown-menu dropdown-menu-end mt-2${userMenuOpen ? " show" : ""
                    }`}
                  aria-labelledby="userDropdown"
                >
                  <li>
                    <a
                      className="dropdown-item nav-link-white"
                      href="/profile"
                      onClick={() => setUserMenuOpen(false)}
                    >
                      <i
                        className="bi bi-person me-2"
                        style={{ color: "#fff" }}
                      ></i>
                      Profile Settings
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item nav-link-white"
                      href="/orders"
                      onClick={() => setUserMenuOpen(false)}
                    >
                      <i
                        className="bi bi-bag me-2"
                        style={{ color: "#fff" }}
                      ></i>
                      My Orders
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a
                      href="#"
                      className="dropdown-item nav-link-white"
                      onClick={handleLogout}
                    >
                      <i
                        className="bi bi-box-arrow-right me-2"
                        style={{ color: "#fff" }}
                      ></i>
                      Sign Out
                    </a>
                  </li>
                </ul>
              </li>
            ) : (
              <>
                <li className="nav-item">
                  <a href="/login" className="nav-link nav-link-white me-2">
                    Sign In
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/signup" className="nav-link nav-link-white">
                    Sign Up
                  </a>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
