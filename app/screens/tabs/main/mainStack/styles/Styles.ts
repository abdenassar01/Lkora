import { ScrollView, View } from "react-native";
import styled from "styled-components";
import { HeadingText } from "../../../../../assets/text/Text";

export const MainScreenWrapper = styled(ScrollView)`
    padding: 5px;
    background-color: #F7F7F7;
`

export const Section = styled(View)`

`

export const Heading = styled(HeadingText)`
    padding: 10px 0;
    font-weight: bold;
    margin-left: 10px;
    font-size: 20px;
`

export const LiveSlider = styled(ScrollView)`   
    margin-left: 10px;
`

export const MatchesWrapper = styled(ScrollView)`
    
`

export const Spacer = styled(View)`
    height: 10px;
`