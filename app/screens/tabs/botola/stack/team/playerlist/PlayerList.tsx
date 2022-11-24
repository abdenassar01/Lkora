import axios from 'axios';
import { useQuery } from 'react-query';
import { PlayerType } from '../../../../../../../types/player';
import ErrorHandler from '../../../../../../utils/error/ErrorHandler';
import { Avatar, CentreSection, LeftSection, Player, PlayerName, PlayersWrapper, RightSection, ShirtNumber, Spacer, TeamName } from './styles/Styles'

type Props = {
    id?: number 
}

export default function PlayerList({ id }: Props) {

  const { data, isFetching, error } = useQuery<PlayerType[]>("Get Team players", async () => {
    const result = await axios.get(`https://api.sofascore.app/api/v1/team/${ id }/players`);
    return result?.data?.players;
  })

  if(isFetching) return <PlayerName>loading...</PlayerName>
  if(error) return <ErrorHandler message='can not fetch team players' />

  return (
    <PlayersWrapper>
      {
        data?.map((player) => (
          <Player key={ player?.player.id } onPress={ () => console.log("Player Clicked") }>
            <LeftSection>  
              <Avatar source={{ uri: `https://api.sofascore.app/api/v1/player/${ player.player.id }/image` }}></Avatar>
              <CentreSection>
                  <PlayerName>{ player?.player.name }</PlayerName>
                  <TeamName>{ player?.player.team?.name }</TeamName>
              </CentreSection>
            </LeftSection>
            <RightSection>
                <ShirtNumber>{ player?.player.jerseyNumber }</ShirtNumber>
            </RightSection>
          </Player>
        ))
      }
     
      <Spacer />
    </PlayersWrapper>
  )
}