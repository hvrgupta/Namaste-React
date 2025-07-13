import { CDN_URL, inlineStyle } from "../utils/constants";

// const RestaurantCardComponent= (props) => { -> instead of using props I will be destructuring the object
const RestaurantCardComponent = (props) => {
    // console.log(props);
    const { resData } = props;
    const {
        name,
        cuisines,
        avgRating,
        costForTwo,
        cloudinaryImageId,
        sla
    } = resData?.info;

  
    return  (
        // One way to declare style inline
            // <div className='res-card' style={{backgroundColor : 'black'}} >
            <div className='p-4 m-2 w-50 bg-gray-100 hover:bg-gray-50 shadow-md' style={inlineStyle} >
                <img  
                src={CDN_URL + cloudinaryImageId} className='w-50 rounded-2xl'></img>
                <h3 className="font-bold py-1">{name}</h3>
                <h4>{cuisines.join(', ')}</h4>
                <h4>{avgRating}</h4>
                <h4>{costForTwo}</h4>
                <h4>{sla.deliveryTime} minutes</h4>
            </div>
    );
    
}

// Higher order component (Enhance the input component)
// input -> RestaurantCard -> RestaurantCardPromoted

export const withPromotedLabel = (RestaurantCardComponent) => {
    return (props) => {
        const { resData } = props;
        return  (
            <div>
                <label>Promoted</label>
                <RestaurantCardComponent resData={resData}/>
            </div>

    );
    }
}

export default RestaurantCardComponent;