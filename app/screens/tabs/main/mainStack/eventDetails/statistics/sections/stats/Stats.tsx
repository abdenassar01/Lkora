import axios from 'axios';
import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { StatsType } from '../../../../../../../../../types/stats';
import { Goupe, GroupeName, Heading, Label, Period, StatisticsItem, StatisticsWrapper, Value, ValueFlipped } from './styles/Styles';

type Props = {
    id: number
}

export default function Stats({ id }: Props) {

    const { data, isFetching, error, refetch } = useQuery("match stats", async () => {
        const response = await axios.get(`https://api.sofascore.com/api/v1/event/${ id }/statistics`)
        const data: StatsType[] = response.data?.statistics
        return data
    })

    useEffect(() => {
        refetch()
    },[ id ])

    if(isFetching) <GroupeName>loading...</GroupeName>
    if(error) <GroupeName>error</GroupeName>

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
                                        <StatisticsItem>
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