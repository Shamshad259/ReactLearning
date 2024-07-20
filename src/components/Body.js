import restaurants from "../utils/mockdata";
import ResCard from "./ResCard";
import { useState } from "react";


const Body = () => {
    const [res, setRes] = useState(restaurants);
    return (
      <div className="body">
        {/* <div className="search-container">Search</div> */}
        <div className="filter-res">
            <button className="filter-btn"  onClick={
            () => {
                const filteredRes = res.filter((restaurant)=>
                restaurant.info.avgRating>4.5);
                setRes(filteredRes);
            }
        }>
            Top Rated Restaurants
            </button>
            </div>

        <div className="res-container">
          {res.map(restaurant=>{
            return <ResCard key={restaurant.info.id} resData={restaurant} />
          })}
        </div>
      </div>
    );
  };

  export default Body;