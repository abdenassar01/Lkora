import WithGoBackHeader from '../../../../../utils/header/withgoback/WithGoBackHeader'
import { EventDetailsWrappe } from './styles/Styles'
import MainCard from './maincard/MainCard'
import Statistics from './statistics/Statistics'
import { useQuery } from 'react-query'
import { Text } from 'react-native'
import axios from 'axios'
import SkeltonDetailsLoader from './loader/SkeltonDetailsLoader'

export default function EventDetails({ route }: any) {

  const { data, isFetching, error } = useQuery("get match details", async () => {
    const result = await axios.get(`https://api.sofascore.com/api/v1/event/${ route.params.id }`);
    return result.data
  })

  if(error) return <Text>error occured</Text>

  return (
    <EventDetailsWrappe>
      <WithGoBackHeader tournament={ data?.event?.tournament?.uniqueTournament?.name }/>
      {
        isFetching ? <SkeltonDetailsLoader /> :(
          <>
            <MainCard event={ data?.event }/>
            <Statistics id={ data?.event.id } />
          </> 
        )
      }

    </EventDetailsWrappe>
  )
}