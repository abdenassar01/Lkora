import axios from 'axios';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { Event } from '../../../../../../types/events';
import Card from '../../../../../utils/card/Card';
import { MatchesWrapper, Spacer } from "../styles/Styles"
import ScheculedErrorHandler from './error/ScheculedErrorHandler';
import ScheduledSkiltonLoader from './loader/ScheduledSkiltonLoader';

type ScheduledProps = {
    today: string,
    key: (string & Date) | (number & Date)
}

export default function Scheduled({ today }: ScheduledProps) {

    const { data, isFetching, error, refetch } = useQuery("fetch scheduled matches", async () => {
        const result = await axios.get(`https://api.sofascore.com/api/v1/sport/football/scheduled-events/${ today }`) 
        return result.data
    })

    if(isFetching) return <ScheduledSkiltonLoader />
    if(error) return  <ScheculedErrorHandler message='Network Error, Please check your network connection and try again' refetch={ refetch } />

    const filtred = data.events.filter((event: Event) => ((event?.tournament.priority > 300) || (event?.tournament?.uniqueTournament?.id == 937)));

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