// src/hooks/useCartItems.js
import { useSelector } from 'react-redux';

const useCartItems = () => {
    const cartItems = useSelector((store) => store.cart.items);
    return cartItems;
};

export default useCartItems;
