import axios from 'axios';
import { useQuery } from 'react-query';
import ErrorHandler from '../../../../../../utils/error/ErrorHandler';
import { Avatar, CentreSection, LeftSection, Player, PlayerName, PlayersWrapper, RightSection, ShirtNumber, Spacer, TeamName } from './styles/Styles'

type Props = {
    id?: number 
}

export default function PlayerList({ id }: Props) {

  const { data, isFetching, error } = useQuery("Get Team Details", async () => {
    const result = await axios.get(`https://api.sofascore.app/api/v1/team/${ id }/players`);
    return result?.data?.players;
  })

  if(isFetching) return <PlayerName>loading...</PlayerName>
  if(error) return <ErrorHandler message='can not fetch team players' />

  return (
    <PlayersWrapper>
      {
        data?.map((player: any) => (
          <Player onPress={ () => console.log("Player Clicked") }>
            <LeftSection>  
              <Avatar source={{ uri: "https://api.sofascore.app/api/v1/player/794839/image" }}></Avatar>
              <CentreSection>
                  <PlayerName>Neymar Js</PlayerName>
                  <TeamName>Paris sant germain</TeamName>
              </CentreSection>
            </LeftSection>
            <RightSection>
                <ShirtNumber>10</ShirtNumber>
            </RightSection>
          </Player>
        ))
      }
     
      <Spacer />
    </PlayersWrapper>
  )
}