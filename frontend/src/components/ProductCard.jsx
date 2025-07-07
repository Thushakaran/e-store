import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, onAddToCart }) => {
    // Generate random rating for demo
    const rating = Math.floor(Math.random() * 2) + 4; // 4-5 stars
    const reviewCount = Math.floor(Math.random() * 100) + 10; // 10-109 reviews

    return (
        <div className="card h-100 shadow-sm border-0">
            {/* Product Image */}
            <Link to={`/product/${product._id}`} className="position-relative">
                <div className="ratio ratio-1x1 bg-light d-flex align-items-center justify-content-center overflow-hidden">
                    <img
                        src={product.images?.[0]?.image || '/vite.svg'}
                        alt={product.name}
                        className="card-img-top object-fit-contain"
                        loading="lazy"
                        style={{ maxHeight: 180, objectFit: 'contain' }}
                    />
                </div>

                {/* Discount Badge */}
                {Math.random() > 0.7 && (
                    <div className="position-absolute top-0 start-0 bg-danger text-white small fw-bold px-2 py-1 rounded m-2">
                        -{Math.floor(Math.random() * 30) + 10}%
                    </div>
                )}

                {/* Quick View Overlay */}
                <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center" style={{ background: 'rgba(0,0,0,0)', transition: 'background 0.3s' }}>
                    <div className="opacity-0 group-hover-opacity-100 transition-opacity">
                        <div className="bg-white text-dark px-3 py-1 rounded-pill small fw-medium border">
                            Quick View
                        </div>
                    </div>
                </div>
            </Link>

            {/* Product Info */}
            <div className="card-body">
                {/* Product Name */}
                <Link to={`/product/${product._id}`} className="text-decoration-none">
                    <h3 className="card-title fs-6 fw-semibold text-dark mb-2" style={{ minHeight: '2.5em' }}>
                        {product.name}
                    </h3>
                </Link>

                {/* Rating */}
                <div className="d-flex align-items-center mb-2">
                    <div className="d-flex align-items-center">
                        {[...Array(5)].map((_, i) => (
                            <svg
                                key={i}
                                width="16" height="16"
                                className={`me-1 ${i < rating ? 'text-warning' : 'text-secondary'}`}
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                        ))}
                    </div>
                    <span className="text-muted small ms-1">({reviewCount})</span>
                </div>

                {/* Price */}
                <div className="d-flex align-items-center justify-content-between mb-3">
                    <div className="d-flex align-items-center gap-2">
                        <span className="fs-5 fw-bold text-dark">${product.price}</span>
                        {Math.random() > 0.6 && (
                            <span className="text-muted text-decoration-line-through small">
                                ${(product.price * 1.2).toFixed(2)}
                            </span>
                        )}
                    </div>

                    {/* Stock Status */}
                    <div className="small text-success fw-semibold">
                        In Stock
                    </div>
                </div>

                {/* Add to Cart Button */}
                <button
                    onClick={() => onAddToCart(product)}
                    className="btn btn-warning w-100 d-flex align-items-center justify-content-center gap-2 fw-medium"
                >
                    <i className="bi bi-credit-card-fill" style={{ fontSize: 18 }}></i>
                    <span>Add to Cart</span>
                </button>

                {/* Additional Info */}
                <div className="mt-3 pt-3 border-top">
                    <div className="d-flex align-items-center justify-content-between small text-muted">
                        <span>Free Shipping</span>
                        <span>Express Delivery</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard; 