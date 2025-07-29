import { useDispatch, useSelector } from "react-redux";
import ItemListComponent from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    console.log('cartItems', cartItems);
    const dispatch = useDispatch();

    return (
        <div className="text-center m-4 p-4">
            <h1 className="text-2xl font-bold">Cart</h1>
            <div className="w-6/12 m-auto">
                <button className="p-2 bg-black text-xs text-white rounded-md" onClick={() => dispatch(clearCart())}>Clear Cart</button>
                {cartItems.length === 0 && <h1>Cart is empty. Add items to the cart to see them here.</h1>}
                <ItemListComponent items={cartItems} />
            </div>
        </div>
    )
}

export default Cart;