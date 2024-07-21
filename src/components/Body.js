import restaurants from "../utils/mockdata";
import ResCard from "./ResCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [res, setRes] = useState(restaurants);
  const [filteredRest,setFilteredRest] = useState(res);
  const [searchText,setSearchText] = useState("")


  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/mapi/homepage/getCards?lat=10.0037578&lng=76.3579401"
    );
    const json = await data.json();
    setRes(
      json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  if (res.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="body">
      <div className="filter-res">
        <div className="search-container">
        <input type="test" className="search-input" value={searchText} placeholder="Search..." onChange={(e)=>{
          setSearchText(e.target.value);
        }}></input>
        <button onClick={()=>{
          const filteredRes = res.filter((restaurant)=>
          restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
          )
          setFilteredRest(filteredRes);
        }}>Search</button>

        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredRes = res.filter(
              (restaurant) => restaurant.info.avgRating > 4.5
            );
            setRes(filteredRes);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="res-container">
        {filteredRest.map((restaurant) => {
          return <ResCard key={restaurant.info.id} resData={restaurant} />;
        })}
      </div>
    </div>
  );
};

export default Body;
