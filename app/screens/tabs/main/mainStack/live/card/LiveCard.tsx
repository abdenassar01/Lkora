import { useNavigation } from '@react-navigation/native';
import { Event } from '../../../../../../../types/events'
import { Avatar, GameTitle, HelperText, LeagueTitle, LiveCardWrapper, LiveCardWrapperLink, LiveCardWrapperView, MatchInfo, MatchScore, Score, Team, Time, Title } from './styles/Styles'

type Props = {
  event: Event
}

function truncateString(str: any, num: number) {
  if (str.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
}

export default function LiveCard({ event }: Props) {

  const navigation: any = useNavigation();

  return (
    <LiveCardWrapperLink onPress={ () => navigation.navigate("EvantDetails", { id : event?.id }) }>
      <LiveCardWrapperView style={{ elevation: 5 }} >
        <LeagueTitle>{ truncateString(event?.tournament.name, 30) }</LeagueTitle>
        <GameTitle>Week { event.roundInfo?.round }</GameTitle>
        <MatchInfo>
            <Team>
                <Avatar source={{ uri: `https://api.sofascore.app/api/v1/team/${event.homeTeam.id}/image` }}></Avatar>
                <Title>{ truncateString(event?.homeTeam?.shortName, 10) }</Title>
                <HelperText>Home</HelperText>
            </Team>
            <Score>
                <MatchScore>{ event?.homeScore.current } : { event?.awayScore.current }</MatchScore>
                <Time>{ event?.status?.description }</Time>
                {/*  TODO: Time still need to be added  */}
            </Score>
            <Team>
              <Avatar source={{ uri: `https://api.sofascore.app/api/v1/team/${event?.awayTeam.id}/image` }}></Avatar>
              <Title>{ truncateString(event?.awayTeam.shortName, 10) }</Title>
              <HelperText>Away</HelperText>
            </Team>
        </MatchInfo>
      </LiveCardWrapperView>
    </LiveCardWrapperLink>
  )
}