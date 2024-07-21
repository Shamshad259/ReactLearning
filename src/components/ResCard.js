import { CDN_URL } from "../utils/constants";


const ResCard = (props) => {
    const { resData } = props;
    const {cloudinaryImageId,name,cuisines,sla,costForTwo,avgRating} = resData?.info;
    console.log(resData);
    return (
      <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
        <img
          className="ruchi"
          src={ CDN_URL
             +
            cloudinaryImageId
          }
          alt="Ruchi"
        ></img>
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{sla.slaString}</h4>
        <h4>{costForTwo}</h4>
        <h4>{avgRating} stars</h4>
      </div>
    );
  };

  
  export default ResCard;