import { render, screen } from "@testing-library/react";
import Login from "./Login";

test("renders learn react link", () => {
  render(<Login />);
  const textElement = screen.getByText(`로그인`);
  expect(textElement).toBeInTheDocument();
});
