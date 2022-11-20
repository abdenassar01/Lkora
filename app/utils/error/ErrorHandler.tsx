import { ErrorImage, ErrorText, Wrapper } from "./styles/Styles";

type Props = {
    message: string
}

export default function ErrorHandler({ message }: Props) {
  return (
    <Wrapper>
       <ErrorImage source={require("../../assets/player.png")} />
       <ErrorText>{ message }</ErrorText>
    </Wrapper>
  )
}