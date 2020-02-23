import { combineReducers } from "redux";

import loginReducer from "./login/loginReducer";
import boardReducer from "./board/boardReducer";
import bookingReducer from "./booking/bookingReducer";
import userBookingReducer from "./userBookings/userBookingsReducer";

const rootReducer = combineReducers({
  login: loginReducer,
  board: boardReducer,
  booking: bookingReducer,
  userBookings: userBookingReducer
});

export default rootReducer;
