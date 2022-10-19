import { ScrollView, View } from "react-native"
import styled from "styled-components"
import { MainText } from "../../../../../../../../../assets/text/Text"

export const StatisticsWrapper = styled(ScrollView)`

`

export const StatisticsItem = styled(View)`
    flex-direction: row;
    justify-content: space-between;
    margin: 10px 0;
    padding: 0 10px;
`

export const Value = styled(MainText)`
    font-size: 18px;
`  

export const Label = styled(MainText)`
    font-size: 20px;
`