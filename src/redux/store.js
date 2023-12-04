// redux/store.js
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import registrationReducer from './reducers/registrationReducer';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import vendorReducer from './reducers/vendorReducer';
import packageReducer from './reducers/packageReducer';
// Import other reducers

const rootReducer = combineReducers({
  vendor: vendorReducer,
  packages: packageReducer,
  registration: registrationReducer,
  // Other reducers
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);
