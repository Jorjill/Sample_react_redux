import { createStore } from "redux"
import reducers from "./reducers";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage: storage
};

const pReducer = persistReducer(persistConfig, reducers);

// create store from all reducers
export const store = createStore(pReducer);
export const persistor = persistStore(store);