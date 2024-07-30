import { createAsyncThunk } from '@reduxjs/toolkit'

import { IThunkAPI } from '@src/models'
import { fetchChartService, fetchIncomeStatementService, fetchBalanceService } from '@src/services'

export const fetchChatData = createAsyncThunk<
  {chartData: number[][]},
  {},
  IThunkAPI
>('fetchChatData', async ({}, thunkAPI) => {
  try {
    const chartData = await fetchChartService()

    return chartData
  } catch (e: any) {
    return thunkAPI.rejectWithValue(e)
  }
})

export const fetchIncomeStatementData = createAsyncThunk<
  {incomeStatementData: number[][]},
  {},
  IThunkAPI
>('fetchIncomeStateData', async ({}, thunkAPI) => {
  try {
    const incomeStatementData = await fetchIncomeStatementService()

    return incomeStatementData
  } catch (e: any) {
    return thunkAPI.rejectWithValue(e)
  }
})

export const fetchBalanceData = createAsyncThunk<
  {balanceData: number[][]},
  {},
  IThunkAPI
>('fetchBalanceData', async ({}, thunkAPI) => {
  try {
    const balanceData = await fetchBalanceService()

    return balanceData
  } catch (e: any) {
    return thunkAPI.rejectWithValue(e)
  }
})