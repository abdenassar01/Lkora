import React from 'react'
import { Avatar, Heading, LineUpWrapper, Name, PlayerWrapper, Position, Rating, ShirtNumber } from './styles/Styles'

export default function LineUps() {
  return (
    <LineUpWrapper>
      <Heading>Home</Heading>
      <PlayerWrapper>
        <Position>G</Position>
        <ShirtNumber>1</ShirtNumber>
        <Name>Alison Baker</Name>
        <Rating>7.2</Rating>
        <Avatar source={{ uri: "https://api.sofascore.app/api/v1/player/243609/image" }}></Avatar>
      </PlayerWrapper>
    </LineUpWrapper>
  )
}