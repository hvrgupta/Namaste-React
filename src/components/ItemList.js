import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";

const ItemListComponent = ({items}) => {
    console.log(items);

    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        // dispatch the action to add the item to the cart
        dispatch(addItem(item));
    }

    const handleRemoveItem = (item) => {
        // dispatch the action to remove the item from the cart
        dispatch(removeItem(item));
    }

    return (
        <div>
            {
            items.map((item) => {
                return (
                    <div key={item.card.info.id} className="p-2 m-2 border-b-2 border-gray-300 text-left flex justify-between">
                        <div>
                            <div className="font-bold py-2">
                                <span>{item.card.info.name}</span>
                                <span> - ₹ {item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100}</span>
                            </div>
                            <p className="text-xs">{item.card.info.description}</p>
                        </div>
                        <div className="flex items-center">  
                            <div>
                                <button className="p-2 bg-black text-xs text-white rounded-md" onClick={() => handleAddItem(item)}>Add +</button>
                            </div>
                            <img src={CDN_URL+item.card.info.imageId} className="w-24 h-auto rounded-md"></img>
                        </div>
                    </div>)})
            } 
        </div>
    )
}

export default ItemListComponent;