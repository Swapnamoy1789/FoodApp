import { fireEvent, render,screen } from "@testing-library/react";
import Body from "../Body";
import { act } from "@testing-library/react"; 
import MOCK_DATA from "../mocks/mockResList.json"; 
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch=jest.fn(()=>{
    return Promise.resolve({
        json: ()=>{
            return Promise.resolve(MOCK_DATA);
        },
    });
});

it("Should search res list for pizza text input",async()=>{
    await act(async ()=>
        render(
        <BrowserRouter>
        <Body />
        </BrowserRouter>
        )
    );
    const cardsBeforeSearch = screen.getAllByTestId("resCard");

    expect(cardsBeforeSearch.length).toBe(8);

    const searchbtn= screen.getByRole("button", {name:"Search"});
    const searchInput=screen.getByTestId("searchInput");
    // Debugging statements
    //console.log('Search Input:', searchInput);
    //console.log('Search Button:', searchbtn);

    // Ensure elements are found
    //expect(searchbtn).toBeInTheDocument();
    //expect(searchInput).toBeInTheDocument();
    /*fireEvent.change(searchInput, { target: { value: "Pizza" } });
    fireEvent.click(searchbtn);
    const cards = screen.getByTestId("resCard");
    expect(cards.length).toBe(1);*/
    fireEvent.change(searchInput, { target: { value: "Pizza" } });
    fireEvent.click(searchbtn);

    // Wait for the fetch and state update
    //await act(async () => {});

    // Check for the rendered cards
    const cardsAfterSearch = screen.getAllByTestId("resCard");
    
    // Debugging statement
    //console.log('Cards:', cards);

    // Ensure cards array is not undefined and check its length
    //expect(cards).not.toBe(undefined);
    expect(cardsAfterSearch.length).toBe(1);
});

it("Should search top rated restaurants",async()=>{
    await act(async ()=>
        render(
        <BrowserRouter>
        <Body />
        </BrowserRouter>
        )
    );
    const cardsBeforeFilter = screen.getAllByTestId("resCard");

    expect(cardsBeforeFilter.length).toBe(8);

    const topRatedbtn= screen.getByRole("button",{
        name:"Top Rated Restaurant",
    });
    fireEvent.click(topRatedbtn);
    const cardsAfterFilter=screen.getAllByTestId("resCard");
    expect(cardsAfterFilter.length).toBe(6);
});