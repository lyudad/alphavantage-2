import { Container } from '@mui/material'
  import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { useIncomeStatement } from './useIncomeStatement'

  export const IncomeStatement = () => {
  
    const { incomeStatementOptions } = useIncomeStatement()

    return (
      <Container maxWidth="sm">
           <HighchartsReact
            highcharts={Highcharts}
            options={incomeStatementOptions}
          />
      </Container>
    )
  }
  