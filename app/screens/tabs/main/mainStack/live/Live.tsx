import { useQuery } from "react-query";
import axios from "axios";
import { Text } from "react-native";
import { LiveSlider } from "../styles/Styles";
import LiveCard from "./card/LiveCard";
import { Event } from "../../../../../../types/events";
import LiveError from "./card/error/LiveError";
import LiveSkiltonLoader from "./card/loader/LiveSkiltonLoader";


export default function Live() {

  const { data, isLoading, error } = useQuery("live matches", async () => {
      const result = await axios.get("https://api.sofascore.com/api/v1/sport/football/events/live");
      return result.data
  })

  if(isLoading) return <LiveSkiltonLoader />
  if(error) return <LiveError message="Network Error, Please chech your network status and try again" />

  const filtred = data?.events?.filter((event: Event) => (event.tournament.priority > 250))

  return (
    <LiveSlider horizontal showsHorizontalScrollIndicator={ false } >
      {
        (filtred.length === 0) ? <LiveError message="No live matches available at the moment check again later" /> : 
        filtred.map(
          (event: Event) => <LiveCard event={ event } key={ event.id } />
        )
      }
    </LiveSlider>
  )
}