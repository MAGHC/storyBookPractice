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

test("initial conditions", () => {
  render(<Color />);
  // 버튼 활성화 상태로 시작하는지 확인

  const colorBtn = screen.getByRole("button", { name: "색상변경" });

  expect(colorBtn).toBeEnabled();

  // 체크박스 시작상태 확인
  const checkBox = screen.getByRole("checkbox");
  expect(checkBox).not.toBeChecked();
});

test("체크박스 disables buuton on first click and enables on a second click", () => {
  render(<Color></Color>);

  const checkbox = screen.getByRole("checkbox");
  const button = screen.getByRole("button");

  fireEvent.click(checkbox);
  expect(button).toBeDisabled();

  fireEvent.click(checkbox);
  expect(button).toBeEnabled();
});
