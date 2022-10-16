import { View, Text } from 'react-native'
import { IconWrapper } from './styles/Styles'

type Props = {
    focused: boolean,
    label: string
}

export default function NavigationIcon({ focused, label }: Props) {
  return (
    <IconWrapper>
      <Text>NavigationIcon</Text>
    </IconWrapper>
  )
}