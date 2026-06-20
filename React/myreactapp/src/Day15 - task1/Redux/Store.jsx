import { configureStore } from "@reduxjs/toolkit";
import EmployeeReducer from './EmployeeSlice';

const EmployeeStore = configureStore({
  reducer: {
    employees: EmployeeReducer
  }
})

export default EmployeeStore;