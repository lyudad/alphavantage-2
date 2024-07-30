import { createSlice } from '@reduxjs/toolkit'
import { IBalanceState } from '@src/models/balance'
import { fetchBalanceData } from './actions'

const initialState: IBalanceState = {
  error: null,
  loading: false,
  balanceData: [],
}

const balanceSlice = createSlice({
  name: 'balance',
  initialState,
  reducers: {
    clearError(state) {
      state.error = null
    },
    clearPatientsList() {
      return initialState
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBalanceData.pending, (state) => {
      state.loading = true
    })
    builder.addCase(fetchBalanceData.fulfilled, (state, { payload }) => {
      state.loading = false
      state.balanceData = payload.balanceData
    })
    builder.addCase(fetchBalanceData.rejected, (state, { payload }) => {
      state.loading = false
      state.error = payload || null
    })
  },
})

export default balanceSlice.reducer