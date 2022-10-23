import { useNavigation } from '@react-navigation/native';
import axios from 'axios'
import { useQuery } from 'react-query'
import { PlayerType } from '../../../../../../types/topplayer';
import { Player, Left, PlayerAvatar, PlayerListWrapper, PlayerName, PressablePlayer, Rating, TeamName, RatingWrapper, Heading, TmpText, Spacer } from './styles/Style'

export default function PlayersList() {

  const navigation: any = useNavigation();

  const { data, isLoading, error } = useQuery("get top players", async () => {
    const result = await axios.get(`https://api.sofascore.com/api/v1/sport/football/trending-top-players`);
    const players: PlayerType[] = result?.data?.topPlayers
    return players
  })

  if(isLoading) return <TmpText>loading...</TmpText>
  if(error) return <TmpText>check network</TmpText>

  return (
    <PlayerListWrapper >
      <Heading>Top Players Of The Week</Heading>

      {
        data?.map((player: PlayerType) =>(
          <PressablePlayer key={ player.player.id } onPress={ () => navigation.navigate("playerDetails") }>
            <Player style={{ elevation: 5 }}>
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