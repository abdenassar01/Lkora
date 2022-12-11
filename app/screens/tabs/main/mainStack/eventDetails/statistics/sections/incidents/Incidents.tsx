import React from 'react'
import { HeadingText, HelperText, IncidentItem, IncidentItemWrapper, IncidentLogo, IncidentParentElement, IncidentPeriod, IncidentWrapper, PeroidText, ScoreText, TextWrapper, Time, TimeText } from "./styles/Styles";
import { useQuery } from "react-query";
import axios from "axios";
import SkeltonStatisticsLoader from "../../loader/SkeltonStatisticsLoader";
import MatchDetailSectionError from "../../error/MatchDetailSectionError";
import { Incident } from "../../../../../../../../../types/Incidents";

type Props = {
    id: number
}

export default function Incidents({ id }: Props) {

    const { data, isFetching, error } = useQuery<Incident[]>("match incidents", async () => {
        const response = await axios.get(`https://api.sofascore.com/api/v1/event/${ id }/incidents`)
        return response.data.incidents;
    })

    if(isFetching) return <SkeltonStatisticsLoader />
    if(error) return <MatchDetailSectionError message='incidents is not available for this event'  />

  return (
    <IncidentWrapper>
        {
            data?.map(incident => (
                <IncidentItemWrapper key={ incident.id }>
                    {
                        (incident.incidentType === "period") ? (
                            <IncidentPeriod>
                                <ScoreText>{ incident.homeScore }</ScoreText>
                                <PeroidText>{ incident.text }</PeroidText>
                                <ScoreText>{ incident.awayScore }</ScoreText>
                            </IncidentPeriod>
                        ) : (
                            <IncidentItem style={{ marginLeft: incident.isHome ? 0 : "40%" }}>
                                {
                                    incident.incidentType === "substitution" ? (
                                        <IncidentParentElement>
                                            <IncidentLogo source={require("../../../../../../../../assets/substitution.png")} />
                                            <TextWrapper>
                                                <HeadingText>{ incident.playerIn?.name }</HeadingText>
                                                <HelperText>{ incident.playerOut?.name }</HelperText>
                                            </TextWrapper>
                                        </IncidentParentElement>
                                    ) : incident.incidentType === "goal" ? (
                                        <IncidentParentElement>
                                            <IncidentLogo source={require("../../../../../../../../assets/goal.png")} />
                                            <TextWrapper>
                                                <HeadingText>{ incident.player?.name }</HeadingText>
                                                <HelperText>{ incident.incidentClass }</HelperText>
                                            </TextWrapper>
                                        </IncidentParentElement>
                                    ) : incident.incidentType === "card" ? (
                                        <IncidentParentElement>
                                            {
                                                incident.incidentClass === "yellow" ? <IncidentLogo source={require("../../../../../../../../assets/yellow.png")} /> : <IncidentLogo source={require("../../../../../../../../assets/red.png")} />
                                            }
                                            <TextWrapper>
                                                <HeadingText>{ incident.playerName }</HeadingText>
                                                <HelperText>{ incident.reason }</HelperText>
                                            </TextWrapper>
                                        </IncidentParentElement>
                                    ) : incident.incidentType === "injuryTime" ? (
                                        <IncidentParentElement>
                                            <IncidentLogo source={require("../../../../../../../../assets/injury.png")} />
                                            <TextWrapper>
                                                <HeadingText>{ "Added Time: " + incident?.length }</HeadingText>
                                            </TextWrapper>
                                        </IncidentParentElement>
                                    ) : (
                                            <IncidentParentElement>
                                                <IncidentLogo source={ incident.incidentType === "varDecision" ? require("../../../../../../../../assets/var.png") : require("../../../../../../../../assets/missed.png") } />
                                                <TextWrapper>
                                                    <HeadingText>{ incident.incidentType === "varDecision" ? "Var Decision" : "Penalty" }</HeadingText>
                                                    <HelperText>{ incident.incidentClass }</HelperText>
                                                </TextWrapper>
                                            </IncidentParentElement>
                                    )
                                }
                                <Time>
                                    <TimeText>{ incident.addedTime ? (incident.time + incident.addedTime) + "\'" : incident.time + "\'" }</TimeText>
                                </Time>
                            </IncidentItem>
                        )
                    }
                </IncidentItemWrapper>
            ))
        }
    </IncidentWrapper>
  )
}