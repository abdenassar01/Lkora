import { View, Text } from 'react-native'
import React from 'react'
import { IncidentWrapper } from "./styles/Styles";
import { useQuery } from "react-query";
import axios from "axios";
import SkeltonStatisticsLoader from "../../loader/SkeltonStatisticsLoader";
import MatchDetailSectionError from "../../error/MatchDetailSectionError";

type Props = {
    id: number
}

export default function Incidents({ id }: Props) {

    const { data, isFetching, error } = useQuery<string>("match incidents", async () => {
        const response = await axios.get(`https://api.sofascore.com/api/v1/event/${ id }/incidents`)
        return response.data;
    })

    if(isFetching) return <SkeltonStatisticsLoader />
    if(error) return <MatchDetailSectionError message='incidents is not available for this event'  />

  return (
    <IncidentWrapper>
      <Text>Incidents</Text>
    </IncidentWrapper>
  )
}