import { ErrorText, Wrapper } from "./styles/Styles";

type Props = {
    message: string
}

export default function PlayerListErrorHandler({ message }: Props) {
  return (
    <Wrapper>
       <ErrorText>{ message }</ErrorText>
    </Wrapper>
  )
}