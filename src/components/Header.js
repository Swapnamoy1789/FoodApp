import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header = () => {
    const [btnName,setBtnName]= useState("Login");
    const onlineStatus=useOnlineStatus();
    const {loggedInUser}=useContext(UserContext);
    //(Subsribing to the store using a Selector)
     const cartItems=useSelector((store)=>store.cart.items);
     console.log(cartItems);
    
    return (
        <div className="flex justify-between bg-pink-200 shadow-lg sm:bg-yellow-50 lg:bg-green-50 ">
            <div className="logo-container">
                <img className="w-20" src= {LOGO_URL}/>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">Online Status:{onlineStatus?" Online":" Offline"}</li>
                    <li className="px-4" ><Link to ="/" >Home</Link></li>
                    <li className="px-4"><Link to="/about">About Us</Link></li>
                    <li className="px-4"><Link to ="/contact">Contact Us</Link></li>
                    <li className="px-4 font-bold text-lg"><Link to ="/cart">Cart - ({cartItems.length}items)</Link></li>
                    <li className="px-4"><Link to ="/grocery">Grocery</Link></li>
                    <button className="login" onClick={()=>{
                        btnName==="Login"? setBtnName("Logout"): setBtnName("Login");
                    }}
                    >
                    {btnName}
                    </button>
                    <li className="px-4 font-bold">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;