import Card from '../../../../utils/card/Card';
import Header from '../../../../utils/header/Header';
import Live from './live/Live';
import { BottomSpacer, Heading,  MainScreenWrapper, MatchesWrapper, Section, Spacer } from "./styles/Styles";

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
          <MatchesWrapper>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Spacer />
          </MatchesWrapper>
        </Section>
      </MainScreenWrapper>
      <BottomSpacer />
    </>
  )
}