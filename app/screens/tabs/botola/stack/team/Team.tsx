import { View, Text } from 'react-native'
import React from 'react'
import WithGoBackHeader from '../../../../../utils/header/withgoback/WithGoBackHeader'
import { Avatar, Card, CardRightSide, Heading, Spacer, StaduimImage, TeamWrapper, Title, TournomantLogo } from './styles/Styles'
import { useQuery } from 'react-query'
import ErrorHandler from '../../../../../utils/error/ErrorHandler'
import axios from 'axios'
import { useRoute } from '@react-navigation/native'

export default function Team() {

    const route: any = useRoute();

    const { data, isFetching, error } = useQuery("Get Team Details", async () => {
        const result = await axios.get(`https://api.sofascore.app/api/v1/team/${ route?.params?.id }`);
        console.log(result.data);
    })

    if(isFetching) return <Heading>loading...</Heading>
    if(error) return <ErrorHandler message='Network Error. Please check your network status and try again.' />
    
  return (
    <TeamWrapper>
        <WithGoBackHeader tournament='Arsonal'/>
        <Card>
            <Avatar source={{ uri: `https://api.sofascore.app/api/v1/team/42/image` }}></Avatar>
            <CardRightSide>
                <Heading>Arsonal</Heading>
                <Heading>Premier League</Heading>
                <Heading>1890</Heading>
            </CardRightSide>
            <TournomantLogo source={{ uri: `https://api.sofascore.app/api/v1/team/42/image` }}></TournomantLogo>
        </Card>
        <Title>Manager</Title>
        <Card>
            <Avatar source={{ uri: `https://api.sofascore.app/api/v1/team/42/image` }}></Avatar>
            <CardRightSide>
                <Heading>Mickel Artita</Heading>
                <Heading>Espana</Heading>
            </CardRightSide>
        </Card>
        <Title>Staduim</Title>
        <Card>
            <Spacer />
            <CardRightSide>
                <Heading>Emirates Stadium</Heading>
                <Heading>60272</Heading>
                <Heading>London</Heading>
            </CardRightSide>
            <StaduimImage source={{ uri: `https://api.sofascore.app/api/v1/team/42/image` }}></StaduimImage>
            <Spacer />
        </Card>
        <Title>Players List</Title>
    </TeamWrapper>
  )
}