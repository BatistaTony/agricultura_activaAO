import { createStore } from 'redux'
import allReducers from './reducers/index'
import { persistReducer, persistStore } from 'redux-persist'
import storage  from 'redux-persist/lib/storage'


const persistConfig = {
  key: "agricultura_activa",
  storage,
  blacklist: ['Harvest']
}

const persistedReducer = persistReducer(persistConfig, allReducers)


const store = createStore(
  persistedReducer
);


const persistedStore  = persistStore(store)

export { store, persistedStore };