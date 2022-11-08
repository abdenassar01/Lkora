import { ScrollView, View } from "react-native";
import styled from "styled-components";
import { COLOR } from "../../../../../../assets/color";
import { MainText } from "../../../../../../assets/text/Text";

export const BotolaFixWrapper = styled(ScrollView)`
    background-color: ${ COLOR.background };   
`

export const HeroTitle = styled(MainText)`
    font-size: 25px;
    text-align: center;
    padding: 10px 0;
    color: ${ COLOR.main };
`

export const Heading = styled(MainText)`
    font-size: 18px;
    color: purple;
    text-align: center;
    border-bottom-width: 2px;
    border-bottom-color: purple;
    width: 50%;
    margin-left: 25%;
    border-bottom-style: solid;
    margin-bottom: 10px;
`

export const StyledText = styled(MainText)`
    text-align: center;
    color: ${ COLOR.main };
`

export const Spacer = styled(View)`
    height: 60px;
`