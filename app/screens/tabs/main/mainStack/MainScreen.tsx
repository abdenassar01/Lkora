import { useState } from "react";
import Header from '../../../../utils/header/Header';
import Live from './live/Live';
import Scheduled from './scheduled/Scheduled';
import { Heading,  MainScreenWrapper, Section } from "./styles/Styles";


type Props = {
  onThemeToggle: () => void
}

export default function MainScreen({ onThemeToggle }: Props) {

  const [ today, setToday ] = useState<Date>(new Date());

  return (
    <>
      <Header onThemeToggle={ onThemeToggle } today={ today } setToday={ setToday } />
      <MainScreenWrapper>
        <Section>
          <Heading>Live Match</Heading>
          <Live />
        </Section>
        <Section>
          <Heading>Matches</Heading>
          <Scheduled key={today} today={`${String(today.getFullYear())}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`} />
        </Section>
      </MainScreenWrapper>
    </>
  )
}