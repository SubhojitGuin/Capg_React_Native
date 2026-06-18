import React from 'react';
import { renderWithRedux } from './test-utils';
import FilterComponent from './FilterComponent';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

describe('FilterComponent', () => {
  test('renders with all status options and highlights current active state filter', () => {
    const { getByRole } = renderWithRedux(<FilterComponent />);
    expect(getByRole('button', { name: 'All' })).toHaveClass('active');
  });

  test('dispatches updateFilter action upon button click', async () => {
    const { getByRole, store } = renderWithRedux(<FilterComponent />);
    
    const goingButton = getByRole('button', { name: 'Going' });
    await userEvent.click(goingButton);

    expect(store.getState().employees.activeFilter).toBe('Going');
  });
});
