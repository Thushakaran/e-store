import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCart } from '../redux/cartSlice';

const CartSyncer = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user.userInfo);

    useEffect(() => {
        if (user) {
            dispatch(fetchCart());
        }
    }, [dispatch, user]);

    return null;
};

export default CartSyncer; 