import axios from 'axios';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { Event } from '../../../../../../types/events';
import Card from '../../../../../utils/card/Card';
import { MatchesWrapper, Spacer } from "../styles/Styles"
import ScheculedErrorHandler from './error/ScheculedErrorHandler';
import ScheduledSkiltonLoader from './loader/ScheduledSkiltonLoader';

export default function Scheduled() {

    const [ day, setDay ] = useState<string>(String(new Date().getDate()).padStart(2, '0'));
    const [ month, setMonth ] = useState<string>(String(new Date().getMonth() + 1).padStart(2, '0'));
    const [ year, setYear ] = useState<string>(String(new Date().getFullYear()));

    const { data, isFetching, error, refetch } = useQuery("fetch scheduled matches", async () => {
        const result = await axios.get(`https://api.sofascore.com/api/v1/sport/football/scheduled-events/${ year }-${ month }-${ day }`) 
        return result.data
    })

    if(isFetching) return <ScheduledSkiltonLoader />
    if(error) return  <ScheculedErrorHandler message='Network Error, Please check your network connection and try again' refetch={ refetch } />

    const filtred = data.events.filter((event: Event) => ( event?.tournament.priority > 300 ));

  return (
    <MatchesWrapper>
        {
            (filtred.length === 0 ) ? <ScheculedErrorHandler message='No scheduled matches at the moment' /> :
            filtred.map((event: Event) => <Card key={ event.id } event={ event } />)
        }
        <Spacer />
    </MatchesWrapper>
    )
}