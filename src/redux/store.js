import { applyMiddleware, createStore } from "redux";
import ReduxThunk from 'redux-thunk';
import rootReducers from "./action/reducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';

const persistConfig ={
    key: 'persist-key',
    storage
}

const persistedReducer = persistReducer(persistConfig, rootReducers);
const store = createStore(persistedReducer, applyMiddleware(ReduxThunk));
const persistor = persistStore(store);

export default store;
export{persistor};