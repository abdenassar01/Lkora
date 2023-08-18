import { useNavigation } from "@react-navigation/native";
import { EventDetails } from "../../../../../../../types/eventDetails";
import {
  Away,
  CardWrapper,
  DatePlaceHolder,
  HelperText,
  Home,
  Line,
  MatchStatusWrapper,
  Score,
  ScoreWrapper,
  StaduimTitle,
  Status,
  Team,
  TeamLogo,
  TeamTitle,
  Time,
  TimeWrapper,
} from "./styles/styles";

type Props = {
  event: EventDetails;
};

export default function MainCard({ event }: Props) {
  const navigation: any = useNavigation();

  function timeConverter(timestamp: number) {
    const a = new Date(timestamp * 1000);
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const month = months[a.getMonth()];
    const day = a.getDate();
    const hour = String(a.getHours()).padStart(2, "0");
    const min = String(a.getMinutes()).padStart(2, "0");

    const date = day + " " + month;
    const time = hour + ":" + min;

    return { time, date };
  }

  return (
    <CardWrapper style={{ elevation: 10 }}>
      <StaduimTitle>{event?.venue?.stadium?.name}</StaduimTitle>
      <Line />
      <ScoreWrapper>
        <Home>
          <Team
            onPress={() =>
              navigation.navigate("Team", { id: event?.homeTeam.id })
            }
          >
            <TeamTitle>{event?.homeTeam?.shortName}</TeamTitle>
            <TeamLogo
              source={{
                uri: `https://api.sofascore.app/api/v1/team/${event?.homeTeam.id}/image`,
              }}
            />
            <HelperText>Home</HelperText>
          </Team>
        </Home>
        <MatchStatusWrapper>
          {event?.status.description !== "Not started" ? (
            <Score>
              {event?.homeScore.current + " : " + event?.awayScore.current}
            </Score>
          ) : (
            <TimeWrapper>
              <Time>{timeConverter(event?.startTimestamp).time}</Time>
              <DatePlaceHolder>
                {timeConverter(event?.startTimestamp).date}
              </DatePlaceHolder>
            </TimeWrapper>
          )}
          <Status>{event?.status.description}</Status>
        </MatchStatusWrapper>
        <Away>
          <Team
            onPress={() =>
              navigation.navigate("Team", { id: event?.awayTeam.id })
            }
          >
            <TeamTitle>{event?.awayTeam?.name}</TeamTitle>
            <TeamLogo
              source={{
                uri: `https://api.sofascore.app/api/v1/team/${event?.awayTeam.id}/image`,
              }}
            />
            <HelperText>Away</HelperText>
          </Team>
        </Away>
      </ScoreWrapper>
    </CardWrapper>
  );
}
