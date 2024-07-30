import { createSlice } from '@reduxjs/toolkit'
import { IIncomeStatementState } from '@src/models/incomeStatement'
import { fetchIncomeStatementData } from './actions'

const initialState: IIncomeStatementState = {
  error: null,
  loading: false,
  importStatementData: [],
}

const incomeStatementSlice = createSlice({
  name: 'incomeStatement',
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
    builder.addCase(fetchIncomeStatementData.pending, (state) => {
      state.loading = true
    })
    builder.addCase(fetchIncomeStatementData.fulfilled, (state, { payload }) => {
      state.loading = false
      state.importStatementData = payload.incomeStatementData
    })
    builder.addCase(fetchIncomeStatementData.rejected, (state, { payload }) => {
      state.loading = false
      state.error = payload || null
    })
  },
})

export default incomeStatementSlice.reducer