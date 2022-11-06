
import axios from 'axios';
import { useQuery } from 'react-query';
import { BotolaFixWrapper, Spacer, StyledText } from './styles/Styles';

export default function Fixtures() {

  const { data, isLoading, error } = useQuery("fetch botola fixtures", async () => {
    const result = await axios.get(`https://api.sofascore.com/api/v1/unique-tournament/937/season/45552/events/next/0`);
    console.log(result?.data)
  })

  if(isLoading) return <StyledText>loading...</StyledText>
  if(error) return <StyledText>error occured. Check your network</StyledText>

  return (
    <BotolaFixWrapper>
      {
        
      }
      <Spacer />
    </BotolaFixWrapper>
  );
}
