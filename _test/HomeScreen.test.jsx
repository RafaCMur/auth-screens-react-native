import React from "react";
import { render } from "@testing-library/react-native";
import { HomeScreen } from "../components/home-screen";

test("renders HomeScreen with Welcome text", () => {
  const { getByText } = render(<HomeScreen />);
  const welcomeText = getByText(/Welcome/i);
  expect(welcomeText).not.toBeNull();
});
