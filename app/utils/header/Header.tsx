import { HeaderBackground, HeaderWrapper, Heading, ThemeLabel, ThemeToggle } from "./styles/Styles";
import Icon from "react-native-vector-icons/Ionicons";
import { useTheme } from "styled-components";
import { dark } from "../../assets/theme";

type Props = {
  onThemeToggle: () => void
}

export default function Header({ onThemeToggle }: Props) {

  const theme = useTheme();

  return (
    <HeaderBackground>  
      <HeaderWrapper>
          <Heading>Lkora</Heading>
          <ThemeToggle onPress={ onThemeToggle }>
            <ThemeLabel>{ theme === dark ? "Dark" : "Light" }</ThemeLabel>
            <Icon name="football" size={ 30 } color={ dark.main }  />
          </ThemeToggle>
      </HeaderWrapper>
    </HeaderBackground>
  )
}