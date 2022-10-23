import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { COLOR } from '../../../../../assets/color'
import { BackIcon, Header, HeaderTitle, PlayerDetailsWrapper } from './styles/Styles'
import Ionicons from "react-native-vector-icons/Ionicons";

export default function PlayerDetails() {

  const navigation: any = useNavigation()

  return (
    <PlayerDetailsWrapper>
      <Header>
        <BackIcon onPress={ () => navigation.goBack() }>
          <Ionicons name="chevron-back-circle-sharp" size={ 35 } color={ COLOR.main } />
        </BackIcon>
        <HeaderTitle>Ossmane Dembele</HeaderTitle>
      </Header>
    </PlayerDetailsWrapper>
  ) 
}