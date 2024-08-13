import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import App from "../App";

// Portfolio Elements
test("displays a top-level heading with the text `Hi, I'm _______`", () => {
  render(<App />);
  
  // Using getAllByRole to check for multiple headings
  const headings = screen.getAllByRole("heading", {
    name: /hi, i'm/i,
    level: 1,
  });

  expect(headings).toHaveLength(1);
  expect(headings[0]).toBeInTheDocument();
});

// test("displays an image of yourself", () => {
//   render(<App />);

//   const image = screen.getByAltText("My profile pic");

//   expect(image).toHaveAttribute("src", "https://via.placeholder.com/350");
// });

// test("displays second-level heading with the text `About Me`", () => {
//   render(<App />);

//   const secondLevelHeading = screen.getByRole("heading", {
//     name: /about me/i,
//     level: 2,
//   });

//   expect(secondLevelHeading).toBeInTheDocument();
// });

// test("displays a paragraph for your biography", () => {
//   render(<App />);

//   const bio = screen.getByText(/lorem ipsum/i);

//   expect(bio).toBeInTheDocument();
// });

// test("displays the correct links", () => {
//   render(<App />);

//   const githubLink = screen.getByRole("link", {
//     name: /github/i,
//   });
//   const linkedinLink = screen.getByRole("link", {
//     name: /linkedin/i,
//   });

//   expect(githubLink).toHaveAttribute(
//     "href",
//     expect.stringContaining("https://github.com")
//   );

//   expect(linkedinLink).toHaveAttribute(
//     "href",
//     expect.stringContaining("https://linkedin.com")
//   );
// });

// // Newsletter Form - Initial State
// test("the form includes text inputs for name and email address", () => {
//   // your test code here
  
// });

// test("the form includes three checkboxes to select areas of interest", () => {
//   // your test code here
//   render(<App />);
  
//   const checkboxes = screen.getAllByRole("checkbox");
  
//   expect(checkboxes).toHaveLength(3);
// });

  

// test("pizza checkbox is initially unchecked", () => {})
// render(<App />);
  
//   const pizzaCheckbox = screen.getByRole("checkbox", { name: /add pepperoni/i });
  
//   expect(pizzaCheckbox).not.toBeChecked();


// test("toppings list initially contains only cheese", () => {})


// test("the checkboxes are initially unchecked", () => {
//   // your test code here
// });

// // Newsletter Form - Adding Responses
// test("the page shows information the user types into the name and email address form fields", () => {
//   // your test code here
// });

// test("checked status of checkboxes changes when user clicks them", () => {
//   // your test code here
// });

// test("a message is displayed when the user clicks the Submit button", () => {
//   // your test code here
// });
