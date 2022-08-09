import react from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Screen from "../components/Screen";

// test for proper rendering of the screen at each of the states the machine can be in

// test that when the dispenseFlag is set to true the screen will display the thank you message and not allow any more input until the cycle is reset
