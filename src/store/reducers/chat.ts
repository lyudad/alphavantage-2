import { createSlice } from '@reduxjs/toolkit'
import { IChatState } from '@src/models/chat'
import { fetchChatData } from './actions'

const initialState: IChatState = {
  error: null,
  loading: false,
  chartData: [],
}

const chatSlice = createSlice({
  name: 'chat',
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
    builder.addCase(fetchChatData.pending, (state) => {
      state.loading = true
    })
    builder.addCase(fetchChatData.fulfilled, (state, { payload }) => {
      state.loading = false
      state.chartData = payload.chartData
    })
    builder.addCase(fetchChatData.rejected, (state, { payload }) => {
      state.loading = false
      state.error = payload || null
    })
  },
})

export default chatSlice.reducer