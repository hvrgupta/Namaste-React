import RestaurantCardComponent from "./RestaurantCard";
import { useEffect, useState } from "react";
import ShimmerComponent from "./Shimmer";
import { SWIGGY_API } from "../utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";


// State variable in React
// Hooks in React -> utility function in React, they are like Normal JS functions
// useState() -> Maintains state of the component
// useEffect() 

const BodyComponent = () =>  {

    // Local state variable
    
    const [listOfRestaurants,setListOfRestaurants] = useState([]);
    const [searchTxt,setSearchTxt] = useState("");
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    // Called after the component renders (component mounts or state changes)
    useEffect(() => {
        console.log("useeffec");
        const fetchData =  async() => {
            console.log("inside fetch data");
            const response = await fetch(SWIGGY_API);
        
            const restaurantData = await response.json();
            console.log(restaurantData);
    
            const restaurants = restaurantData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
            
            setListOfRestaurants(restaurants);
            setFilteredRestaurants(restaurants);
        }
        fetchData();
    },[]);

    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false) {
        return(
            <div>
                <h1>It seems you are Offline!</h1>
                <h4>Please check your internet connection</h4>
            </div>
        );
    } 

    // let listOfRestaurants = resList;

    // Conditional Rendereing
    if(listOfRestaurants.length === 0) {
        return (
           <ShimmerComponent />
        );
    }
    
    return listOfRestaurants.length === 0 ? 
    ( 
    <ShimmerComponent /> 
    ): ( 
        <div>
            <div className='flex align-middle m-2'>
                <div className="">
                    <input type="text" className="border border-solid border-black rounded-lg" value={searchTxt} onChange={(e) => {
                        setSearchTxt(e.target.value);
                    }}></input>
                    <button className="px-4 py-1 bg-green-100 m-4 rounded-lg" onClick={() => {
                        const filteredList = listOfRestaurants.filter((res) => {
                            return res.info.name.toLowerCase().includes(searchTxt.toLowerCase());
                        });
                        setFilteredRestaurants(filteredList);
                        setSearchTxt("");
                    }}>Search</button>
                </div>
                <div>
                <button className="px-4 py-1 bg-gray-200 m-4 rounded-lg" 
                onClick={() => {
                    const filteredList =  listOfRestaurants.filter((res) => {
                        return res.info.avgRating > 4;
                    })
                    setFilteredRestaurants(filteredList);
                    }}
                >
                Top Rated Restaurants
                </button>
                </div>
            </div>
            <div className='flex flex-wrap m-4 p-4 rounded-lg'>
                {/* <RestaurantCardComponent resName="GK" cuisines="North,Punjabi,veg" rating="4 stars" eta="25 minutes" /> */}
                {  
                    filteredRestaurants.map(res =>
                    <Link key={res.info.id} to={"/restaurants/"+res.info.id}>
                        <RestaurantCardComponent resData={res} 
                    /></Link>)
                }
            </div>
        </div>
    );
}  

// default export -> used to export single thing
export default BodyComponent;