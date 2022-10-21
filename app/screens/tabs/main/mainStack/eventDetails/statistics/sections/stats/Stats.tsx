import { Label, StatisticsItem, StatisticsWrapper, Value } from './styles/Styles';

type Props = {
    id: number
}

export default function Stats({ id }: Props) {
  return (
    <StatisticsWrapper>
        <StatisticsItem>
            <Value>35%</Value>
            <Label>Possition</Label>
            <Value>65%</Value>
        </StatisticsItem>
        <StatisticsItem>
            <Value>35%</Value>
            <Label>Possition</Label>
            <Value>65%</Value>
        </StatisticsItem>
        <StatisticsItem>
            <Value>35%</Value>
            <Label>Possition</Label>
            <Value>65%</Value>
        </StatisticsItem>
        <StatisticsItem>
            <Value>35%</Value>
            <Label>Possition</Label>
            <Value>65%</Value>
        </StatisticsItem>
        <StatisticsItem>
            <Value>35%</Value>
            <Label>Possition</Label>
            <Value>65%</Value>
        </StatisticsItem>
    </StatisticsWrapper>
  )
}