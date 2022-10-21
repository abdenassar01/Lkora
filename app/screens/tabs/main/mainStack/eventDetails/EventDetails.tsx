import WithGoBackHeader from '../../../../../utils/header/withgoback/WithGoBackHeader'
import { EventDetailsWrappe } from './styles/Styles'
import MainCard from './maincard/MainCard'
import Statistics from './statistics/Statistics'
import { useQuery } from 'react-query'
import { Text } from 'react-native'
import axios from 'axios'

export default function EventDetails({ route }: any) {

  const { data, isLoading, error } = useQuery("get match details", async () => {
    const result = await axios.get(`https://api.sofascore.com/api/v1/event/${ route.params.id }`);
    return result.data
  })

  if(isLoading) <Text>loading...</Text>
  if(error)  <Text>error occured</Text>

  return (
    <EventDetailsWrappe>
      <WithGoBackHeader tournament={ data?.event?.tournament?.uniqueTournament?.name }/>
      <MainCard event={ data?.event }/>
      <Statistics />
    </EventDetailsWrappe>
  )
}