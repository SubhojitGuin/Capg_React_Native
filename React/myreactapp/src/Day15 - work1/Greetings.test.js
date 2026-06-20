import { render, screen } from '@testing-library/react';
import Greetings from "./Greetings";

describe('Greetings', () => {
  test('renders Greetings component', () => {
    render(<Greetings/>)
    const headingElement = screen.getByText(/Hello World/i);
    expect(headingElement).toBeInTheDocument();
  });
  test('renders button in Greetings component', () => {
    render(<Greetings/>)
    const buttonElement = screen.getByText(/Click Me/i);
    expect(buttonElement).toBeInTheDocument();
  });
})