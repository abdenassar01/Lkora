import { ScrollView, View } from "react-native"
import styled from "styled-components"
import { MainText } from "../../../../../../../../../assets/text/Text"

export const StatisticsWrapper = styled(ScrollView)`

`

export const StatisticsItem = styled(View)`
    flex-direction: row;
    justify-content: center;
    margin: 10px 0;
    padding: 0 10px;
    width: 100%;
`

export const Value = styled(MainText)`
    font-size: 16px;
    width: 80px;
    text-align: left;
    color: ${ props => props.theme.textInverted };
`  

export const ValueFlipped = styled(Value)`
    text-align: right;
`

export const Label = styled(MainText)`
    font-size: 16px;
    text-align: center;
    width: 50%;
    color: ${ props => props.theme.textInverted };
`

export const Period = styled(View)`
    align-items: center;
`

export const Heading = styled(MainText)`
    text-align: center;
    color: ${ props => props.theme.main };
    font-size: 16px;
    font-weight: 600;
    border-bottom-color: purple;
    border-bottom-width: 2px;
    border-bottom-style: solid;
    margin-bottom: 10px;
    width: 50%;
` 

export const GroupeName = styled(MainText)`
    font-size: 14px;
    color: ${ props => props.theme.main };
    text-align: center;
`

export const Goupe = styled(View)`
    width: 100%;
`