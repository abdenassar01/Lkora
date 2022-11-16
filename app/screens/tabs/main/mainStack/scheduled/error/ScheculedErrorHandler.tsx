import { ButtonText, ErrorText, RefrechButton, ScheduledErrorWrapper } from './styles/Styles'

type Props = {
  message: string,
  refetch?: () => void
}

export default function ScheculedErrorHandler({ message, refetch }: Props) {
  return (
    <ScheduledErrorWrapper>
      <ErrorText>{ message }</ErrorText>
      <RefrechButton onPress={ refetch }>
        <ButtonText>refrech</ButtonText>
      </RefrechButton>
    </ScheduledErrorWrapper>
  )
}