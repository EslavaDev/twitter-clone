import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { MicroserviceApi } from "../api";

export const api = new MicroserviceApi(
  "https://us-central1-merco-web.cloudfunctions.net/twitterClone"
);

const showError = () => next => action => {
  let result = next(action);
  if (result.error && result.error.id) {
    const { error } = result;
    console.log(error);
    // showToast({
    //   id: error.id,
    //   autoClose: error.close,
    //   message: `\u{1F613} ${error.message}`,
    //   type: 'error',
    // });
  }
  return result;
};

export const AppMiddlewares = () => {
  let middlewares = applyMiddleware(
    thunk.withExtraArgument({
      // apolloClient,
      api,
    }),
    showError
  );
  // eslint-disable-next-line no-undef
  if (process.env.NODE_ENV === "development") {
    middlewares = composeWithDevTools(middlewares);
  }
  return middlewares;
};
