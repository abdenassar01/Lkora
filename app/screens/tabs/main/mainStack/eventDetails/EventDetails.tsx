import WithGoBackHeader from '../../../../../utils/header/withgoback/WithGoBackHeader'
import { EventDetailsWrappe } from './styles/Styles'
import MainCard from './maincard/MainCard'
import Statistics from './statistics/Statistics'
import { useQuery } from 'react-query'
import { Text } from 'react-native'
import axios from 'axios'
import SkeltonDetailsLoader from './loader/SkeltonDetailsLoader'
import ErrorHandler from '../../../../../utils/error/ErrorHandler'
import { useRoute } from '@react-navigation/native'

export default function EventDetails() {

  const route = useRoute()
  
  const { data, isFetching, error } = useQuery("get match details", async () => {
    const result = await axios.get(`https://api.sofascore.com/api/v1/event/${ route.params.id }`);
    return result.data
  })

  if(error) return <ErrorHandler message='Network Error. Please check your network status and try again' />

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