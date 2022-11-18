import { Image, TouchableOpacity, View } from "react-native";
import styled from "styled-components";
import { COLOR } from "../../../assets/color";
import { MainText } from "../../../assets/text/Text";

export const HeaderBackground = styled(View)`
    background-color: ${ COLOR.background };
`

export const HeaderWrapper = styled(View)`
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    padding: 5px;
    background-color: ${ COLOR.text };
    margin: 10px;
    border-radius: 5px;
    elevation: 5;
`

export const Logo = styled(Image)`
    width: 200px;
    height: 40px;
`

export const GoBack = styled(TouchableOpacity)`
    position: absolute;
    left: 10px;
`

export const TournamentTitle = styled(MainText)`
    font-size: 22px;
    font-weight: 600;
    color: ${ COLOR.main };
`

export const Heading = styled(MainText)`
    font-size: 22px;
    font-weight: 600;
    color: ${ COLOR.main };
    padding-left: 10px;
`