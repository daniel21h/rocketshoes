import { combineReducers } from 'redux';

import cart from './cart/reducer';

const rootReducer = combineReducers({
  cart,
});

export type IRootState = ReturnType<typeof rootReducer>;

export default rootReducer;
