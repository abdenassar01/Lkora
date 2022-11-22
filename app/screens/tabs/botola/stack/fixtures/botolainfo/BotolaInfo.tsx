import { useNavigation } from '@react-navigation/native'
import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'
import { UniqueTournomant } from '../../../../../../../types/uniqueTournomant'
import { BotolaColorsLine, BotolaInfoWrapper, Card, HelperText, Label, LeftLine, Team, TeamLogo, TeamName, TeamPressable } from './styles/Styles'

export default function BotolaInfo() {

    const { data, isLoading, error } = useQuery<UniqueTournomant>("get Botola Infos", async () => {
        const result = await axios.get(`https://api.sofascore.com/api/v1/unique-tournament/937`)
        return result.data.uniqueTournament;
    })

    const navigation: any = useNavigation();

    if(isLoading) return <Label>loading...</Label>
    if(error) return <Label>error</Label>

  return (
    <>
        <BotolaInfoWrapper>
            <Card>
                <TeamPressable onPress={ () => navigation.navigate("Team", { id: data?.titleHolder.id }) }>
                    <Team>
                        <TeamLogo source={{ uri: `https://api.sofascore.app/api/v1/team/${ data?.titleHolder.id }/image` }}></TeamLogo>
                        <TeamName>{ data?.titleHolder?.name }</TeamName>
                    </Team>
                </TeamPressable>
                <Label>Title Holder</Label>
                <HelperText>last season</HelperText>
            </Card>
            <Card>
                <TeamPressable onPress={ () => navigation.navigate("Team", { id: data?.mostTitlesTeams[0].id }) }>
                    <Team>
                        <TeamLogo source={{ uri: `https://api.sofascore.app/api/v1/team/${ data?.mostTitlesTeams[0].id }/image` }}></TeamLogo>
                        <TeamName>{ data?.titleHolder?.name }</TeamName>
                    </Team>
                </TeamPressable>
                <Label>Most Titled</Label>
                <HelperText>{ data?.mostTitles + " Times" }</HelperText>
            </Card>
        </BotolaInfoWrapper>
        <BotolaColorsLine style={{ backgroundColor: data?.secondaryColorHex }}>
            <LeftLine  style={{ backgroundColor: data?.primaryColorHex }}></LeftLine>
        </BotolaColorsLine>
    </>
  )
}