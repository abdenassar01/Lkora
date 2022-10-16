import React from 'react'
import WithGoBackHeader from '../../../../../utils/header/withgoback/WithGoBackHeader'
import { EventDetailsWrappe } from './styles/Styles'
import MainCard from './maincard/MainCard'

export default function EventDetails() {
  return (
    <EventDetailsWrappe>
      <WithGoBackHeader tournament='Premier League' />
      <MainCard />
    </EventDetailsWrappe>
  )
}