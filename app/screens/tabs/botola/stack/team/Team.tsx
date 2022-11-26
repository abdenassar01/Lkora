import WithGoBackHeader from '../../../../../utils/header/withgoback/WithGoBackHeader'
import { Avatar, Card, CardRightSide, Heading, Spacer, StaduimImage, TeamWrapper, Title, TournomantLogo } from './styles/Styles'
import { useQuery } from 'react-query'
import ErrorHandler from '../../../../../utils/error/ErrorHandler'
import axios from 'axios'
import { useRoute } from '@react-navigation/native'
import TeamType from '../../../../../../types/team'
import PlayerList from './playerlist/PlayerList'

export default function Team() {

    const route: any = useRoute();

    const { data, isFetching, error } = useQuery<TeamType>("Get Team Details", async () => {
        const result = await axios.get(`https://api.sofascore.app/api/v1/team/${ route?.params?.id }`);
        return result?.data?.team;
    })

    if(isFetching) return <TeamWrapper><Heading>loading...</Heading></TeamWrapper>
    if(error) return <ErrorHandler message='Network Error. Please check your network status and try again.' />
    
  return (
    <TeamWrapper>
        <WithGoBackHeader tournament='Arsonal'/>
        <Card>
            <Avatar source={{ uri: `https://api.sofascore.app/api/v1/team/${ data?.id }/image` }}></Avatar>
            <CardRightSide>
                <Heading>{ data?.name }</Heading>
                <Heading>{ data?.tournament?.uniqueTournament.name }</Heading>
                <Heading>{ data && new Date(data?.foundationDateTimestamp * 1000).getFullYear() }</Heading>
            </CardRightSide>
            <TournomantLogo source={{ uri: `https://api.sofascore.app/api/v1/unique-tournament/${ data?.tournament?.uniqueTournament.id }/image` }}></TournomantLogo>
        </Card>
        <Title>Manager</Title>
        <Card>
            <Avatar source={{ uri: `https://api.sofascore.app/api/v1/manager/${ data?.manager?.id }/image` }}></Avatar>
            <CardRightSide>
                <Heading style={{ fontSize: 22 }}>{ data?.manager?.name }</Heading>
                <Heading>{ data?.manager?.country.name }</Heading>
            </CardRightSide>
        </Card>
        <Title>Staduim</Title>
        <Card>
            <Spacer />
            <CardRightSide>
                <Heading>{ data?.venue?.stadium.name ?? "No Staduim" }</Heading>
                <Heading>{ data?.venue?.stadium.capacity }</Heading>
                <Heading>{ data?.venue?.city.name }</Heading>
            </CardRightSide>
            <StaduimImage source={{ uri: `https://i.imgur.com/tMBDNIu.jpg` }}></StaduimImage>
            <Spacer />
        </Card>
        <Title>Players List</Title>
        <PlayerList id={ data?.id } />
    </TeamWrapper>
  )
}