import { useState } from "react";
import ItemListComponent from "./ItemList";

const RestaurantCategoryComponent = (props) => {
    const { category } = props;
    const [show,setShow] = useState(false);
    
    const handleClick = () => {
        setShow(!show);
    }

    return (
        <div>
            <div className="w-8/12 bg-gray-50 shadow-xl p-4 mx-auto my-4">
                <div className="flex justify-between" onClick={handleClick}>
                    <span className="font-bold text-m">{category.title} ({category.itemCards.length})</span>
                    <span>⬇️</span>
                </div>
                {
                    show && <ItemListComponent items={category.itemCards}/>
                }
            </div>
        </div>
    )
}

export default RestaurantCategoryComponent;