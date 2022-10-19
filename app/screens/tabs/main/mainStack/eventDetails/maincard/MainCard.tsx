import { Away, CardWrapper, HelperText, Home, Line, MatchStatusWrapper, Score, ScoreWrapper, StaduimTitle, Status, Team, TeamLogo, TeamTitle } from './styles/styles'

export default function MainCard() {
    
  return (
    <CardWrapper style={{ elevation: 10 }}>
      <StaduimTitle>St James' Park</StaduimTitle>
      <Line />
      <ScoreWrapper>
        <Home>
            <Team>
                <TeamTitle>Man City</TeamTitle>
                <TeamLogo source={{ uri: "https://api.sofascore.app/api/v1/team/116/image" }} />
                <HelperText>Home</HelperText>
            </Team>
        </Home>
        <MatchStatusWrapper>
            <Score> 2 : 1 </Score>
            <Status>finished</Status>
        </MatchStatusWrapper>
        <Away>
            <Team>
                <TeamTitle>Wolves</TeamTitle>
                <TeamLogo source={{ uri: "https://api.sofascore.app/api/v1/team/116/image" }} />
                <HelperText>Away</HelperText>
            </Team>
        </Away>
      </ScoreWrapper>
    </CardWrapper>
  )
}