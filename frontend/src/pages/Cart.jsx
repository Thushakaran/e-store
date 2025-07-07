import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartItem from '../components/CartItem';
import { removeFromCartBackend, clearCartBackend } from '../redux/cartSlice';
import { Link, useNavigate } from 'react-router-dom';

const Cart = () => {
    const { items } = useSelector(state => state.cart);
    const user = useSelector(state => state.user.userInfo);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Redirect to login if user is not authenticated
    useEffect(() => {
        if (!user) {
            navigate(`/login?redirect=${encodeURIComponent('/cart')}`);
        }
    }, [user, navigate]);

    // Don't render anything if user is not authenticated (will redirect)
    if (!user) {
        return null;
    }

    const calculateSubtotal = () => items.reduce((acc, item) => acc + (item.product && item.product.price ? item.product.price * item.quantity : 0), 0);
    const calculateTotal = () => calculateSubtotal();

    if (items.length === 0) {
        return (
            <div className="d-flex align-items-center justify-content-center min-vh-100 bg-light">
                <div className="text-center">
                    <div className="display-1 text-muted mb-3">🛒</div>
                    <h2 className="h3 fw-bold text-dark mb-3">Your cart is empty</h2>
                    <p className="text-muted mb-4">Looks like you haven't added any items to your cart yet.</p>
                    <Link to="/" className="btn btn-warning px-4 py-2 fw-semibold">Shop Now</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-gradient-to-br from-white via-[#f8f9fa] to-[#f3f6fd] min-vh-100 py-5" style={{ minHeight: '100vh', background: 'linear-gradient(120deg, #f8fafc 0%, #f3f6fd 100%)' }}>
            <div className="container">
                <div className="row mb-4 justify-content-center">
                    <div className="col-12 col-lg-8 mb-4 mb-lg-0">
                        <div className="card p-4 border-0 shadow-lg rounded-4 bg-white" style={{ backdropFilter: 'blur(6px)', border: '1px solid #f3f3f3' }}>
                            <h1 className="h3 fw-bold text-dark mb-4">Shopping Cart</h1>
                            <p className="text-muted mb-4">You have {items.length} item{items.length !== 1 ? 's' : ''} in your cart</p>
                            <div className="vstack gap-3">
                                {items.filter(item => item.product && item.product._id).map(item => (
                                    <CartItem key={item.product._id} item={item} onRemove={() => dispatch(removeFromCartBackend(item.product._id))} />
                                ))}
                            </div>
                            <button className="btn btn-link text-danger mt-4 fw-semibold" style={{ fontSize: 18 }} onClick={() => dispatch(clearCartBackend())}>Clear Cart</button>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4">
                        <div className="card p-4 border-0 shadow-lg rounded-4 bg-white sticky-top" style={{ top: 100, backdropFilter: 'blur(6px)', border: '1px solid #f3f3f3' }}>
                            <h2 className="h5 fw-semibold mb-4">Order Summary</h2>
                            <div className="d-flex justify-content-between mb-2">
                                <span className="text-muted">Subtotal</span>
                                <span className="fw-bold">${calculateSubtotal().toFixed(2)}</span>
                            </div>
                            <div className="d-flex justify-content-between mb-2">
                                <span className="text-muted">Shipping</span>
                                <span className="text-success">Free</span>
                            </div>
                            <hr />
                            <div className="d-flex justify-content-between mb-4">
                                <span className="fw-bold">Total</span>
                                <span className="fw-bold fs-5">${calculateTotal().toFixed(2)}</span>
                            </div>
                            <button className="btn btn-warning w-100 fw-semibold mb-2 rounded-pill py-2 fs-5 shadow-sm">Checkout</button>
                            <Link to="/" className="btn btn-outline-secondary w-100 rounded-pill py-2 fs-5 shadow-sm">Continue Shopping</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
