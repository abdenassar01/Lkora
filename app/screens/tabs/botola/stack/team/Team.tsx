import { View, Text } from 'react-native'
import React from 'react'
import WithGoBackHeader from '../../../../../utils/header/withgoback/WithGoBackHeader'
import { Avatar, Card, CardRightSide, Heading, Spacer, StaduimImage, TeamWrapper, Title, TournomantLogo } from './styles/Styles'

export default function Team() {
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