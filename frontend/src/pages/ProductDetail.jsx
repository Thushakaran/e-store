import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../services/api';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, addToCartBackend } from '../redux/cartSlice';

const ProductDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedImage, setSelectedImage] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
    const user = useSelector(state => state.user.userInfo);
    const [addingToCart, setAddingToCart] = useState(false);

    useEffect(() => {
        const fetchProduct = async () => {
            setLoading(true);
            try {
                const res = await api.get(`/product/${id}`);
                setProduct(res.data.product);
            } catch {
                setError('Failed to load product');
            } finally {
                setLoading(false);
            }
        };
        fetchProduct();
    }, [id]);

    const handleAddToCart = async () => {
        if (product) {
            if (user) {
                setAddingToCart(true);
                try {
                    await dispatch(addToCartBackend({ productId: product._id, quantity }));
                } catch {
                    setError('Failed to add to cart');
                } finally {
                    setAddingToCart(false);
                }
            } else {
                // Redirect to login with redirect parameter
                navigate(`/login?redirect=${encodeURIComponent(window.location.pathname)}`);
            }
        }
    };

    if (loading) return (
        <div className="d-flex align-items-center justify-content-center min-vh-100 bg-light">
            <div className="text-center">
                <div className="spinner-border text-warning mb-3" style={{ width: '3rem', height: '3rem' }} role="status"></div>
                <p className="mt-3 text-muted">Loading product...</p>
            </div>
        </div>
    );

    if (error) return (
        <div className="d-flex align-items-center justify-content-center min-vh-100 bg-light">
            <div className="text-center">
                <div className="display-3 text-danger mb-3">⚠️</div>
                <p className="text-danger fs-5">{error}</p>
            </div>
        </div>
    );

    if (!product) return (
        <div className="d-flex align-items-center justify-content-center min-vh-100 bg-light">
            <div className="text-center">
                <div className="display-3 text-muted mb-3">🔍</div>
                <p className="text-muted fs-5">Product not found</p>
            </div>
        </div>
    );

    return (
        <div className="bg-gradient-to-br from-white via-[#f8f9fa] to-[#f3f6fd] min-vh-100 py-3" style={{ minHeight: '100vh', background: 'linear-gradient(120deg, #f8fafc 0%, #f3f6fd 100%)' }}>
            <div className="container">
                {/* Breadcrumb */}
                <div className="mb-3">
                    <nav className="small text-muted">
                        <a href="/" className="text-decoration-none text-secondary">Home</a>
                        <span className="mx-2">/</span>
                        <span className="text-dark">{product.name}</span>
                    </nav>
                </div>

                <div className="row justify-content-center">
                    <div className="col-12 col-lg-10">
                        <div className="card p-3 border-0 shadow-lg rounded-4 bg-white d-flex flex-row align-items-stretch" style={{ backdropFilter: 'blur(6px)', border: '1px solid #f3f3f3' }}>
                            {/* Image Section */}
                            <div className="col-12 col-lg-5 d-flex flex-column align-items-center justify-content-center">
                                <div className="bg-light rounded mb-2 d-flex align-items-center justify-content-center w-100" style={{ aspectRatio: '1/1', minHeight: 200, overflow: 'hidden' }}>
                                    <img
                                        src={product.images?.[selectedImage]?.image || product.images?.[0]?.image || ''}
                                        alt={product.name}
                                        className="w-100 h-100 object-fit-contain"
                                        style={{ objectFit: 'contain', maxHeight: 200 }}
                                    />
                                </div>
                                {/* Thumbnail Images */}
                                {product.images && product.images.length > 1 && (
                                    <div className="d-flex gap-1">
                                        {product.images.map((image, index) => (
                                            <button
                                                key={index}
                                                onClick={() => setSelectedImage(index)}
                                                className={`border rounded p-1 ${selectedImage === index ? 'border-warning' : 'border-secondary'}`}
                                                style={{ width: 48, height: 48, overflow: 'hidden', background: '#fff' }}
                                            >
                                                <img
                                                    src={image.image}
                                                    alt={`${product.name} ${index + 1}`}
                                                    className="w-100 h-100 object-fit-contain"
                                                    style={{ objectFit: 'contain' }}
                                                />
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                            {/* Product Info Section */}
                            <div className="col-12 col-lg-7 ps-lg-4 d-flex flex-column justify-content-center">
                                <h1 className="h3 fw-bold text-dark mb-2">{product.name}</h1>
                                {/* Rating */}
                                <div className="d-flex align-items-center mb-2">
                                    <div className="d-flex align-items-center">
                                        {[...Array(5)].map((_, i) => (
                                            <svg
                                                key={i}
                                                width="20" height="20"
                                                className="me-1 text-warning"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>
                                    <span className="text-muted ms-2">(128 reviews)</span>
                                </div>
                                {/* Price */}
                                <div className="mb-3">
                                    <div className="d-flex align-items-center gap-2 mb-1">
                                        <span className="display-6 fw-bold text-dark">${product.price}</span>
                                        <span className="fs-6 text-muted text-decoration-line-through">${(product.price * 1.2).toFixed(2)}</span>
                                        <span className="badge bg-danger small">-20%</span>
                                    </div>
                                    <p className="text-success small mt-1">Free shipping on orders above $50</p>
                                </div>
                                {/* Description */}
                                <div className="mb-3">
                                    <h3 className="h6 fw-semibold mb-1">Description</h3>
                                    <p className="text-muted lh-base small">{product.description}</p>
                                </div>
                                {/* Quantity */}
                                <div className="mb-3">
                                    <label className="form-label small fw-semibold mb-2">Quantity</label>
                                    <div className="d-flex align-items-center gap-2">
                                        <button
                                            onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                            className="btn btn-outline-secondary px-3 py-1"
                                        >
                                            -
                                        </button>
                                        <input
                                            type="number"
                                            value={quantity}
                                            onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                                            className="form-control text-center"
                                            min="1"
                                            style={{ width: 60 }}
                                        />
                                        <button
                                            onClick={() => setQuantity(quantity + 1)}
                                            className="btn btn-outline-secondary px-3 py-1"
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                                {/* Action Buttons */}
                                <div className="d-flex gap-2 mb-3">
                                    <button
                                        className="btn btn-warning fw-semibold rounded-pill py-1 px-3 fs-6 shadow-sm"
                                        onClick={handleAddToCart}
                                        disabled={addingToCart}
                                        style={{ letterSpacing: 1 }}
                                    >
                                        {addingToCart ? (
                                            <span className="spinner-border spinner-border-sm me-2"></span>
                                        ) : null}
                                        Add to Cart
                                    </button>
                                    <button className="btn btn-outline-warning px-3 py-1 fw-semibold small">Buy Now</button>
                                    <button className="btn btn-outline-secondary px-3 py-1 fw-semibold small">
                                        <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                        </svg>
                                    </button>
                                </div>
                                {/* Features */}
                                <div className="border-top pt-3">
                                    <div className="row g-2 small">
                                        <div className="col-6 d-flex align-items-center gap-2">
                                            <svg width="20" height="20" className="text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span>Free Shipping</span>
                                        </div>
                                        <div className="col-6 d-flex align-items-center gap-2">
                                            <svg width="20" height="20" className="text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span>Quality Guarantee</span>
                                        </div>
                                        <div className="col-6 d-flex align-items-center gap-2">
                                            <svg width="20" height="20" className="text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 109.75 9.75A9.75 9.75 0 0012 2.25z" />
                                            </svg>
                                            <span>24/7 Support</span>
                                        </div>
                                        <div className="col-6 d-flex align-items-center gap-2">
                                            <svg width="20" height="20" className="text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3" />
                                            </svg>
                                            <span>Express Delivery</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
