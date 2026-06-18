import React from 'react';
import { renderWithRedux } from './test-utils';
import EmployeeList from './EmployeeList';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

describe('EmployeeList Component', () => {
  const customState = {
    employees: {
      activeFilter: 'All',
      allEmployees: [
        { id: 1, name: "Anu", team: "UI", status: "Going" },
        { id: 2, name: "Rahul", team: "Backend", status: "Pending" }
      ]
    }
  };

  test('renders all relevant collection elements accurately based on standard grid arrays', () => {
    const { getByText } = renderWithRedux(<EmployeeList />, { preloadedState: customState });
    expect(getByText('Anu')).toBeInTheDocument();
    expect(getByText('Rahul')).toBeInTheDocument();
  });

  test('filters elements correctly down to specific targets matching current filter configurations', () => {
    const filteredState = {
      employees: {
        activeFilter: 'Going',
        allEmployees: [
          { id: 1, name: "Anu", team: "UI", status: "Going" },
          { id: 2, name: "Rahul", team: "Backend", status: "Pending" }
        ]
      }
    };
    const { getByText, queryByText } = renderWithRedux(<EmployeeList />, { preloadedState: filteredState });
    expect(getByText('Anu')).toBeInTheDocument();
    expect(queryByText('Rahul')).not.toBeInTheDocument();
  });

  test('toggles attendance status back to intermediate parameters on click', async () => {
    const { getAllByRole, store } = renderWithRedux(<EmployeeList />, { preloadedState: customState });

    // Anu's current status is 'Going'. Clicking her 'Going' button should flip it back to 'Pending'.
    const goingButtons = getAllByRole('button', { name: 'Going' });
    await userEvent.click(goingButtons[0]);

    expect(store.getState().employees.allEmployees[0].status).toBe('Pending');
  });
});
