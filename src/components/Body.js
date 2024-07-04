import RestaurantCard from "./RestaurantCard";
import { useEffect, useState,useContext } from "react";
//import resList from "../utils/mockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import UserContext from "../utils/UserContext.js";

const Body = () => {
    const [ListofRestaurant,setListofRestaurant] = useState([]);
    const[searchtext,setSearchText]= useState("");
    const[filteredRestaurant,setFilteredRestaurant]= useState( []);
    //console.log( ListofRestaurant);
    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async ()=>{
        
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.51800&lng=88.38320&is-seo-");
        const json = await data.json();
        //console.log("full json response:", json);
        //console.log("Cards data:", json.data.cards);
       /* const restaurantcard= json.data.cards;
        const restaurant=[];
        restaurantcard.forEach(card => {
            if(card.card.card.gridElements?.infoWithStyle?.restaurants)
            {
                restaurant.push(...card.card.card.gridElements.infoWithStyle.restaurants);
            }
        
    });*/
        //console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setListofRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
       // }catch(error){
       //     console.error("error fetching data:", error);
       // } 
        
    };
    const onlineStatus=useOnlineStatus();
    if(onlineStatus===false)
        return(
            <h1>
                Look's like you're offline!! Please check your internet connection;

            </h1>
        );
    const {loggedInUser,SetUserName}=useContext(UserContext);
    
    return(
        <div className="body">
            <div className="filter flex">
                <div className="search m-4 p-4">
                    <input type="text"  data-testid ="searchInput" className="border border-solid border-black" value={searchtext}
                    onChange={(e)=>{
                        setSearchText(e.target.value);
                    }}
                    />
                    <button className="px-4 py-2 bg-green-100 m-4 rounded-lg"
                     onClick={()=>{console.log(searchtext);
                        const filteredRestaurant=ListofRestaurant.filter(
                            (res) => res.info.name.toLowerCase().includes(searchtext.toLowerCase())
                        );
                        setFilteredRestaurant(filteredRestaurant);
                    }}>Search</button>
                </div>
                <div className="search m-4 p-4 flex items-center" >
                <button className="px-4 py-2 bg bg-gray-100 rounded-lg" 
                onClick={() => {
                    const filterList = filteredRestaurant.filter((res)=> res.info.avgRating > 4.2 );
                    setFilteredRestaurant(filterList);             
                }}
                >
                    Top Rated Restaurant
                </button>
                </div>
                <div className="search m-4 p-4 flex items-center" >
                    <label>UserName: </label>
                    <input className="border border-black p-2"
                    value={loggedInUser}
                     onChange={(e)=>SetUserName(e.target.value)}/>
                </div>
                
            </div>
            <div className="flex flex-wrap">
            {  Array.isArray(ListofRestaurant)&& ListofRestaurant.length > 0 ? (
                filteredRestaurant.map((restaurant) => (
                    //console.log(ListofRestaurant),
               <Link 
               key={restaurant.info.id} 
               to={"/restaurants/"+restaurant.info.id}> 
               <RestaurantCard  resData={restaurant} /> 
               </Link>
               ))
            ) : (
                 <Shimmer/>
            )  
            }
             </div>
        </div>
    );
}; 
export default Body;