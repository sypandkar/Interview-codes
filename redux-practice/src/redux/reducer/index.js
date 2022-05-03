import React from "react";
import { combinereducers } from "redux";
import users from "./users";

const rootReducer = combineReducers({
  users: users,
});

export default rootReducer;
