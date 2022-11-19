import { HeaderBackground, HeaderWrapper, Heading } from "./styles/Styles";
import Icon from "react-native-vector-icons/Ionicons";
import { COLOR } from "../../assets/color";

export default function Header() {
  return (
    <HeaderBackground>  
      <HeaderWrapper>
          <Heading>Lkora</Heading>
          <Icon name="football" size={ 30 } color={ COLOR.main }  />
      </HeaderWrapper>
    </HeaderBackground>
  )
}