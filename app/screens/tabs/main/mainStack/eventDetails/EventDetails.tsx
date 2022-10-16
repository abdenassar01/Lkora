import { View, Text } from 'react-native'
import React from 'react'
import WithGoBackHeader from '../../../../../utils/header/withgoback/WithGoBackHeader'
import { EventDetailsWrappe } from './styles/Styles'

export default function EventDetails() {
  return (
    <EventDetailsWrappe>
      <WithGoBackHeader tournament='Premier League' />
      <Text>Hello world</Text>
    </EventDetailsWrappe>
  )
}