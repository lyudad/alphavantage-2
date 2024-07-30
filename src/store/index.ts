
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist'
import { useDispatch } from 'react-redux'
import storage from 'redux-persist/lib/storage'

import chatReducer from './reducers/chat'
import incomeStatementReducer from './reducers/incomeStatement'
import balanceReducer from './reducers/incomeStatement'

const persistConfig = {
  key: 'store',
  whitelist: [],
  storage,
}

const reducers = combineReducers({
  chat: chatReducer,
  incomeStatement: incomeStatementReducer,
  balance: balanceReducer
})

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
})

export const persistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
