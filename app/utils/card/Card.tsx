import { useNavigation } from "@react-navigation/native";
import { Event } from "../../../types/events";
import { Avatar, CardWrapper, CardWrapperLink, Date, FixtureTime, Name, NameFlipped, Team, Time } from "./styles/Styles";

type Props = {
  event: Event
}

export default function Card({ event }: Props) {

  const navigation: any = useNavigation();

  return (
    <CardWrapperLink onPress={ () => navigation.navigate("EvantDetails") } activeOpacity={0.99}>
      <CardWrapper style={{ elevation: 3 }}>
        <Team>
            <Name>{ event?.homeTeam?.shortName }</Name>
            <Avatar source={{ uri: `https://api.sofascore.app/api/v1/team/${ event?.homeTeam?.id }/image` }}></Avatar>
        </Team>        
        <FixtureTime>
            <Time>06:30</Time>
            <Date>30 Oct</Date>
        </FixtureTime>
        <Team>
            <Avatar source={{ uri: `https://api.sofascore.app/api/v1/team/${ event?.awayTeam?.id }/image` }}></Avatar>
            <NameFlipped>{ event?.awayTeam?.shortName }</NameFlipped>
        </Team>
      </CardWrapper>
    </CardWrapperLink>
  )
}