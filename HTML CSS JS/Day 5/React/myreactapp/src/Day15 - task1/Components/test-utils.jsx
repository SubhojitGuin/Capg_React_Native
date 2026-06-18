import React from 'react';
import { render } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import employeeReducer from '../Redux/EmployeeSlice';

export function renderWithRedux(
  ui,
  {
    preloadedState,
    store = configureStore({ reducer: { employees: employeeReducer }, preloadedState }),
  } = {}
) {
  // function Wrapper({ children }) {
  //   return <Provider store={store}>{children}</Provider>;
  // }
  // return { ...render(ui, { wrapper: Wrapper }), store };
  return { ...render(<Provider store={store}>{ui}</Provider>), store };
}
