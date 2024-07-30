import { api, formatRequestError } from '@src/utils'
import { convertDateToTimestamp } from '@src/utils/dates'

export const fetchChartService = async (
): Promise<{ chartData: number[][] }> => {
  try {
    const { data } = await api.get(
      'query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=demo',
      {
      },
    )

    const daysData = data["Time Series (Daily)"]
    const chartData = Object.keys(daysData).map((day) => {
      return [convertDateToTimestamp(day), Number(daysData[day]["2. high"]) ]
    })

    return {chartData}
  } catch (e: any) {
    const errorMessage: string = formatRequestError(
      e?.response?.data || e.message,
    )

    throw errorMessage
  }
}

export const fetchIncomeStatementService = async (
): Promise<{ incomeStatementData: number[][] }> => {
  try {
    const { data } = await api.get(
      'query?function=INCOME_STATEMENT&symbol=IBM&apikey=demo',
      {
      },
    )

    const incomeStatementData = data.annualReports.map((el: {fiscalDateEnding: string, totalRevenue: string}) => {
      return [convertDateToTimestamp(el.fiscalDateEnding), Number(el.totalRevenue) ]
    })

    return {incomeStatementData}
  } catch (e: any) {
    const errorMessage: string = formatRequestError(
      e?.response?.data || e.message,
    )

    throw errorMessage
  }
}

export const fetchBalanceService = async (
): Promise<{ balanceData: number[][] }> => {
  try {
    const { data } = await api.get(
      'query?function=BALANCE_SHEET&symbol=IBM&apikey=demo',
      {
      },
    )

    const balanceData = data.annualReports.map((el: {fiscalDateEnding: string, totalAssets: string}) => {
      return [convertDateToTimestamp(el.fiscalDateEnding), Number(el.totalAssets) ]
    })

    return {balanceData}
  } catch (e: any) {
    const errorMessage: string = formatRequestError(
      e?.response?.data || e.message,
    )

    throw errorMessage
  }
}
