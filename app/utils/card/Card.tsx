import { useNavigation } from "@react-navigation/native";
import { Event } from "../../../types/events";
import { Avatar, CardWrapper, CardWrapperLink, DateCmp, FinishedMatchStatus, FixtureTime, Name, NameFlipped, Score, Status, Team, Time } from "./styles/Styles";

type Props = {
  event: Event
}

export default function Card({ event }: Props) {

  const navigation: any = useNavigation();

  function timeConverter(timestamp: number){
    const a = new Date(timestamp * 1000);
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    const month = months[a.getMonth()];
    const day = a.getDate();
    const hour = String(a.getHours()).padStart(2, "0");
    const min = String(a.getMinutes()).padStart(2, "0");
    
    const date =  day + " " + month;
    const time = hour + ":" + min;
    
    return { date, time };
  }

  return (
    <CardWrapperLink onPress={ () => navigation.navigate("EvantDetails") } activeOpacity={0.99}>
      <CardWrapper style={{ elevation: 3 }}>
        <Team>
            <Name>{ event?.homeTeam?.shortName }</Name>
            <Avatar source={{ uri: `https://api.sofascore.app/api/v1/team/${ event?.homeTeam?.id }/image` }}></Avatar>
        </Team>        
          {
            event?.status.description === "Ended" ? 
              <FinishedMatchStatus>
                <Score>{ event?.homeScore.current } : { event?.awayScore.current }</Score>
                <Status>{ event?.status.description }</Status>
              </FinishedMatchStatus>
                :
              <FixtureTime>
                <Time>{ timeConverter(event?.startTimestamp).time }</Time>
                <DateCmp>{ timeConverter(event?.startTimestamp).date }</DateCmp>
              </FixtureTime>
          }   
        <Team>
            <Avatar source={{ uri: `https://api.sofascore.app/api/v1/team/${ event?.awayTeam?.id }/image` }}></Avatar>
            <NameFlipped>{ event?.awayTeam?.shortName }</NameFlipped>
        </Team>
      </CardWrapper>
    </CardWrapperLink>
  )
}