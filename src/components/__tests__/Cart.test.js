import React from 'react';
import RestaurantMenu from "../RestaurantMenu";
import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "@testing-library/react";
import MOCK_DATA_NAME from "../mocks/mockResMenu.json";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore"; // Ensure correct path
import Header from "../Header";
import Cart from "../Cart";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA_NAME),
  })
);

it("Should load restaurant menu component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart/>
        </Provider>
      </BrowserRouter>
    )
  );

  const accordianHeader = screen.getByText("Recommended (20)");
  //console.log(accordianHeader);
  fireEvent.click(accordianHeader);
  expect(screen.getAllByTestId("foodItems").length).toBe(20);
  expect(screen.getByText("Cart - (0items)")).toBeInTheDocument();

  const addBtns = screen.getAllByRole("button", { name: "Add+" });

  fireEvent.click(addBtns[0]);
  expect(screen.getByText("Cart - (1items)")).toBeInTheDocument();

 fireEvent.click(addBtns[1]);
  expect(screen.getByText("Cart - (2items)")).toBeInTheDocument();

  expect(screen.getAllByTestId("foodItems").length).toBe(22);

  fireEvent.click(screen.getByRole("button", {name: "Clear Cart"}));
  expect(screen.getAllByTestId("foodItems").length).toBe(20);
  expect(screen.getByText("Cart is Empty!! Please Add some items first!")).toBeInTheDocument();


});
