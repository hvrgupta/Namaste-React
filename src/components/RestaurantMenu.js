import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ShimmerComponent from "./Shimmer";
import { RESTAURANT_MENU_API } from "../utils/constants";

export const RestaurantMenu = () => {
    
    const [resInfo,setResInfo] = useState(null);

    const { resId } = useParams();

    useEffect(() => {
        const fetchMenu = async() => {
            const response = await fetch(RESTAURANT_MENU_API + resId);
            const data = await response.json();
            const restaurant = data?.data?.cards[2]?.card?.card?.info;
            setResInfo(restaurant);
            console.log(data);
        }
        fetchMenu();
    },[]);

    if(resInfo === null) return <ShimmerComponent />

    const {name, cuisines, cloudinaryImageId, costForTwoMessage, avgRating} = resInfo;

    return (
        <div className="menu">
            <h1>{name}</h1>
            <h3>{cuisines.join(', ')}</h3>
            <h3>{costForTwoMessage}</h3>
            <h4>{avgRating}</h4>
        </div>
    );
}