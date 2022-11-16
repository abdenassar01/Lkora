import axios from 'axios';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { Event } from '../../../../../../types/events';
import { MainText } from '../../../../../assets/text/Text';
import Card from '../../../../../utils/card/Card';
import { MatchesWrapper, Spacer } from "../styles/Styles"

export default function Scheduled() {

    const [ day, setDay ] = useState<string>(String(new Date().getDate()).padStart(2, '0'));
    const [ month, setMonth ] = useState<string>(String(new Date().getMonth() + 1).padStart(2, '0'));
    const [ year, setYear ] = useState<string>(String(new Date().getFullYear()));

    const { data, isLoading, error } = useQuery("fetch scheduled matches", async () => {
        const result = await axios.get(`https://api.sofascore.com/api/v1/sport/football/scheduled-events/${ year }-${ month }-${ day }`) 
        return result.data
    })

    if(isLoading) return <MainText>loading...</MainText>
    if(error) return <MainText>error occured. check your network status and try again</MainText>

    const filtred = data.events.filter((event: Event) => ( event?.tournament.priority > 300 ));

  return (
    <MatchesWrapper>
        {
            (filtred.length === 0 ) ? <MainText>No Matches For the moment</MainText> :
            filtred.map((event: Event) => <Card key={ event.id } event={ event } />)
        }
        <Spacer />
    </MatchesWrapper>
       
    )
}