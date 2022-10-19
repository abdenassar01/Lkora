import WithGoBackHeader from '../../../../../utils/header/withgoback/WithGoBackHeader'
import { EventDetailsWrappe } from './styles/Styles'
import MainCard from './maincard/MainCard'
import Statistics from './statistics/Statistics'

export default function EventDetails() {
  return (
    <EventDetailsWrappe>
      <WithGoBackHeader tournament='Premier League' />
      <MainCard />
      <Statistics />
    </EventDetailsWrappe>
  )
}