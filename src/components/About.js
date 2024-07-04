//import User from "./User";
import UserContext from "../utils/UserContext";
import UserClass from "./UserClass";
const About=()=>{
    return(
        <div>
            <h1>About</h1>
            <div>
                LoggedIn User
                <UserContext.Consumer>
                    {({loggedInUser})=>(<h1 className="text-xl font-bold">{loggedInUser}</h1>)}
                </UserContext.Consumer>
            </div>
            <h2>This is namaste react web series</h2>

        <UserClass name={"Swapnamoy(class)"} location={"Kolkata Class"}/>
        </div>
    );

}; 
export default About;