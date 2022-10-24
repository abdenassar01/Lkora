import { View, Text } from 'react-native'
import { COLOR } from '../../../assets/color'

export default function Matches() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 20, color: COLOR.main, textAlign: 'center' }}>This screen will be available in the next release🦸🏻‍♀️</Text>
    </View>
  )
}