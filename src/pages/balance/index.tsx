import { Container } from '@mui/material'
  import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { useBalance } from './useBalance'

  export const balance = () => {
  
    const { balanceOptions } = useBalance()

    return (
      <Container maxWidth="sm">
           <HighchartsReact
            highcharts={Highcharts}
            options={balanceOptions}
          />
      </Container>
    )
  }
  