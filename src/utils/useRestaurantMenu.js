import { useEffect, useState } from "react";
import { RESTAURANT_MENU_API } from "../utils/constants";

const useRestaurantMenu = (resId) => {

        const [resInfo,setResInfo] = useState(null);

        useEffect(() => {
            const fetchMenu = async() => {
                const response = await fetch(RESTAURANT_MENU_API + resId);
                const data = await response.json();
                console.log(data);
                const restaurant = data?.data;
                setResInfo(restaurant);
            }
            fetchMenu();
        },[]);

        return resInfo;
}

export default useRestaurantMenu;