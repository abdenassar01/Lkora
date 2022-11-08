
import axios from 'axios';
import { useQuery } from 'react-query';
import { Event } from '../../../../../../types/events';
import Card from '../../../../../utils/card/Card';
import { BotolaFixWrapper, Heading, HeroTitle, Spacer, StyledText } from './styles/Styles';

export default function Fixtures() {

  const { data, isLoading, error } = useQuery("fetch botola fixtures", async () => {
    const result = await axios.get(`https://api.sofascore.com/api/v1/unique-tournament/937/season/45552/events/next/0`);
    return result?.data;
  })

  if(isLoading) return <StyledText>loading...</StyledText>
  if(error) return <StyledText>error occured. Check your network</StyledText>

  return (
    <BotolaFixWrapper>
      <HeroTitle>Moroccain Botola</HeroTitle>
      <Heading>Fixtures</Heading>
      {
        data?.events.map((event: Event) => <Card event={ event } key={ event.id } />)
      }
      <Spacer />
    </BotolaFixWrapper>
  );
}
