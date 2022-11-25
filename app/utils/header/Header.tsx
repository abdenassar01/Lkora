import { HeaderBackground, HeaderWrapper, Heading } from "./styles/Styles";
import Icon from "react-native-vector-icons/Ionicons";
import { COLOR } from "../../assets/color";
import { Pressable } from "react-native";
import { useTheme } from "styled-components";

type Props = {
  onThemeToggle: () => void
}

export default function Header({ onThemeToggle }: Props) {

  return (
    <HeaderBackground>  
      <HeaderWrapper>
          <Heading>Lkora</Heading>
          <Pressable onPress={ onThemeToggle }>
            <Icon name="football" size={ 30 } color={ COLOR.main }  />
          </Pressable>
      </HeaderWrapper>
    </HeaderBackground>
  )
}