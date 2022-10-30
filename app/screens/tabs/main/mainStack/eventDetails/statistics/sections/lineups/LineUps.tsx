import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'
import { LineUp, Player } from '../../../../../../../../../types/lineups'
import { Avatar, GroupeName, Heading, LineUpWrapper, Name, PlayerWrapper, Portion, Position, Rating, ShirtNumber } from './styles/Styles'

type Props = {
  id: number
}

export default function LineUps({ id }: Props) {

  const { data, isFetching, error } = useQuery("match stats", async () => {
    const response = await axios.get(`https://api.sofascore.com/api/v1/event/${ id }/lineups`)
    const data: LineUp = response.data
    return data
  })

  if(isFetching) return <GroupeName>loading...</GroupeName>
  if(error) return <GroupeName>error</GroupeName>

  return (
    <LineUpWrapper contentContainerStyle={{ alignItems: 'center' }}>
     
      <Heading>Home</Heading>
      <GroupeName>starting xi</GroupeName>
     {
      data?.home?.players.map((player: Player) => !(player.substitute) &&  (
        <PlayerWrapper key={ player.player.id }>
          <Portion>
            <Position>{ player.position }</Position>
            <ShirtNumber>{ player.shirtNumber }</ShirtNumber>
          </Portion>  
          <Name>{ player.player.name }</Name>
          <Portion>
            <Rating>{ player.statistics.rating }</Rating>
            <Avatar source={{ uri: `https://api.sofascore.app/api/v1/player/${ player.player.id }/image` }}></Avatar>
          </Portion>
        </PlayerWrapper>
      ))
     }

      <GroupeName>substitution</GroupeName>
     {
      data?.home?.players.map((player: Player) => (player.substitute) &&  (
        <PlayerWrapper key={ player.player.id }>
          <Portion>
            <Position>{ player.position }</Position>
            <ShirtNumber>{ player.shirtNumber }</ShirtNumber>
          </Portion>  
          <Name>{ player.player.name }</Name>
          <Portion>
            <Rating>{ player.statistics.rating ?? "💺" }</Rating>
            <Avatar source={{ uri: `https://api.sofascore.app/api/v1/player/${ player.player.id }/image` }}></Avatar>
          </Portion>
        </PlayerWrapper>
      ))
     }

      <Heading>Away</Heading>

      <GroupeName>starting xi</GroupeName>
     {
      data?.away?.players.map((player: Player) => !(player.substitute) &&  (
        <PlayerWrapper key={ player.player.id }>
          <Portion>
            <Position>{ player.position }</Position>
            <ShirtNumber>{ player.shirtNumber }</ShirtNumber>
          </Portion>  
          <Name>{ player.player.name }</Name>
          <Portion>
            <Rating>{ player.statistics.rating }</Rating>
            <Avatar source={{ uri: `https://api.sofascore.app/api/v1/player/${ player.player.id }/image` }}></Avatar>
          </Portion>
        </PlayerWrapper>
      ))
     }

      <GroupeName>substitution</GroupeName>
     {
      data?.away?.players.map((player: Player) => (player.substitute) &&  (
        <PlayerWrapper key={ player.player.id }>
          <Portion>
            <Position>{ player.position }</Position>
            <ShirtNumber>{ player.shirtNumber }</ShirtNumber>
          </Portion>  
          <Name>{ player.player.name }</Name>
          <Portion>
            <Rating>{ player.statistics.rating ?? "💺" }</Rating>
            <Avatar source={{ uri: `https://api.sofascore.app/api/v1/player/${ player.player.id }/image` }}></Avatar>
          </Portion>
        </PlayerWrapper>
      ))
     }
    </LineUpWrapper>
  )
}