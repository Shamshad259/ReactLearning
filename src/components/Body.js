import ResCard from "./ResCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { API_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Body = () => {
  const [res, setRes] = useState([]);
  const [filteredRest, setFilteredRest] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(API_URL);
    const json = await data.json();
    const restaurantData =  json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setRes(restaurantData);
    setFilteredRest(restaurantData);
  };

  if (res?.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="body">
      <div className="filter-res">
        <div className="search-container">
          <input
            type="test"
            className="search-input"
            value={searchText}
            placeholder="Search..."
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            onClick={() => {
              const filteredRes = res.filter((restaurant) =>
                restaurant.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
              );
              setFilteredRest(filteredRes);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredRes = res.filter(
              (restaurant) => restaurant.info.avgRating > 4.5
            );
            setFilteredRest(filteredRes);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="res-container">
        {filteredRest.map((restaurant) => {
          return <Link to={"/restaurant/"+restaurant.info.id} key={restaurant.info.id}><ResCard resData={restaurant} /></Link>;
        })}
      </div>
    </div>
  );
};

export default Body;
