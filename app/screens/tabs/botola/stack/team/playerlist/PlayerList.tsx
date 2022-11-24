import { Avatar, CentreSection, LeftSection, Player, PlayerName, PlayersWrapper, RightSection, ShirtNumber, Spacer, TeamName } from './styles/Styles'

type Props = {
    id?: number 
}

export default function PlayerList({ id }: Props) {
  return (
    <PlayersWrapper>
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
      <Spacer />
    </PlayersWrapper>
  )
}