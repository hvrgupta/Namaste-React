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

            <div className='res-card' style={inlineStyle} >
                <img 
                src={CDN_URL + cloudinaryImageId} className='res-logo'></img>
                <h3>{name}</h3>
                <h4>{cuisines.join(', ')}</h4>
                <h4>{avgRating}</h4>
                <h4>{costForTwo}</h4>
                <h4>{sla.deliveryTime} minutes</h4>
            </div>
    );
    
}

export default RestaurantCardComponent;