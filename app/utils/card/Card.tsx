import { Avatar, CardWrapper, CardWrapperLink, Date, FixtureTime, Name, Team, Time } from "./styles/Styles";

export default function Card() {
  return (
    <CardWrapperLink>
      <CardWrapper>
        <Team>
            <Name>Raja CA</Name>
            <Avatar source={{ uri: " https://api.sofascore.app/api/v1/team/1/image" }}></Avatar>
        </Team>        
        <FixtureTime>
            <Time>06:30</Time>
            <Date>30 Oct</Date>
        </FixtureTime>
        <Team>
            <Name>Raja CA</Name>
            <Avatar source={{ uri: " https://api.sofascore.app/api/v1/team/1/image" }}></Avatar>
        </Team>
      </CardWrapper>
    </CardWrapperLink>
  )
}