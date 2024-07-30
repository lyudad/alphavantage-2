import { Container } from '@mui/material'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { useChat } from './useChart'

export const Chart = () => {

  const { chatOptions } = useChat()

  return (
    <Container maxWidth="sm">
      <HighchartsReact
        highcharts={Highcharts}
        options={chatOptions}
      />
    </Container>
  )
}
