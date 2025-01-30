import React from "react";
import { render } from "@testing-library/react-native";
import App from "../App";

test("renders the app without crashing", () => {
  const { getByText } = render(<App />);
  expect(getByText("Welcome")).toBeTruthy();
});
