import Card from '../../../../utils/card/Card';
import Header from '../../../../utils/header/Header';
import Live from './live/Live';
import Scheduled from './scheduled/Scheduled';
import { Heading,  MainScreenWrapper, Section } from "./styles/Styles";

export default function MainScreen() {
  return (
    <>
      <Header />
      <MainScreenWrapper>
        <Section>
          <Heading>Live Match</Heading>
          <Live />
        </Section>
        <Section>
          <Heading>Matches</Heading>
          <Scheduled />
        </Section>
      </MainScreenWrapper>
    </>
  )
}