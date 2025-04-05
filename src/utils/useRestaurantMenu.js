import { useEffect, useState } from "react";
import { RESTAURANT_MENU_API } from "../utils/constants";

const useRestaurantMenu = (resId) => {

        const [resInfo,setResInfo] = useState(null);

        useEffect(() => {
            const fetchMenu = async() => {
                const response = await fetch(RESTAURANT_MENU_API + resId);
                const data = await response.json();
                const restaurant = data?.data?.cards[2]?.card?.card?.info;
                setResInfo(restaurant);
            }
            fetchMenu();
        },[]);

        return resInfo;
}

export default useRestaurantMenu;