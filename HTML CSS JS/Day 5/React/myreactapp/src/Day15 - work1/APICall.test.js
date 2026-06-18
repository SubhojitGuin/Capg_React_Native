import { screen, render } from '@testing-library/react';
import APICall from './APICall';

beforeEach(() => {
  global.fetch = jest.fn(() => 
    Promise.resolve({
      json: () => Promise.resolve({ title: 'test title' }),
    })
  )
});

test('renders API date', async () => {
  render(<APICall/>);
  const element = await screen.findByText('test title');
  expect(element).toBeInTheDocument();
});