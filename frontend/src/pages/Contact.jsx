import React, { useState } from "react";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log("Form submitted:", formData);
        // Reset form
        setFormData({
            name: "",
            email: "",
            subject: "",
            message: ""
        });
        alert("Thank you for your message! We'll get back to you soon.");
    };

    return (
        <div className="container-fluid py-5">
            <div className="container">
                {/* Hero Section */}
                <div className="row mb-5">
                    <div className="col-12 text-center">
                        <h1 className="display-4 fw-bold text-dark mb-3">Contact Us</h1>
                        <p className="lead text-muted">
                            We'd love to hear from you. Get in touch with us for any questions or support.
                        </p>
                    </div>
                </div>

                <div className="row">
                    {/* Contact Information */}
                    <div className="col-lg-4 mb-5">
                        <div className="bg-light rounded-3 p-4 h-100">
                            <h3 className="h4 fw-bold text-dark mb-4">Get in Touch</h3>

                            <div className="d-flex align-items-center mb-4">
                                <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center me-3"
                                    style={{ width: "50px", height: "50px" }}>
                                    <i className="bi bi-geo-alt-fill text-white"></i>
                                </div>
                                <div>
                                    <h6 className="fw-bold mb-1">Address</h6>
                                    <p className="text-muted mb-0">
                                        123 Commerce Street<br />
                                        Business District, BD 12345
                                    </p>
                                </div>
                            </div>

                            <div className="d-flex align-items-center mb-4">
                                <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center me-3"
                                    style={{ width: "50px", height: "50px" }}>
                                    <i className="bi bi-telephone-fill text-white"></i>
                                </div>
                                <div>
                                    <h6 className="fw-bold mb-1">Phone</h6>
                                    <p className="text-muted mb-0">+1 (555) 123-4567</p>
                                </div>
                            </div>

                            <div className="d-flex align-items-center mb-4">
                                <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center me-3"
                                    style={{ width: "50px", height: "50px" }}>
                                    <i className="bi bi-envelope-fill text-white"></i>
                                </div>
                                <div>
                                    <h6 className="fw-bold mb-1">Email</h6>
                                    <p className="text-muted mb-0">support@estore.com</p>
                                </div>
                            </div>

                            <div className="d-flex align-items-center">
                                <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center me-3"
                                    style={{ width: "50px", height: "50px" }}>
                                    <i className="bi bi-clock-fill text-white"></i>
                                </div>
                                <div>
                                    <h6 className="fw-bold mb-1">Business Hours</h6>
                                    <p className="text-muted mb-0">
                                        Mon - Fri: 9:00 AM - 6:00 PM<br />
                                        Sat: 10:00 AM - 4:00 PM
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="col-lg-8">
                        <div className="card border-0 shadow-sm">
                            <div className="card-body p-5">
                                <h3 className="h4 fw-bold text-dark mb-4">Send us a Message</h3>

                                <form onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="name" className="form-label fw-semibold">
                                                Full Name *
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                placeholder="Enter your full name"
                                            />
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="email" className="form-label fw-semibold">
                                                Email Address *
                                            </label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                placeholder="Enter your email address"
                                            />
                                        </div>
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="subject" className="form-label fw-semibold">
                                            Subject *
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                            placeholder="Enter subject"
                                        />
                                    </div>

                                    <div className="mb-4">
                                        <label htmlFor="message" className="form-label fw-semibold">
                                            Message *
                                        </label>
                                        <textarea
                                            className="form-control"
                                            id="message"
                                            name="message"
                                            rows="5"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            placeholder="Enter your message"
                                        ></textarea>
                                    </div>

                                    <button type="submit" className="btn btn-primary btn-lg px-4">
                                        Send Message
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="row mt-5">
                    <div className="col-12">
                        <h2 className="h3 fw-bold text-dark text-center mb-5">Frequently Asked Questions</h2>
                    </div>
                    <div className="col-lg-6 mb-4">
                        <div className="card border-0 shadow-sm h-100">
                            <div className="card-body p-4">
                                <h5 className="fw-bold mb-3">
                                    <i className="bi bi-question-circle text-primary me-2"></i>
                                    How can I track my order?
                                </h5>
                                <p className="text-muted mb-0">
                                    You can track your order by logging into your account and visiting the "My Orders" section.
                                    You'll receive tracking information via email once your order ships.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 mb-4">
                        <div className="card border-0 shadow-sm h-100">
                            <div className="card-body p-4">
                                <h5 className="fw-bold mb-3">
                                    <i className="bi bi-question-circle text-primary me-2"></i>
                                    What is your return policy?
                                </h5>
                                <p className="text-muted mb-0">
                                    We offer a 30-day return policy for most items. Products must be in original condition
                                    with all packaging intact. Contact our support team to initiate a return.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 mb-4">
                        <div className="card border-0 shadow-sm h-100">
                            <div className="card-body p-4">
                                <h5 className="fw-bold mb-3">
                                    <i className="bi bi-question-circle text-primary me-2"></i>
                                    Do you ship internationally?
                                </h5>
                                <p className="text-muted mb-0">
                                    Yes, we ship to most countries worldwide. Shipping costs and delivery times vary by location.
                                    You can check shipping options during checkout.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 mb-4">
                        <div className="card border-0 shadow-sm h-100">
                            <div className="card-body p-4">
                                <h5 className="fw-bold mb-3">
                                    <i className="bi bi-question-circle text-primary me-2"></i>
                                    How can I contact customer support?
                                </h5>
                                <p className="text-muted mb-0">
                                    You can reach our customer support team via email at support@estore.com,
                                    phone at +1 (555) 123-4567, or by filling out the contact form above.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact; 