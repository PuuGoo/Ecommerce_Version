import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import productReducer, {
  productDetailsReducer,
} from "./reducers/productReducer.js";
import logger from "redux-logger";

const rootReducer = combineReducers({
  products: productReducer,
  productsDetails: productDetailsReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
);

// store.subscribe(() => console.log(store.getState()));
// store.dispatch(getProduct());
export default store;
