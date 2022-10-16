import { Image, TouchableOpacity, View } from "react-native";
import styled from "styled-components";
import { COLOR } from "../../../assets/color";

export const HeaderWrapper = styled(View)`
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
    padding: 10px 0;
    background-color: ${ COLOR.background };
`

export const Logo = styled(Image)`
    width: 200px;
    height: 40px;
`

export const GoBack = styled(TouchableOpacity)`
    position: absolute;
    left: 10px;
`