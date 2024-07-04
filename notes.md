/*const heading = React.createElement("h1",{id: "heading"}, "Namaste React");

console.log(heading);*/

//React Element- js obj- html element
const jsxHeading = (
<h1 className="head">Namaste React</h1>
);
//console.log(jsxHeading);

//React functional Component

const Title = () => {
 return <h1>Namaste React Functional Component 1</h1>;
};

const HeadingComponent2 = () => (
    <div id="container">
        {jsxHeading}
        <Title/> 
        <Title/>
        <Title></Title> 
        {Title()}
        <h1 className="heading">Namaste React Functional Component 2</h1>

    </div>
);

/**
 * Header
 *  -Logo
 *  -Nav Items
 * Body
 *  -Search
 *  -Restaurent Container
 *      --RestaurentCard
 *          -Img
 *          - Name of Res,Star Rating, Cuisine, etc.
 * Footer
 *  -Copyright
 *  -Links
 *  -Address
 *  -Contact
 * 
 */

 Two typws of Export Import

 *Default Export/Import:

 export default Component; 
 import Component from "path";

 *Named Export/Import

 export const Component;
 import {Component} from "path";

 React Hooks
 Normal JS utility functions
 -useState()(maintains state of our component)
 **whenever the state variable updates react rerenders the component
 -useEffect()

 /**
 # 2 types of Routing
 Client side Routing
 Server Side Routing

 **/

 # Redux Toolkit
    -Install @reduxjs/toolkit and react-redux
    -Build our store
    -Connect our store to our app
    -Slice(cart slice)
    -dispatch(action)
    -Selector

# Testing(Developers)
    -Unit Testing
    -Integration Testing
    -End to End Testing - e2e Testing

# Setting up Testing in our app
    -Install React testing library
    -Install Jest
    -Installed Babel dependencies
    -Configure Babel 
    -Configure Parcel Config file to disable default babel transpilation
    -Jest configuration: npx jest --init
    -Install jsdom library
    -Install @babel/preset-react- to make jsx work in test cases
    -Include @babel/react in babel.config
    -Install @testing-library/jest-dom