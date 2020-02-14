import { combineReducers } from "redux";

import userReducer from "./user/userReducer";
import boardReducer from "./board/boardReducer";

const rootReducer = combineReducers({
  user: userReducer,
  board: boardReducer
});

export default rootReducer;
