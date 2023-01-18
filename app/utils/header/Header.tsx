import { DateElement, DateElementButton, HeaderBackground, HeaderWrapper, Heading, ThemeLabel, ThemeToggle } from "./styles/Styles";
import Icon from "react-native-vector-icons/Ionicons";
import { useTheme } from "styled-components";
import { dark } from "../../assets/theme";
import { Dispatch, SetStateAction, useState } from "react";
import DatePicker from "react-native-date-picker";

type Props = {
  onThemeToggle: () => void,
  setToday: Dispatch<SetStateAction<Date>>, 
  today: Date
}

export default function Header({ onThemeToggle, today, setToday }: Props) {

  const theme = useTheme();
  
  const [ open, setOpen ] = useState(false)

  return (
    <HeaderBackground>  
      <HeaderWrapper>
          <Heading>Lkora</Heading>
          <DateElementButton onPress={ () => setOpen(true) }>
            <DateElement>{`${String(today.getFullYear())}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`}</DateElement>
          </DateElementButton>
          <ThemeToggle onPress={ onThemeToggle }>
            <ThemeLabel>{ theme === dark ? "Dark" : "Light" }</ThemeLabel>
            <Icon name="football" size={ 30 } color={ dark.main }  />
          </ThemeToggle>
      </HeaderWrapper>
      <DatePicker
        modal
        mode="date"
        open={open}
        date={today}
        onConfirm={(date) => {
          setOpen(false)
          setToday(date)
        }}
        onCancel={() => {
          setOpen(false)
        }}
      />
    </HeaderBackground>
  )
}