import { useNavigation, useRoute } from '@react-navigation/native'
import React from 'react'
import { COLOR } from '../../../../../assets/color'
import { Avatar, BackIcon, Header, HeaderTitle, Heading, HeroSection, Paragraph, PlayerDetailsWrapper, PlayerInfo, Rating, RatingText, Spacer, Stats, StatsItem, Value } from './styles/Styles'
import Ionicons from "react-native-vector-icons/Ionicons";
import { useQuery } from 'react-query';
import axios from 'axios';
import { PlayerPerformance } from '../../../../../../types/playerstats';

export default function PlayerDetails() {

  const navigation: any = useNavigation();
  const root: any = useRoute();

  console.log("event: " + root.params.eventId + " player: " + root.params.playerId )

  const { data, isLoading, error } = useQuery<PlayerPerformance>("get player statistics", async () => {
    const result = await axios.get(`https://api.sofascore.com/api/v1/event/${ root.params.eventId }/player/${ root.params.playerId }/statistics`);
    return result.data
  })

  if(isLoading) return <Paragraph>Loading...</Paragraph>
  if(error) return <Paragraph>error happened check your network</Paragraph>

  return (
    <PlayerDetailsWrapper>
      <Header>
        <BackIcon onPress={ () => navigation.goBack() }>
          <Ionicons name="chevron-back-circle-sharp" size={ 35 } color={ COLOR.main } />
        </BackIcon>
        <HeaderTitle>{ data?.player?.name }</HeaderTitle>
      </Header>
      <HeroSection style={{ elevation: 5 }}>
        <Avatar  source={{ uri: `https://api.sofascore.app/api/v1/player/${ data?.player.id }/image` }}></Avatar>
        <Rating>
          <RatingText>{ data?.statistics?.rating }</RatingText>
        </Rating>
        <PlayerInfo>
          <Paragraph>{ data?.player?.name }</Paragraph>
          <Paragraph>{ data?.team?.name }</Paragraph>
          <Paragraph>{ (data?.player?.dateOfBirthTimestamp) && new Date(data.player.dateOfBirthTimestamp * 1000).getFullYear() }</Paragraph>
          <Paragraph>{ data?.player?.position === "G" ? "GoalKeeper" : data?.player?.position === "M" ? "Midfielder" : "Forward" }</Paragraph>
        </PlayerInfo>
      </HeroSection>
      <Stats style={{ elevation: 5 }}>
        <Heading>Statistics</Heading>
        <StatsItem style={{ elevation: 2 }} >
          <Paragraph>Total Pass</Paragraph>
          <Value>{ data?.statistics?.totalPass ?? 0 }</Value>
        </StatsItem>
        <StatsItem style={{ elevation: 2 }} >
          <Paragraph>Accurate Pass</Paragraph>
          <Value>{ data?.statistics?.accuratePass ?? 0 }</Value>
        </StatsItem>
        <StatsItem style={{ elevation: 2 }}>
          <Paragraph>Total Long Balls</Paragraph>
          <Value>{ data?.statistics?.totalLongBalls ?? 0 }</Value>
        </StatsItem>     
        <StatsItem style={{ elevation: 2 }}>
          <Paragraph>Total Clearance</Paragraph>
          <Value>{ data?.statistics?.totalClearance ?? 0 }</Value>
        </StatsItem>        
        <StatsItem style={{ elevation: 2 }}>
          <Paragraph>Saved Shots From Inside The Box</Paragraph>
          <Value>{ data?.statistics?.savedShotsFromInsideTheBox ?? 0 }</Value>
        </StatsItem>        
        <StatsItem style={{ elevation: 2 }}>
          <Paragraph>Saves</Paragraph>
          <Value>{ data?.statistics?.saves ?? 0 }</Value>
        </StatsItem>        
        <StatsItem style={{ elevation: 2 }}>
          <Paragraph>Punches</Paragraph>
          <Value>{ data?.statistics?.punches ?? 0 }</Value>
        </StatsItem>        
        <StatsItem style={{ elevation: 2 }}>
          <Paragraph>Minutes Played</Paragraph>
          <Value>{ data?.statistics?.minutesPlayed ?? 0 }</Value>
        </StatsItem>        
        <StatsItem style={{ elevation: 2 }}>
          <Paragraph>Touches</Paragraph>
          <Value>{ data?.statistics?.touches ?? 0 }</Value>
        </StatsItem>        
        <StatsItem style={{ elevation: 2 }}>
          <Paragraph>Rating</Paragraph>
          <Value>{ data?.statistics?.rating ?? 0 }</Value>
        </StatsItem>        
        <StatsItem style={{ elevation: 2 }}>
          <Paragraph>Possession Lost Ctrl</Paragraph>
          <Value>{ data?.statistics?.possessionLostCtrl ?? 0 }</Value>
        </StatsItem>        
      </Stats>
      <Spacer />
    </PlayerDetailsWrapper>
  ) 
}