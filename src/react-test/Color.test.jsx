import Color from "./Color";

import { render, screen, fireEvent } from "@testing-library/react";

test("button has correct initial color", () => {
  render(<Color />);
  const colorBtn = screen.getByRole("button", { name: "색상변경" }); //button 과 text 를 테스트한다

  //스타일확인
  expect(colorBtn).toHaveStyle({ backgroundColor: "red" });

  //버튼클릭
  fireEvent.click(colorBtn);

  //색상변경 확인
  expect(colorBtn).toHaveStyle({ backgroundColor: "blue" });

  //텍스트변경 확인
  expect(colorBtn.textContent).toBe("변경완료");
});
