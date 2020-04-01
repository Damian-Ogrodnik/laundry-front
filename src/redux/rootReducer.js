import { combineReducers } from "redux";

import userReducer from "./user/userReducer";
import boardReducer from "./board/boardReducer";
import bookingReducer from "./booking/bookingReducer";
import userBookingReducer from "./userBookings/userBookingsReducer";
import toastReducer from "./toast/toastReducer";
import adminReducer from "./admin/adminReducer";

const rootReducer = combineReducers({
  user: userReducer,
  board: boardReducer,
  booking: bookingReducer,
  userBookings: userBookingReducer,
  toast: toastReducer,
  admin: adminReducer
});

export default rootReducer;
