import { render,screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact us page Test Cases",()=>{
    test("Should load contact us component",()=>{
        render(<Contact/>);
        const heading=screen.getByRole("heading");
        expect(heading).toBeInTheDocument();
    });
    
    test("Should load button inside contact us component",()=>{
        render(<Contact/>);
        const button=screen.getByRole("button");
        expect(button).toBeInTheDocument();
    });
    
    test("Should load submit inside contact us component",()=>{
        render(<Contact/>);
        const submit=screen.getByText("Submit");
        expect(submit).toBeInTheDocument();
    });
    
    test("Should load input name inside contact us component",()=>{
        render(<Contact/>);
        const inputName=screen.getByPlaceholderText("name");
        expect(inputName).toBeInTheDocument();
    });
    
    test("Should load 2 input boxes inside contact us component",()=>{
        render(<Contact/>);
        const inputboxes=screen.getAllByRole("textbox");
        expect(inputboxes.length).toBe(2);
    });
});

