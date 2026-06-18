import { createSlice } from "@reduxjs/toolkit";

const EmployeeSlice = createSlice({
  name: "employees",
  initialState: {
    event: {
      name: "Friday Team Lunch",
      venue: "Green Bowl Cafe",
      time: "1:00 PM",
      day: "Friday"
    },
    allEmployees: [
      { id: 1, name: "Anu", team: "UI", status: "Pending" },
      { id: 2, name: "Rahul", team: "Backend", status: "Pending" },
      { id: 3, name: "Sneha", team: "QA", status: "Pending" },
      { id: 4, name: "Kiran", team: "DevOps", status: "Pending" }
    ],
    activeFilter: 'All',
  },
  reducers: {
    updateStatus: (state, action) => {
      state.allEmployees = state.allEmployees.map((employee) => (employee.id === action.payload.id) 
        ? { ...employee, status: action.payload.status}
        : employee
      );
    },
    updateFilter: (state, action) => {
      state.activeFilter = action.payload;
    },
    reset: (state) => {
      state.allEmployees = state.allEmployees.map((emp) => {
        return { ...emp, status: 'Pending' }
      })
    }
  }
})

export const { updateStatus, updateFilter, reset } = EmployeeSlice.actions;
export default EmployeeSlice.reducer;