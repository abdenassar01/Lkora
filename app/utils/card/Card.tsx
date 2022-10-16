import { useNavigation } from "@react-navigation/native";
import { Avatar, CardWrapper, CardWrapperLink, Date, FixtureTime, Name, Team, Time } from "./styles/Styles";

export default function Card() {

  const navigation: any = useNavigation();

  return (
    <CardWrapperLink onPress={ () => navigation.navigate("EvantDetails") }>
      <CardWrapper style={{ elevation: 3 }}>
        <Team>
            <Name>Raja CA</Name>
            <Avatar source={{ uri: "https://api.sofascore.app/api/v1/team/41757/image" }}></Avatar>
        </Team>        
        <FixtureTime>
            <Time>06:30</Time>
            <Date>30 Oct</Date>
        </FixtureTime>
        <Team>
            <Avatar source={{ uri: "https://api.sofascore.app/api/v1/team/1/image" }}></Avatar>
            <Name>Raja CA</Name>
        </Team>
      </CardWrapper>
    </CardWrapperLink>
  )
}