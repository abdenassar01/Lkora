import { ErrorMessage, ErrorWrapper } from "./styles/Styles"

type Props = {
    message: string
}

export default function MatchDetailSectionError({ message }: Props) {
  return (
    <ErrorWrapper>
      <ErrorMessage>{ message }</ErrorMessage>
    </ErrorWrapper>
  )
}