import { screen, render } from '@testing-library/react';
import AsyncData from './AsyncData';

test('renders loading message and then data loaded message', async () => {
  render(<AsyncData />);
  const mymsg = screen.getByText(/Loading.../i);
  expect(mymsg).toBeInTheDocument();
  const loadedMsg = await screen.findByText(/Data loaded/i);
  expect(loadedMsg).toBeInTheDocument();
})