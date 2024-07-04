import React,{lazy,Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext.js";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";
import Cart from "./components/Cart.js";
 


const Grocery = lazy(()=> import("./components/Grocery"));
const About = lazy(()=> import("./components/About"));


const AppLayout = () => {
    const [userName,SetUserName]=useState();
    //authentication
    useEffect(()=>{
        //Make an api call and send username and password
        const data={
            name:"Swapnamoy Roy Choudhury",
        };
        SetUserName(data.name);
    },[]);
return (
    <Provider store={appStore}>
    <UserContext.Provider value={{loggedInUser: userName,SetUserName}}>
        <div className="app">
           <Header/>
           <Outlet/>
    </div>
    </UserContext.Provider>
    </Provider>
);
};
const appRouter= createBrowserRouter([
    {
        path: "/",
        element:<AppLayout/>,
        children:[
            {
                path:"/",
                element:<Body/>,
            },
            {
                path: "/about",
                element:<Suspense fallback={<h1>Loading...</h1>}><About/></Suspense>,
            }, 
            {
                path:"/contact",
                element:<Contact/>,
            },
            {
                path:"/cart",
                element:<Cart/>,
            },
            {
                path:"/restaurants/:resId",
                element:<RestaurantMenu/>,
            },
            {
                path:"/grocery",
                element:<Suspense fallback={<h1>Loading...</h1>}><Grocery/></Suspense>,
            },
        ],
        errorElement:<Error/>,
    },
    
     
]);  

const root= ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);
