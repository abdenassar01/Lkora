import { useNavigation } from '@react-navigation/native';
import axios from 'axios'
import { useQuery } from 'react-query'
import { PlayerType } from '../../../../../../types/topplayer';
import PlayerListErrorHandler from './error/PlayerListErrorHandler';
import SkeltonPlayerOfTheWeekLoader from './loader/SkeltonPlayerOfTheWeekLoader';
import { Player, Left, PlayerAvatar, PlayerListWrapper, PlayerName, PressablePlayer, Rating, TeamName, RatingWrapper, Heading, TmpText, Spacer } from './styles/Styles'

export default function PlayersList() {

  const navigation: any = useNavigation();

  const { data, isLoading, error } = useQuery("get top players", async () => {
    const result = await axios.get(`https://api.sofascore.com/api/v1/sport/football/trending-top-players`);
    const players: PlayerType[] = result?.data?.topPlayers
    return players
  })

  if(error) return <PlayerListErrorHandler  message="Network Error. Check your network and try again." />

  return (
    <PlayerListWrapper>
      <Heading>Top Players Of The Week</Heading>

      {
        isLoading ? <SkeltonPlayerOfTheWeekLoader /> :
        data?.map((player: PlayerType) => (
          <PressablePlayer key={ player.player.id } onPress={ () => navigation.navigate("playerDetails", { playerId: player.player.id, eventId: player.event.id }) }>
            <Player>
              <Left>
                <PlayerAvatar source={{ uri: `https://api.sofascore.app/api/v1/player/${ player.player.id }/image` }}></PlayerAvatar>
                <PlayerName>{ player.player.shortName }</PlayerName>
              </Left>
              <Left>
                <TeamName>{ player.team.shortName }</TeamName>
                <RatingWrapper>
                  <Rating>{ player.rating }</Rating>
                </RatingWrapper>
              </Left>
            </Player>
          </PressablePlayer>
        ))
      }   
      <Spacer />   
    </PlayerListWrapper>
  )
}