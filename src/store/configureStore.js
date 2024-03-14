import ui from "./ui";
import user from "./user";
import feed from "./feed";
import photo from "./photo";
import token from "./token";
import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";

const middleware = [...getDefaultMiddleware()];

const reducer = combineReducers({ photo, token, user, feed, ui });

const store = configureStore({ reducer, middleware });

export default store;
