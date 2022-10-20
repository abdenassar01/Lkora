import { LiveSlider } from "../styles/Styles";
import LiveCard from "./card/LiveCard";

export default function Live() {
  return (
    <LiveSlider horizontal>
      <LiveCard />
      <LiveCard />
      <LiveCard />
      <LiveCard />
      <LiveCard />
    </LiveSlider>
  )
}