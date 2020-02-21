import { combineReducers } from "redux";

import userReducer from "./user/userReducer";
import boardReducer from "./board/boardReducer";
import bookingReducer from "./booking/bookingReducer";

const rootReducer = combineReducers({
  user: userReducer,
  board: boardReducer,
  booking: bookingReducer
});

export default rootReducer;
