import ResCard from "./ResCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { API_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import restaurants from "../utils/mockdata";
import useOnlineStatus from "../utils/useOnlineStatus";

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
    const restaurantData =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || restaurants;
    setRes(restaurantData);
    setFilteredRest(restaurantData);
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return (
      <h1>
        Oops...Seems like you are offline...Check your internet connection
      </h1>
    );
  }

  if (res?.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter-res flex justify-between px-10 mb-8">
        <div className="search-container">
          <input
            type="text"
            className="search-input mr-4 px-2 rounded-lg border-2 border-solid border-black"
            value={searchText}
            placeholder="Search..."
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button className="bg-green-400 px-4 rounded-lg py-1"
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
          className="filter-btn shadow-black shadow-md px-4 py-1 rounded-lg font-bold"
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

      <div className="res-container flex flex-wrap justify-center">
        {filteredRest.map((restaurant) => {
          return (
            <Link
              to={"/restaurant/" + restaurant.info.id}
              key={restaurant.info.id}
            >
              <ResCard resData={restaurant} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
