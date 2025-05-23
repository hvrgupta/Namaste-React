import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import ShimmerComponent from "./Shimmer";

export const RestaurantMenu = () => {
    
    const { resId } = useParams();

    const resInfo = useRestaurantMenu(resId);

    if(resInfo === null) return <ShimmerComponent />

    const {name, cuisines, cloudinaryImageId, costForTwoMessage, avgRating} = resInfo;

    return (
        <div className="menu">
            <h1 className="text-3xl font-bold underline">
     {name}
    </h1>

            <h3>{cuisines.join(', ')}</h3>
            <h3>{costForTwoMessage}</h3>
            <h4>{avgRating}</h4>
        </div>
    );
}