import Header from "../Header";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import "@testing-library/jest-dom";

it("Should render header component with a login button",()=>{
    render(
        <BrowserRouter>
    <Provider store={appStore}>
    <Header/>;
    </Provider>
    </BrowserRouter>
);
    //const loginButton = screen.getByRole("button");
    //const loginButton = screen.getByRole("button",{name:"Login"});
    //const cartItems = screen.getByText(/Cart/);
    const cartItems = screen.getByText("Cart - (0items)");

    expect (cartItems).toBeInTheDocument();

    

});

it("Should change login button to logout on click ",()=>{
    render(
        <BrowserRouter>
    <Provider store={appStore}>
    <Header/>;
    </Provider>
    </BrowserRouter>
);
    
    const loginButton = screen.getByRole("button",{name:"Login"});
    fireEvent.click(loginButton);
    const logoutButton = screen.getByRole("button",{name:"Logout"});

    
    expect (logoutButton).toBeInTheDocument();
});