import React, { useEffect, useState } from "react";

const About = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className="container-fluid min-h-screen" style={{ paddingTop: 0, marginTop: 0 }}>
            <div className="container">
                {/* Hero Section */}
                <div className="py-5 text-white hero-animated-bg" style={{ background: 'linear-gradient(270deg, #ff9800, #ff5858, #42a5f5, #ab47bc)', marginTop: 0, borderRadius: 0, width: '100vw', position: 'relative', left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw', paddingTop: 0, marginBottom: 50 }}>
                    <div className="container">
                        <div className="text-center position-relative">
                            {/* Floating Icon/Emoji */}
                            <div className="floating-hero-icon mx-auto mb-2">
                                <span style={{ fontSize: 56 }} role="img" aria-label="About E-Store">🛒</span>
                            </div>
                            <h1 className="display-4 fw-bold mb-3 animate-hero-title">About E-Store</h1>
                            <p className="lead mb-4 opacity-75 animate-hero-subtitle">Your trusted destination for quality products and exceptional shopping experience</p>
                        </div>
                    </div>
                </div>

                {/* Mission Section */}
                <div className={`row mb-5 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="col-12">
                        <div className="rounded-4 p-5 shadow-lg border-0 transform-hover">
                            <div className="row align-items-center">
                                <div className="col-lg-6 mb-4 mb-lg-0">
                                    <div className="position-relative mb-4">
                                        <div className="rounded-circle d-inline-flex align-items-center justify-content-center" style={{ width: '80px', height: '80px' }}>
                                            <i className="bi bi-bullseye text-white display-5"></i>
                                        </div>
                                        <div className="position-absolute top-0 start-100 translate-middle" style={{ width: '20px', height: '20px', borderRadius: '50%', animation: 'bounce 2s infinite' }}></div>
                                    </div>
                                    <h2 className="h3 fw-bold text-dark mb-3">Our Mission</h2>
                                    <p className="text-muted mb-4 fs-6">
                                        At E-Store, we believe in making quality products accessible to everyone.
                                        Our mission is to provide a seamless shopping experience with a wide range
                                        of carefully curated products that meet the highest standards of quality and value.
                                    </p>
                                    <p className="text-muted fs-6">
                                        We are committed to customer satisfaction, offering competitive prices,
                                        fast shipping, and exceptional customer service to ensure your shopping
                                        journey is nothing short of amazing.
                                    </p>
                                </div>
                                <div className="col-lg-6">
                                    <div className="text-center">
                                        <div className="position-relative mb-4">
                                            <div className="rounded-circle d-inline-flex align-items-center justify-content-center" style={{ width: '80px', height: '80px' }}>
                                                <i className="bi bi-award text-white display-5"></i>
                                            </div>
                                            <div className="position-absolute top-0 start-100 translate-middle" style={{ width: '20px', height: '20px', borderRadius: '50%', animation: 'bounce 2s infinite' }}></div>
                                        </div>
                                        <h4 className="fw-bold text-dark">Quality Assured</h4>
                                        <p className="text-muted mb-0">Every product meets our strict quality standards</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Values Section */}
                <div className={`row mb-5 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="col-12">
                        <h2 className="h3 fw-bold text-dark text-center mb-5">
                            Our Core Values
                        </h2>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card border-0 shadow-lg h-100 transform-hover bg-white" style={{ transition: 'all 0.3s ease', borderRadius: '20px' }}>
                            <div className="card-body text-center p-5">
                                <div className="position-relative mb-4">
                                    <div className="bg-danger bg-gradient rounded-circle d-inline-flex align-items-center justify-content-center" style={{ width: '70px', height: '70px' }}>
                                        <i className="bi bi-heart-fill text-white display-6"></i>
                                    </div>
                                    <div className="position-absolute top-0 start-100 translate-middle" style={{ width: '15px', height: '15px', background: '#ef4444', borderRadius: '50%', animation: 'pulse 1.5s infinite' }}></div>
                                </div>
                                <h5 className="card-title fw-bold text-dark">Customer First</h5>
                                <p className="card-text text-muted">
                                    Your satisfaction is our top priority. We go above and beyond to ensure
                                    you have the best shopping experience possible.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card border-0 shadow-lg h-100 transform-hover bg-white" style={{ transition: 'all 0.3s ease', borderRadius: '20px' }}>
                            <div className="card-body text-center p-5">
                                <div className="position-relative mb-4">
                                    <div className="bg-success bg-gradient rounded-circle d-inline-flex align-items-center justify-content-center" style={{ width: '70px', height: '70px' }}>
                                        <i className="bi bi-shield-check text-white display-6"></i>
                                    </div>
                                    <div className="position-absolute top-0 start-100 translate-middle" style={{ width: '15px', height: '15px', background: '#10b981', borderRadius: '50%', animation: 'pulse 1.5s infinite 0.3s' }}></div>
                                </div>
                                <h5 className="card-title fw-bold text-dark">Quality & Trust</h5>
                                <p className="card-text text-muted">
                                    We partner with trusted brands and suppliers to bring you only the
                                    highest quality products you can rely on.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card border-0 shadow-lg h-100 transform-hover bg-white" style={{ transition: 'all 0.3s ease', borderRadius: '20px' }}>
                            <div className="card-body text-center p-5">
                                <div className="position-relative mb-4">
                                    <div className="bg-warning bg-gradient rounded-circle d-inline-flex align-items-center justify-content-center" style={{ width: '70px', height: '70px' }}>
                                        <i className="bi bi-lightning-charge text-white display-6"></i>
                                    </div>
                                    <div className="position-absolute top-0 start-100 translate-middle" style={{ width: '15px', height: '15px', background: '#f59e0b', borderRadius: '50%', animation: 'pulse 1.5s infinite 0.6s' }}></div>
                                </div>
                                <h5 className="card-title fw-bold text-dark">Fast & Reliable</h5>
                                <p className="card-text text-muted">
                                    Quick delivery and reliable service are what we're known for.
                                    Your orders reach you when you need them.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Team Section */}
                <div className={`row mb-5 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="col-12">
                        <h2 className="h3 fw-bold text-dark text-center mb-5">
                            Our Team
                        </h2>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4">
                        <div className="text-center transform-hover" style={{ transition: 'all 0.3s ease' }}>
                            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-circle d-inline-flex align-items-center justify-content-center mb-3 shadow-lg position-relative"
                                style={{ width: "120px", height: "120px" }}>
                                <i className="bi bi-person-fill text-white display-4"></i>
                                <div className="position-absolute top-0 start-100 translate-middle" style={{ width: '25px', height: '25px', background: '#10b981', borderRadius: '50%', animation: 'bounce 2s infinite' }}></div>
                            </div>
                            <h5 className="fw-bold text-dark">John Smith</h5>
                            <p className="text-muted mb-0">Founder & CEO</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4">
                        <div className="text-center transform-hover" style={{ transition: 'all 0.3s ease' }}>
                            <div className="bg-gradient-to-br from-pink-500 to-red-500 rounded-circle d-inline-flex align-items-center justify-content-center mb-3 shadow-lg position-relative"
                                style={{ width: "120px", height: "120px" }}>
                                <i className="bi bi-person-fill text-white display-4"></i>
                                <div className="position-absolute top-0 start-100 translate-middle" style={{ width: '25px', height: '25px', background: '#10b981', borderRadius: '50%', animation: 'bounce 2s infinite 0.5s' }}></div>
                            </div>
                            <h5 className="fw-bold text-dark">Sarah Johnson</h5>
                            <p className="text-muted mb-0">Head of Operations</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4">
                        <div className="text-center transform-hover" style={{ transition: 'all 0.3s ease' }}>
                            <div className="bg-gradient-to-br from-green-500 to-teal-500 rounded-circle d-inline-flex align-items-center justify-content-center mb-3 shadow-lg position-relative"
                                style={{ width: "120px", height: "120px" }}>
                                <i className="bi bi-person-fill text-white display-4"></i>
                                <div className="position-absolute top-0 start-100 translate-middle" style={{ width: '25px', height: '25px', background: '#10b981', borderRadius: '50%', animation: 'bounce 2s infinite 1s' }}></div>
                            </div>
                            <h5 className="fw-bold text-dark">Mike Davis</h5>
                            <p className="text-muted mb-0">Customer Success</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4">
                        <div className="text-center transform-hover" style={{ transition: 'all 0.3s ease' }}>
                            <div className="bg-gradient-to-br from-yellow-500 to-orange-500 rounded-circle d-inline-flex align-items-center justify-content-center mb-3 shadow-lg position-relative"
                                style={{ width: "120px", height: "120px" }}>
                                <i className="bi bi-person-fill text-white display-4"></i>
                                <div className="position-absolute top-0 start-100 translate-middle" style={{ width: '25px', height: '25px', background: '#10b981', borderRadius: '50%', animation: 'bounce 2s infinite 1.5s' }}></div>
                            </div>
                            <h5 className="fw-bold text-dark">Lisa Wilson</h5>
                            <p className="text-muted mb-0">Product Manager</p>
                        </div>
                    </div>
                </div>

                {/* Stats Section */}
                <div className={`row bg-white rounded-4 p-5 mb-5 shadow-lg border-0 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="col-md-3 col-6 text-center mb-3">
                        <div className="position-relative">
                            <h3 className="fw-bold text-primary display-6 mb-2">10K+</h3>
                            <p className="text-muted mb-0">Happy Customers</p>
                            <div className="position-absolute top-0 start-50 translate-middle-x" style={{ width: '40px', height: '3px', background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)', borderRadius: '2px' }}></div>
                        </div>
                    </div>
                    <div className="col-md-3 col-6 text-center mb-3">
                        <div className="position-relative">
                            <h3 className="fw-bold text-primary display-6 mb-2">500+</h3>
                            <p className="text-muted mb-0">Products</p>
                            <div className="position-absolute top-0 start-50 translate-middle-x" style={{ width: '40px', height: '3px', background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)', borderRadius: '2px' }}></div>
                        </div>
                    </div>
                    <div className="col-md-3 col-6 text-center mb-3">
                        <div className="position-relative">
                            <h3 className="fw-bold text-primary display-6 mb-2">50+</h3>
                            <p className="text-muted mb-0">Brands</p>
                            <div className="position-absolute top-0 start-50 translate-middle-x" style={{ width: '40px', height: '3px', background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)', borderRadius: '2px' }}></div>
                        </div>
                    </div>
                    <div className="col-md-3 col-6 text-center mb-3">
                        <div className="position-relative">
                            <h3 className="fw-bold text-primary display-6 mb-2">24/7</h3>
                            <p className="text-muted mb-0">Support</p>
                            <div className="position-absolute top-0 start-50 translate-middle-x" style={{ width: '40px', height: '3px', background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)', borderRadius: '2px' }}></div>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className={`row transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="col-12 text-center">
                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-4 p-5 text-white shadow-lg position-relative overflow-hidden">
                            <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: 'radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%)' }}></div>
                            <div className="position-relative">
                                <h3 className="fw-bold mb-3 display-6">Ready to Start Shopping?</h3>
                                <p className="mb-4 fs-5 opacity-90">
                                    Join thousands of satisfied customers and discover amazing products today!
                                </p>
                                <a href="/" className="btn btn-light btn-lg px-5 py-3 fw-bold rounded-pill shadow-lg transform-hover" style={{ transition: 'all 0.3s ease' }}>
                                    Start Shopping Now
                                    <i className="bi bi-arrow-right ms-2"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .transform-hover:hover {
                    transform: translateY(-10px);
                }
                
                @keyframes pulse {
                    0%, 100% {
                        transform: scale(1);
                        opacity: 1;
                    }
                    50% {
                        transform: scale(1.2);
                        opacity: 0.7;
                    }
                }
                
                @keyframes bounce {
                    0%, 20%, 50%, 80%, 100% {
                        transform: translateY(0);
                    }
                    40% {
                        transform: translateY(-10px);
                    }
                    60% {
                        transform: translateY(-5px);
                    }
                }
                
                .bg-gradient-to-br {
                    background: linear-gradient(to bottom right, var(--bs-primary), var(--bs-purple));
                }
                
                .bg-gradient-to-r {
                    background: linear-gradient(to right, var(--bs-primary), var(--bs-purple));
                }
                
                .from-blue-50 {
                    background-color: #eff6ff;
                }
                
                .to-indigo-100 {
                    background-color: #e0e7ff;
                }
                
                .from-blue-500 {
                    background-color: #3b82f6;
                }
                
                .to-purple-600 {
                    background-color: #9333ea;
                }
                
                .from-pink-500 {
                    background-color: #ec4899;
                }
                
                .to-red-500 {
                    background-color: #ef4444;
                }
                
                .from-green-500 {
                    background-color: #10b981;
                }
                
                .to-teal-500 {
                    background-color: #14b8a6;
                }
                
                .from-yellow-500 {
                    background-color: #eab308;
                }
                
                .to-orange-500 {
                    background-color: #f97316;
                }
                
                .from-blue-600 {
                    background-color: #2563eb;
                }
                
                .rounded-4 {
                    border-radius: 1rem !important;
                }
                
                .display-6 {
                    font-size: 2.5rem;
                    font-weight: 300;
                    line-height: 1.2;
                }
                /* Home hero styles */
                .hero-animated-bg {
                    background-size: 400% 400%;
                    animation: heroGradientMove 10s ease-in-out infinite alternate;
                }
                @keyframes heroGradientMove {
                    0% { background-position: 0% 50%; }
                    100% { background-position: 100% 50%; }
                }
                .floating-hero-icon {
                    animation: floatingIcon 2.8s ease-in-out infinite alternate;
                    width: 64px;
                    height: 64px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                @keyframes floatingIcon {
                    0% { transform: translateY(0); }
                    100% { transform: translateY(-18px); }
                }
                .animate-hero-title {
                    animation: heroTitleIn 1s cubic-bezier(0.4,0,0.2,1) 0.3s both;
                }
                .animate-hero-subtitle {
                    animation: heroSubtitleIn 1s cubic-bezier(0.4,0,0.2,1) 0.7s both;
                }
                @keyframes heroTitleIn {
                    0% { opacity: 0; transform: translateY(-30px); }
                    100% { opacity: 1; transform: translateY(0); }
                }
                @keyframes heroSubtitleIn {
                    0% { opacity: 0; transform: translateY(30px); }
                    100% { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </div>
    );
};

export default About; 