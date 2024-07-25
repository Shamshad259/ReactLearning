import { CDN_URL } from "../utils/constants";


const ResCard = (props) => {
    const { resData } = props;
    const {cloudinaryImageId,name,cuisines,sla,costForTwo,avgRating} = resData?.info;
    return (
      <div className="res-card w-56 h-80 my-2 mx-4 p-2 bg-gray-100 hover:bg-gray-300 rounded-md">
        <img
          className="ruchi w-full h-28 rounded-md"
          src={ CDN_URL
             +
            cloudinaryImageId
          }
          alt="Ruchi"
        ></img>
        <h3 className="font-bold p-2">{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{sla.slaString}</h4>
        <h4 className="font-semibold">{costForTwo}</h4>
        <h4>{avgRating} stars</h4>
      </div>
    );
  };

  
  export default ResCard;