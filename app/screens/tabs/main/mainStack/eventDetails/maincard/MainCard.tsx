import { Away, CardWrapper, Home, MatchStatusWrapper, Score, ScoreWrapper, StaduimTitle, Status, Team, TeamLogo, TeamTitle } from './styles/styles'

export default function MainCard() {
    
  return (
    <CardWrapper>
      <StaduimTitle>Infield</StaduimTitle>
      <ScoreWrapper>
        <Home>
            <Team>
                <TeamTitle>Man City</TeamTitle>
                <TeamLogo source={{ uri: " https://api.sofascore.app/api/v1/team/116/image" }} />
            </Team>
        </Home>
        <MatchStatusWrapper>
            <Score> 2 : 1 </Score>
            <Status>finished</Status>
        </MatchStatusWrapper>
        <Away>
            <Team>
                <TeamTitle>Man City</TeamTitle>
                <TeamLogo source={{ uri: " https://api.sofascore.app/api/v1/team/116/image" }} />
            </Team>
        </Away>
      </ScoreWrapper>
    </CardWrapper>
  )
}