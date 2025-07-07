import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts, setLoading, setError } from '../redux/productSlice';
import api from '../services/api';
import ProductCard from '../components/ProductCard';
import { addToCart, addToCartBackend } from '../redux/cartSlice';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { items, loading, error, total, page, totalPages } = useSelector(state => state.products);
    const user = useSelector(state => state.user.userInfo);
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 4;
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [searchInput, setSearchInput] = useState("");
    const [searchQuery, setSearchQuery] = useState("");
    const categoriesRef = useRef(null);
    const productsRef = useRef(null);

    useEffect(() => {
        const fetchProducts = async () => {
            dispatch(setLoading(true));
            try {
                let url = `/products?page=${currentPage}&limit=${productsPerPage}`;
                if (selectedCategory) {
                    url += `&category=${encodeURIComponent(selectedCategory)}`;
                }
                if (searchQuery) {
                    url += `&search=${encodeURIComponent(searchQuery)}`;
                }
                const res = await api.get(url);
                dispatch(setProducts({
                    items: res.data.products,
                    total: res.data.total,
                    page: res.data.page,
                    totalPages: res.data.totalPages
                }));
            } catch {
                dispatch(setError('Failed to load products'));
            } finally {
                dispatch(setLoading(false));
            }
        };
        fetchProducts();
    }, [dispatch, currentPage, selectedCategory, searchQuery]);

    const handleAddToCart = (product) => {
        if (user) {
            dispatch(addToCartBackend({ productId: product._id, quantity: 1 }));
        } else {
            navigate(`/login?redirect=${encodeURIComponent(window.location.pathname)}`);
        }
    };

    if (loading) return (
        <div className="d-flex align-items-center justify-content-center min-vh-100 bg-light">
            <div className="text-center">
                <div className="spinner-border text-warning mb-3" style={{ width: '3rem', height: '3rem' }} role="status"></div>
                <p className="mt-3 text-muted">Loading products...</p>
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

    return (
        <div className="bg-light min-vh-100">
            {/* Hero Section */}
            <div className="py-5 text-white hero-animated-bg" style={{ background: 'linear-gradient(270deg, #ff9800, #ff5858, #42a5f5, #ab47bc)' }}>
                <div className="container">
                    <div className="text-center position-relative">
                        {/* Floating Icon/Emoji */}
                        <div className="floating-hero-icon mx-auto mb-2">
                            <span style={{ fontSize: 56 }} role="img" aria-label="E-Store">🛒</span>
                        </div>
                        <h1 className="display-4 fw-bold mb-3 animate-hero-title">Welcome to E-Store</h1>
                        <p className="lead mb-4 opacity-75 animate-hero-subtitle">Discover Amazing Products at Great Prices</p>
                        <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
                            <button
                                className="btn btn-light text-warning fw-semibold px-4 py-2 animate-hero-btn hero-btn-pulse"
                                onClick={() => {
                                    if (productsRef.current) {
                                        productsRef.current.scrollIntoView({ behavior: 'smooth' });
                                    }
                                }}
                            >
                                Shop Now
                            </button>
                            <button
                                className="btn btn-outline-light fw-semibold px-4 py-2 animate-hero-btn"
                                onClick={() => {
                                    if (categoriesRef.current) {
                                        categoriesRef.current.scrollIntoView({ behavior: 'smooth' });
                                    }
                                }}
                            >
                                View Categories
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Categories Section */}
            <div ref={categoriesRef} className="py-5 bg-white">
                <div className="container">
                    <h2 className="h3 fw-bold text-center mb-4 text-dark">Shop by Category</h2>
                    <div className="row g-3 justify-content-center">
                        {[
                            { name: 'Electronics', icon: '📱' },
                            { name: 'Fashion', icon: '👕' },
                            { name: 'Home', icon: '🏠' },
                            { name: 'Sports', icon: '⚽' },
                            { name: 'Books', icon: '📚' },
                            { name: 'Beauty', icon: '💄' }
                        ].map((category) => (
                            <div key={category.name} className="col-6 col-md-4 col-lg-2">
                                <div
                                    className={`bg-light rounded text-center p-3 h-100 border hover-shadow${selectedCategory === category.name ? ' border-warning shadow' : ''}`}
                                    style={{ cursor: 'pointer' }}
                                    onClick={() => {
                                        setSelectedCategory(category.name);
                                        setCurrentPage(1);
                                    }}
                                >
                                    <div className="mx-auto mb-2 d-flex align-items-center justify-content-center rounded-circle bg-warning bg-opacity-25" style={{ width: 48, height: 48 }}>
                                        <span className="text-warning fw-bold fs-4">{category.icon}</span>
                                    </div>
                                    <p className="small fw-medium text-dark mb-0">{category.name}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    {selectedCategory && (
                        <div className="text-center mt-3">
                            <button className="btn btn-outline-secondary btn-sm" onClick={() => setSelectedCategory(null)}>
                                Clear Category Filter
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* Search Bar (placed above product list, as is common) */}
            <div className="py-3 bg-white">
                <div className="container">
                    <form
                        className="mx-auto"
                        style={{ maxWidth: 500 }}
                        onSubmit={e => {
                            e.preventDefault();
                            setCurrentPage(1);
                            setSearchQuery(searchInput);
                        }}
                    >
                        <div
                            className="input-group shadow bg-white p-1"
                            style={{
                                transition: 'box-shadow 0.2s',
                                boxShadow: '0 2px 16px rgba(0,0,0,0.07)',
                                borderRadius: 8,
                                minHeight: 38
                            }}
                        >
                            <input
                                type="text"
                                className="form-control border-0 bg-transparent px-3"
                                style={{ boxShadow: 'none', fontSize: 15, borderRadius: 8, height: 36 }}
                                placeholder="Search for products..."
                                value={searchInput}
                                onChange={e => setSearchInput(e.target.value)}
                                onFocus={e => e.target.parentNode.classList.add('shadow-lg')}
                                onBlur={e => e.target.parentNode.classList.remove('shadow-lg')}
                            />
                            <button
                                className="btn btn-warning px-3 fw-semibold"
                                type="submit"
                                style={{
                                    fontSize: 15,
                                    transition: 'background 0.2s',
                                    borderRadius: 8,
                                    height: 36
                                }}
                            >
                                <i className="bi bi-search me-2"></i>Search
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            {/* Product List Section */}
            <div ref={productsRef} className="py-5">
                <div className="container">
                    <div className="d-flex align-items-center justify-content-between mb-4 flex-wrap gap-2">
                        <h2 className="h3 fw-bold text-dark mb-0">Featured Products</h2>
                    </div>

                    {items.length === 0 ? (
                        <div className="text-center py-5">
                            <div className="display-3 text-muted mb-3">📦</div>
                            <p className="text-muted fs-5">No products available at the moment.</p>
                        </div>
                    ) : (
                        <>
                            <div className="row g-4 justify-content-center">
                                {items.map(product => (
                                    <div key={product._id} className="col-12 col-sm-6 col-md-6 col-lg-3">
                                        <div className="h-100">
                                            <div className="h-100 card border-0 shadow-sm rounded-4 overflow-hidden bg-white product-card-hover" style={{ transition: 'transform 0.2s, box-shadow 0.2s', minHeight: 340 }}>
                                                <ProductCard product={product} onAddToCart={handleAddToCart} />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            {/* Pagination */}
                            {totalPages > 1 && (
                                <nav className="d-flex justify-content-center mt-4">
                                    <ul className="pagination pagination-lg gap-2" style={{ padding: '0 8px' }}>
                                        <li
                                            className={`page-item${currentPage === 1 ? ' disabled' : ''}`}
                                            style={{ borderRadius: '8px', overflow: 'hidden', marginRight: '4px' }}
                                        >
                                            <button
                                                className="page-link"
                                                style={{
                                                    minWidth: '44px',
                                                    fontSize: '18px',
                                                    borderRadius: '8px',
                                                    padding: '8px 16px',
                                                    margin: '0 2px'
                                                }}
                                                onClick={() => setCurrentPage(currentPage - 1)}
                                                disabled={currentPage === 1}
                                            >
                                                &laquo;
                                            </button>
                                        </li>
                                        {(() => {
                                            // Show max 4 page numbers, with spaces
                                            let start = Math.max(1, Math.min(currentPage - 1, totalPages - 3));
                                            let end = Math.min(totalPages, start + 3);
                                            let pages = [];
                                            for (let i = start; i <= end; i++) {
                                                pages.push(
                                                    <li
                                                        key={i}
                                                        className={`page-item${currentPage === i ? ' active' : ''}`}
                                                        style={{ borderRadius: '8px', overflow: 'hidden', margin: '0 4px' }}
                                                    >
                                                        <button
                                                            className={`page-link fw-semibold${currentPage === i ? ' bg-warning text-dark border-0' : ''}`}
                                                            style={{
                                                                minWidth: '44px',
                                                                fontSize: '18px',
                                                                transition: 'background 0.2s',
                                                                borderRadius: '8px',
                                                                padding: '8px 16px',
                                                                margin: '0 2px'
                                                            }}
                                                            onClick={() => setCurrentPage(i)}
                                                        >
                                                            {i}
                                                        </button>
                                                    </li>
                                                );
                                            }
                                            return pages;
                                        })()}
                                        <li
                                            className={`page-item${currentPage === totalPages ? ' disabled' : ''}`}
                                            style={{ borderRadius: '8px', overflow: 'hidden', marginLeft: '4px' }}
                                        >
                                            <button
                                                className="page-link"
                                                style={{
                                                    minWidth: '44px',
                                                    fontSize: '18px',
                                                    borderRadius: '8px',
                                                    padding: '8px 16px',
                                                    margin: '0 2px'
                                                }}
                                                onClick={() => setCurrentPage(currentPage + 1)}
                                                disabled={currentPage === totalPages}
                                            >
                                                &raquo;
                                            </button>
                                        </li>
                                    </ul>
                                </nav>
                            )}
                        </>
                    )}
                </div>
            </div>

            {/* Features Section */}
            <div className="bg-white py-5 border-top">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-md-4">
                            <div className="text-center">
                                <div className="mx-auto mb-3 d-flex align-items-center justify-content-center rounded-circle bg-warning bg-opacity-25" style={{ width: 64, height: 64 }}>
                                    <span style={{ fontSize: 32 }} role="img" aria-label="Free Shipping">📦</span>
                                </div>
                                <h3 className="h5 fw-semibold mb-2 text-dark">Free Shipping</h3>
                                <p className="text-muted">Free delivery on orders above $50</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="text-center">
                                <div className="mx-auto mb-3 d-flex align-items-center justify-content-center rounded-circle bg-warning bg-opacity-25" style={{ width: 64, height: 64 }}>
                                    <span style={{ fontSize: 32 }} role="img" aria-label="Quality Guarantee">✅</span>
                                </div>
                                <h3 className="h5 fw-semibold mb-2 text-dark">Quality Guarantee</h3>
                                <p className="text-muted">30-day money back guarantee</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="text-center">
                                <div className="mx-auto mb-3 d-flex align-items-center justify-content-center rounded-circle bg-warning bg-opacity-25" style={{ width: 64, height: 64 }}>
                                    <span style={{ fontSize: 32 }} role="img" aria-label="24/7 Support">💬</span>
                                </div>
                                <h3 className="h5 fw-semibold mb-2 text-dark">24/7 Support</h3>
                                <p className="text-muted">Round the clock customer support</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                .product-card-hover:hover {
                    transform: translateY(-6px) scale(1.03);
                    box-shadow: 0 8px 32px rgba(0,0,0,0.12) !important;
                    z-index: 2;
                }
                @keyframes heroTitleIn {
                    0% { opacity: 0; transform: translateY(-30px); }
                    100% { opacity: 1; transform: translateY(0); }
                }
                @keyframes heroSubtitleIn {
                    0% { opacity: 0; transform: translateY(30px); }
                    100% { opacity: 1; transform: translateY(0); }
                }
                @keyframes heroBtnIn {
                    0% { opacity: 0; transform: scale(0.9); }
                    100% { opacity: 1; transform: scale(1); }
                }
                .animate-hero-title {
                    animation: heroTitleIn 1s cubic-bezier(0.4,0,0.2,1) 0.3s both;
                }
                .animate-hero-subtitle {
                    animation: heroSubtitleIn 1s cubic-bezier(0.4,0,0.2,1) 0.7s both;
                }
                .animate-hero-btn {
                    animation: heroBtnIn 0.8s cubic-bezier(0.4,0,0.2,1) 1.1s both;
                    transition: transform 0.2s, box-shadow 0.2s;
                }
                .animate-hero-btn:hover {
                    transform: scale(1.08);
                    box-shadow: 0 4px 24px rgba(255,152,0,0.18);
                }
                /* Pulse/Glow for Shop Now button */
                .hero-btn-pulse {
                    animation: heroBtnIn 0.8s cubic-bezier(0.4,0,0.2,1) 1.1s both, heroBtnPulse 1.5s infinite 2s;
                    box-shadow: 0 0 0 0 rgba(255, 193, 7, 0.5);
                }
                @keyframes heroBtnPulse {
                    0% { box-shadow: 0 0 0 0 rgba(255, 193, 7, 0.5); }
                    70% { box-shadow: 0 0 0 16px rgba(255, 193, 7, 0); }
                    100% { box-shadow: 0 0 0 0 rgba(255, 193, 7, 0); }
                }
                /* Floating icon animation */
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
                /* More colorful animated gradient background */
                .hero-animated-bg {
                    background-size: 400% 400%;
                    animation: heroGradientMove 10s ease-in-out infinite alternate;
                }
                @keyframes heroGradientMove {
                    0% { background-position: 0% 50%; }
                    100% { background-position: 100% 50%; }
                }
            `}</style>
        </div>
    );
};

export default Home;
