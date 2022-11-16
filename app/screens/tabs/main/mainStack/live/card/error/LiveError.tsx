import { LiveCartWrapper, LiveText } from './styles'

type Props = {
    message: string
}

export default function LiveError({ message }: Props) {
  return (
    <LiveCartWrapper>
      <LiveText>{ message }</LiveText>
    </LiveCartWrapper>
  )
}