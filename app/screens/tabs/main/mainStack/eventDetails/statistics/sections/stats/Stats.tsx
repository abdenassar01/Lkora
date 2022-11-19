import axios from 'axios';
import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { StatsType } from '../../../../../../../../../types/stats';
import MatchDetailSectionError from '../../error/MatchDetailSectionError';
import SkeltonStatisticsLoader from '../../loader/SkeltonStatisticsLoader';
import { Goupe, GroupeName, Heading, Label, Period, StatisticsItem, StatisticsWrapper, Value, ValueFlipped } from './styles/Styles';

type Props = {
    id: number
}

export default function Stats({ id }: Props) {

    const { data, isFetching, error, refetch } = useQuery<StatsType[]>("match stats", async () => {
        const response = await axios.get(`https://api.sofascore.com/api/v1/event/${ id }/statistics`)
        return response.data?.statistics
    })

    useEffect(() => {
        refetch()
    },[ id, data ])

    if(isFetching) return <SkeltonStatisticsLoader />
    if(error) return  <MatchDetailSectionError message='statistics is not available for this match' />

    return (
    <StatisticsWrapper>
        {
            data?.map((stat: StatsType) => (
                <Period key={ stat.period } >
                    <Heading>{ stat.period }</Heading>
                    {
                        stat.groups.map((item => (
                            <Goupe key={ item.groupName }>
                                <GroupeName>{ item.groupName }</GroupeName>
                                {
                                    item.statisticsItems.map((statsItem) => (
                                        <StatisticsItem key={ statsItem.name }>
                                            <Value>{ statsItem.home }</Value>
                                            <Label>{ statsItem.name }</Label>
                                            <ValueFlipped>{ statsItem.away }</ValueFlipped>
                                        </StatisticsItem>
                                    ))
                                }
                            </Goupe>
                        )))
                    }
                </Period>
            ))
        }                    
    </StatisticsWrapper>
  )
}