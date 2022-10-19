import React from 'react'
import { Avatar, Heading, LineUpWrapper, Name, PlayerWrapper, Position, Rating, ShirtNumber } from './styles/Styles'

export default function LineUps() {
  return (
    <LineUpWrapper contentContainerStyle={{ alignItems: 'center' }}>
      <Heading>Home</Heading>
      <PlayerWrapper>
        <Position>G</Position>
        <ShirtNumber>1</ShirtNumber>
        <Name>Alison Baker</Name>
        <Rating>7.2</Rating>
        <Avatar source={{ uri: "https://api.sofascore.app/api/v1/player/243609/image" }}></Avatar>
      </PlayerWrapper>
      <PlayerWrapper>
        <Position>LF</Position>
        <ShirtNumber>25</ShirtNumber>
        <Name>Alison Baker</Name>
        <Rating>7.2</Rating>
        <Avatar source={{ uri: "https://api.sofascore.app/api/v1/player/243609/image" }}></Avatar>
      </PlayerWrapper>
      <PlayerWrapper>
        <Position>L</Position>
        <ShirtNumber>5</ShirtNumber>
        <Name>Alison Baker</Name>
        <Rating>7.2</Rating>
        <Avatar source={{ uri: "https://api.sofascore.app/api/v1/player/243609/image" }}></Avatar>
      </PlayerWrapper>
      <PlayerWrapper>
        <Position>RB</Position>
        <ShirtNumber>3</ShirtNumber>
        <Name>Alison Baker</Name>
        <Rating>7.2</Rating>
        <Avatar source={{ uri: "https://api.sofascore.app/api/v1/player/243609/image" }}></Avatar>
      </PlayerWrapper>
      <Heading>Away</Heading>
      <PlayerWrapper>
        <Position>G</Position>
        <ShirtNumber>1</ShirtNumber>
        <Name>Alison Baker</Name>
        <Rating>7.2</Rating>
        <Avatar source={{ uri: "https://api.sofascore.app/api/v1/player/243609/image" }}></Avatar>
      </PlayerWrapper>
      <PlayerWrapper>
        <Position>LF</Position>
        <ShirtNumber>25</ShirtNumber>
        <Name>Alison Baker</Name>
        <Rating>7.2</Rating>
        <Avatar source={{ uri: "https://api.sofascore.app/api/v1/player/243609/image" }}></Avatar>
      </PlayerWrapper>
      <PlayerWrapper>
        <Position>L</Position>
        <ShirtNumber>5</ShirtNumber>
        <Name>Alison Baker</Name>
        <Rating>7.2</Rating>
        <Avatar source={{ uri: "https://api.sofascore.app/api/v1/player/243609/image" }}></Avatar>
      </PlayerWrapper>
      <PlayerWrapper>
        <Position>RB</Position>
        <ShirtNumber>3</ShirtNumber>
        <Name>Alison Baker</Name>
        <Rating>7.2</Rating>
        <Avatar source={{ uri: "https://api.sofascore.app/api/v1/player/243609/image" }}></Avatar>
      </PlayerWrapper>
    </LineUpWrapper>
  )
}