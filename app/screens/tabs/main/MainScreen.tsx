import { Text } from 'react-native';
import LiveCard from './live/LiveCard';
import { Heading, LiveSlider, MainScreenWrapper, Section } from "./styles/Styles";

export default function MainScreen() {
  return (
    <MainScreenWrapper>
      <Section>
        <Heading>Live Match</Heading>
        <LiveSlider horizontal>
          <LiveCard />
        </LiveSlider>
      </Section>
    </MainScreenWrapper>
  )
}