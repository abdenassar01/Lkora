import { Image, Text, TouchableHighlight, View } from "react-native";
import styled from "styled-components";
import { COLOR } from "../../../assets/color";
import { MainText } from "../../../assets/text/Text";

export const CardWrapperLink = styled(TouchableHighlight)`

`

export const CardWrapper = styled(View)`
    padding: 10px 20px;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    margin: 5px 5px;
    border-radius: 10px;
    background-color: ${ COLOR.text };
`

export const Team = styled(View)`
    flex-direction: row;
    align-items: center;
    padding: 0 20px;
`

export const Name = styled(MainText)`
    padding: 0 10px;
    font-weight: 500;
    font-size: 16px;
`

export const Avatar = styled(Image)`
    width: 35px;
    height: 35px;
`

export const FixtureTime = styled(View)`
    align-items: center;
`

export const Time = styled(MainText)`
    font-weight: bold;
    font-size: 16px;
    color: orange;
`

export const Date = styled(MainText)`
    font-size: 12px;
    color: ${ COLOR.helperText };
`