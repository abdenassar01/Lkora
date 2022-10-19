import { IconWrapper, Label } from './styles/Styles'
import Icon from 'react-native-vector-icons/Ionicons';

type Props = {
    focused: boolean,
    label: string,
    icon: string
}

export default function NavigationIcon({ focused, label, icon }: Props) {
  return (
    <IconWrapper>
      <Icon name={ icon } size={20} color={ focused ? "#FF2782" : "#748c94" } />
      <Label style={{ color: focused ? "#FF2782" : "#748c94" }}>{ focused ? "⦿" : label }</Label>
    </IconWrapper>
  )
}