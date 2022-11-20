import { ErrorImage, ErrorText, Wrapper } from "./styles/Styles";

type Props = {
    message: string
}

export default function PlayerListErrorHandler({ message }: Props) {
  return (
    <Wrapper>
       <ErrorImage source={require("../../../../../../assets/player.png")} />
       <ErrorText>{ message }</ErrorText>
    </Wrapper>
  )
}