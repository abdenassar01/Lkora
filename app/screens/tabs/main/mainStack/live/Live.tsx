import { useQuery } from "@tanstack/react-query";
import { LiveSlider } from "../styles/Styles";
import LiveCard from "./card/LiveCard";

export default function Live() {

  const { data, isFetching, error } = useQuery(["fetch live events"], async () => {

  })

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