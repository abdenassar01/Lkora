import axios from 'axios';
import { useQuery } from 'react-query';
import { StatsType } from '../../../../../../../../../types/stats';
import { Goupe, GroupeName, Heading, Label, Period, StatisticsItem, StatisticsWrapper, Value } from './styles/Styles';

type Props = {
    id: number
}

export default function Stats({ id }: Props) {

    const { data, isLoading, error } = useQuery("match stats", async () => {
        const response = await axios.get(`https://api.sofascore.com/api/v1/event/10686588/statistics`)
        const data: StatsType[] = response.data?.statistics
        return data
    })

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
                                            <Value>{ statsItem.away }</Value>
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