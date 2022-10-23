import { Player, Left, PlayerAvatar, PlayerListWrapper, PlayerName, PressablePlayer, Rating, TeamName, RatingWrapper, Heading } from './styles/Style'

export default function PlayersList() {
  return (
    <PlayerListWrapper >
      <Heading>Top Players Of The Week</Heading>

      {/*  player */}
      <PressablePlayer>
        <Player style={{ elevation: 5 }}>
          <Left>
            <PlayerAvatar source={{ uri: `https://api.sofascore.app/api/v1/player/100386/image` }}></PlayerAvatar>
            <PlayerName>Jadon Sancho</PlayerName>
          </Left>
          <TeamName>Liverpool</TeamName>
          <RatingWrapper>
            <Rating>6.2</Rating>
          </RatingWrapper>
        </Player>
      </PressablePlayer>

      {/*  */}
      <PressablePlayer>
        <Player style={{ elevation: 5 }}>
          <Left>
            <PlayerAvatar source={{ uri: `https://api.sofascore.app/api/v1/player/100386/image` }}></PlayerAvatar>
            <PlayerName>Jadon Sancho</PlayerName>
          </Left>
          <TeamName>Liverpool</TeamName>
          <RatingWrapper>
            <Rating>6.2</Rating>
          </RatingWrapper>
        </Player>
      </PressablePlayer>
    </PlayerListWrapper>
  )
}