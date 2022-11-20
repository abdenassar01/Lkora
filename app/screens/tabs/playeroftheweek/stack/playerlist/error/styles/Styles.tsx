import { Image, View } from "react-native";
import styled from "styled-components";
import { COLOR } from "../../../../../../../assets/color";
import { MainText } from "../../../../../../../assets/text/Text";

export const Wrapper = styled(View)`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: ${ COLOR.text };
`

export const ErrorText = styled(MainText)`
    font-size: 18px;
    text-align: center;
    padding: 20px;
    color: ${ COLOR.main };
`

export const ErrorImage = styled(Image)`
    width: 350px;
    height: 250px;
`