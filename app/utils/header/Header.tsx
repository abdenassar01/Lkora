import { HeaderWrapper, Logo } from "./styles/Styles";

export default function Header() {
  return (
    <HeaderWrapper>
        <Logo source={ require("../../assets/logo.png") }/>
    </HeaderWrapper>
  )
}