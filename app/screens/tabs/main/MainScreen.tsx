import LiveCard from './live/LiveCard';
import { Heading, LiveSlider, MainScreenWrapper, Section } from "./styles/Styles";

export default function MainScreen() {
  return (
    <MainScreenWrapper>
      <Section>
        <Heading>Live Match</Heading>
        <LiveSlider horizontal>
          <LiveCard />
          <LiveCard />
          <LiveCard />
          <LiveCard />
          <LiveCard />
        </LiveSlider>
      </Section>
    </MainScreenWrapper>
  )
}