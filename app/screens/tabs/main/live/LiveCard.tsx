import { Avatar, GameTitle, HelperText, LeagueTitle, LiveCardWrapper, LiveCardWrapperLink, MatchInfo, MatchScore, Score, Team, Time, Title } from './styles/Styles'

export default function LiveCard() {
  return (
    <LiveCardWrapperLink>
      <LiveCardWrapper>
        <LeagueTitle>Premier League</LeagueTitle>
        <GameTitle>Week 10</GameTitle>
        <MatchInfo>
            <Team>
                <Avatar source={{ uri: "https://api.sofascore.app/api/v1/team/41757/image"}}></Avatar>
                <Title>Raja Ma</Title>
                <HelperText>Home</HelperText>
            </Team>
            <Score>
                <MatchScore>3 : 2</MatchScore>
                <Time>86'</Time>
            </Score>
            <Team>
                <Avatar source={{ uri: "https://api.sofascore.app/api/v1/team/41757/image"}}></Avatar>
                <Title>Raja Ma</Title>
                <HelperText>Home</HelperText>
            </Team>
        </MatchInfo>
      </LiveCardWrapper>
    </LiveCardWrapperLink>
  )
}