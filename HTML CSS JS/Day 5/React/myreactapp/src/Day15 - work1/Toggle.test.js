import { render, screen } from "@testing-library/react";
import Toggle from "./Toggle";
import userEvent from "@testing-library/user-event";

it('should toggle the switch when the button is clicked', async () => {
  render(<Toggle/>)
  expect(screen.getByText('The switch is OFF')).toBeInTheDocument();
  const button = screen.getByRole('button');
  await userEvent.click(button);
  expect(screen.getByText('The switch is ON')).toBeInTheDocument();
  await userEvent.click(button);
  expect(screen.getByText('The switch is OFF')).toBeInTheDocument();
  
});