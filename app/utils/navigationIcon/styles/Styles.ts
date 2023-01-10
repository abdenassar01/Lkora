import { Text, View } from "react-native";
import styled from "styled-components";
import { MainText } from "../../../assets/text/Text";

export const IconWrapper = styled(View)`
    justify-content: center;
    align-items: center;
    position: absolute;
    border-radius: 50px;
    width: 70px;
`

export const Label = styled(MainText)`
    font-size: 12px
`