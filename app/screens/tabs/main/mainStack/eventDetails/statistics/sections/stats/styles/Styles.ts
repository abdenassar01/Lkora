import { ScrollView, View } from "react-native"
import styled from "styled-components"
import { COLOR } from "../../../../../../../../../assets/color"
import { MainText } from "../../../../../../../../../assets/text/Text"

export const StatisticsWrapper = styled(ScrollView)`

`

export const StatisticsItem = styled(View)`
    flex-direction: row;
    justify-content: space-between;
    margin: 10px 0;
    padding: 0 10px;
    width: 100%;
`

export const Value = styled(MainText)`
    font-size: 16px;
`  

export const Label = styled(MainText)`
    font-size: 16px;
`

export const Period = styled(View)`
    align-items: center;
`

export const Heading = styled(MainText)`
    text-align: center;
    color: ${ COLOR.main };
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
    color: ${ COLOR.main };
    text-align: center;
`

export const Goupe = styled(View)`
    width: 100%;
`