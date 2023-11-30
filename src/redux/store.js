// store.js
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import thunk from 'redux-thunk';
import userReducer from './reducers/userReducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user'], // Only persist the user reducer
};

const rootReducer = combineReducers({
  user: userReducer,
  // ... other reducers
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, applyMiddleware(thunk));

export const persistor = persistStore(store);

export default store;
