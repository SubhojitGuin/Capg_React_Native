import React from 'react';
import { renderWithRedux } from './test-utils';
import SummaryCard from './SummaryCard';
import SummaryHeader from './SummaryHeader';
import '@testing-library/jest-dom';

describe('SummaryHeader Component', () => {
  test('calculates and shows numerical tallies accurately', () => {
    const customState = {
      employees: {
        allEmployees: [
          { id: 1, name: "A", team: "X", status: "Going" },
          { id: 2, name: "B", team: "Y", status: "Not Going" },
          { id: 3, name: "C", team: "Z", status: "Pending" },
          { id: 4, name: "D", team: "W", status: "Going" }
        ]
      }
    };

    const { getByText } = renderWithRedux(<SummaryHeader />, { preloadedState: customState });

    expect(getByText('Total Employees').nextSibling).toHaveTextContent('4');
    expect(getByText('Going').nextSibling).toHaveTextContent('2');
    expect(getByText('Not Going').nextSibling).toHaveTextContent('1');
    expect(getByText('Pending').nextSibling).toHaveTextContent('1');
  });
});