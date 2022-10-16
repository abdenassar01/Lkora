import { useNavigation } from "@react-navigation/native";
import { GoBack, HeaderWrapper, Logo } from "../styles/Styles";
import Ionicons from "react-native-vector-icons/Ionicons";
import { COLOR } from "../../../assets/color";

export default function WithGoBackHeader() {

    const navigation = useNavigation();

  return (
    <HeaderWrapper>
        <GoBack onPress={ () => navigation.goBack() }>
            <Ionicons name="chevron-back-circle-sharp" size={ 30 } color={ COLOR.main } />
        </GoBack>
        <Logo source={ require("../../../assets/logo.png") }/>
    </HeaderWrapper>
  )
}