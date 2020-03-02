import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { createStore } from "redux";
import { AppReducers } from "./reducers";
import { AppMiddlewares } from "./middlewares";

export const AppStore = initialState => {
  let store;
  const persistConfig = {
    key: "twitter-clone",
    storage,
    whitelist: ["layout"]
  };

  const isClient = typeof window !== "undefined";
  if (isClient) {
    store = createStore(
      persistReducer(persistConfig, AppReducers()),
      initialState,
      AppMiddlewares()
    );
    store.__PERSISTOR = persistStore(store);
  } else {
    store = createStore(
      AppReducers(),
      initialState,
      AppMiddlewares()
    );
  }
  return store;
};
