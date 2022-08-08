import react from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "../App";

test("test title", () => {
  render(<App />);
  const title = screen.getByText(/Zach is coo/);
  expect(title).toBeInTheDocument();
});
