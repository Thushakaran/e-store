import React from "react";

const Footer = () => (
  <footer
    className="border-top shadow-sm mt-5 text-white"
    style={{
      padding: "32px 0 16px 0",
      boxShadow: "0 -2px 16px rgba(0,0,0,0.04)",
      background: "#343434",
    }}
  >
    <div className="container text-center">
      <div className="mb-3 d-flex justify-content-center gap-3">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="fs-4 mx-2 social-icon-footer text-white"
        >
          <i className="bi bi-facebook"></i>
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="fs-4 mx-2 social-icon-footer text-white"
        >
          <i className="bi bi-twitter"></i>
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="fs-4 mx-2 social-icon-footer text-white"
        >
          <i className="bi bi-instagram"></i>
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="fs-4 mx-2 social-icon-footer text-white"
        >
          <i className="bi bi-linkedin"></i>
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="fs-4 mx-2 social-icon-footer text-white"
        >
          <i className="bi bi-github"></i>
        </a>
      </div>
      <div
        className="small mb-2"
        style={{ textShadow: "0 1px 4px rgba(0,0,0,0.12)" }}
      >
        &copy; {new Date().getFullYear()} E-Store. All rights reserved.
      </div>
      <style>{`
        .social-icon-footer {
          transition: color 0.2s, transform 0.2s;
          color: #fff !important;
          text-shadow: 0 1px 4px rgba(0,0,0,0.10);
        }
        .social-icon-footer:hover {
          color: #ffb300 !important;
          transform: translateY(-3px) scale(1.15);
        }
      `}</style>
    </div>
  </footer>
);

export default Footer;
