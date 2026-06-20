import { configureStore } from "@reduxjs/toolkit";
import TicketReducer from './TicketSlice';

const TicketStore = configureStore({
  reducer: {
    tickets: TicketReducer
  }
});

export default TicketStore;