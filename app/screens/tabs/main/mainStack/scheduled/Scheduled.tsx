import axios from 'axios';
import { useState } from 'react';
import { Text } from 'react-native';
import { useQuery } from 'react-query';
import Card from '../../../../../utils/card/Card';


export default function Scheduled() {

    const [ day, setDay ] = useState<string>(String(new Date().getDay()).padStart(2, '0'));
    const [ month, setMonth ] = useState<string>(String(new Date().getMonth() + 1).padStart(2, '0'));
    const [ year, setYear ] = useState<string>(String(new Date().getFullYear()));

    const { data, isLoading, error } = useQuery("fetch scheduled matches", async () => {
        const result = await axios.get(`https://api.sofascore.com/api/v1/sport/football/scheduled-events/${ year }-${ month }-${ day }`) 

        return result.data
    })

    if(isLoading) return <Text>loading...</Text>
    if(error) return <Text>error</Text>
    
  return (
        <Card />
    )
}