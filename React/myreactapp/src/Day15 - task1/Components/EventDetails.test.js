import React from 'react';
import { renderWithRedux } from './test-utils';
import EventDetails from './EventDetails';
import '@testing-library/jest-dom';

describe('EventDetails Component', () => {
  test('renders event details from Redux state', () => {
    const { getByText } = renderWithRedux(<EventDetails />);
    
    expect(getByText('Event Details')).toBeInTheDocument();
    expect(getByText('Friday Team Lunch')).toBeInTheDocument();
    expect(getByText('Green Bowl Cafe')).toBeInTheDocument();
    expect(getByText('1:00 PM')).toBeInTheDocument();
    expect(getByText('Friday')).toBeInTheDocument();
  });
});
