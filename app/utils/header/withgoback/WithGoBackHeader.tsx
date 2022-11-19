import { useNavigation } from "@react-navigation/native";
import { GoBack, HeaderWrapper, TournamentTitle } from "../styles/Styles";
import Ionicons from "react-native-vector-icons/Ionicons";
import { COLOR } from "../../../assets/color";

type Props = {
  tournament: string 
}

export default function WithGoBackHeader({ tournament }: Props) {

    const navigation = useNavigation();

  return (
    <HeaderWrapper>
        <GoBack onPress={ () => navigation.goBack() }>
            <Ionicons name="chevron-back-circle-sharp" size={ 35 } color={ COLOR.main } />
        </GoBack>
        <TournamentTitle>
          { tournament ?? "loading..." }
        </TournamentTitle>
    </HeaderWrapper>
  )
}