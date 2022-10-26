import Color from "./Color";

import { render, screen } from "@testing-library/react";

test("button has correct initial color", () => {
  render(<Color />);
  const colorBtn = screen.getByRole("button", { name: "색상변경" }); //button 과 text 를 테스트한다

  //
  expect(colorBtn).toHaveStyle({ backgroundColor: "red" });
});

// test("button turns blue when clicked", () => {
//   render(<Color></Color>);
// });
