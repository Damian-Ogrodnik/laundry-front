import { combineReducers } from "redux";

import loginReducer from "./login/loginReducer";
import boardReducer from "./board/boardReducer";
import bookingReducer from "./booking/bookingReducer";

const rootReducer = combineReducers({
  login: loginReducer,
  board: boardReducer,
  booking: bookingReducer
});

export default rootReducer;
