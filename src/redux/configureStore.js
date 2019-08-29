import { createStore, applyMiddleware, compose } from "redux";
import ReduxThunk from "redux-thunk";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import rootReducer from "./reducers";
import { initialState } from "./reducers/initialState";

export default function configureStore() {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(
      applyMiddleware(ReduxThunk, reduxImmutableStateInvariant())
    )
  );
}
