import { render, screen } from "@testing-library/react"
import Greetings2 from "./Greetings2"

describe('Greetings2', () => {
  test('renders Greetings2 component', () => {
    render(<Greetings2 name='React'/>);
    const greetingElement = screen.getByText(/Hello React/i);
    expect(greetingElement).toBeInTheDocument();
  });
  test('renders button in Greetings component', () => {
    render(<Greetings2 name='React' />);
    const buttonElement = screen.getByText(/Click Me/i);
    expect(buttonElement).toBeInTheDocument();
  });
})