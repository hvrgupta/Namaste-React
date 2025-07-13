import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import ShimmerComponent from "./Shimmer";
import RestaurantCategoryComponent from "./RestaurantCategory";

export const RestaurantMenu = () => {
    
    const { resId } = useParams();

    const resInfo = useRestaurantMenu(resId);

    if(resInfo === null) return <ShimmerComponent />

    const {name, cuisines, cloudinaryImageId, costForTwoMessage, avgRating} = resInfo?.cards[2]?.card?.card?.info;
    const { itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
   
    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((cat) => {
        return cat?.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
    });

    // console.log(categories)

    return (
        <div className="text-center">
            <h1 className="font-bold my-6 text-3xl">{name}</h1>
            <p className="font-bold text-m">{cuisines.join(', ')} - {costForTwoMessage}</p>
            {/* Accordion */}
            {
                categories.map((category) => {
                    return (
                        <RestaurantCategoryComponent key={category?.card?.card?.categoryId} category={category?.card?.card}/>
                    )
                })
            }
        </div>
    );
}