import storage from "redux-persist/lib/storage"; //local storage Url
import sessionStorage from "redux-persist/lib/storage/session"; //session storage Url

import shoppingCardReducre from "./features/shoppingCard/ShoppingCardSlice"; // import reducer from store
import usersReducre from "./features/users/UsersSlice"; // import reducer from slice user
import { combineReducers, configureStore } from "@reduxjs/toolkit"; // combine any reducers
import { persistReducer, persistStore } from "redux-persist";

const LocalConfiguration = {
  key: "globalStorage",
  storage: storage,
  blacklist: ["user"],
};

const sessionConfiguration = {
  key: "sessionStorage",
  storage: sessionStorage,
};

const rootReducer = combineReducers({
  shoppingCard: shoppingCardReducre,
  user: persistReducer(sessionConfiguration, usersReducre),
});

const persistedReducer = persistReducer(LocalConfiguration, rootReducer);

export const reduxPersistStore = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(reduxPersistStore);
