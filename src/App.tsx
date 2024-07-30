import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { Route, Routes, Link, Outlet } from 'react-router-dom';

import { persistor, store } from '@src/store'
import { Chart } from './pages/chart'
import { IncomeStatement } from './pages/incomeStatement'

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Chart />} />
            <Route path="income" element={<IncomeStatement />} />
            <Route path="balance" element={<IncomeStatement />} />
          </Route>
        </Routes>
      </PersistGate>
    </Provider >
  )
}

function Layout() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Chart</Link>
          </li>
          <li>
            <Link to="/income">Income</Link>
          </li>
          <li>
            <Link to="/balance">Balance</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

export default App
