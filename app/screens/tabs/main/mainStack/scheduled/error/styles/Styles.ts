import { TouchableOpacity, View } from "react-native";
import styled from "styled-components";
import { COLOR } from "../../../../../../../assets/color";
import { MainText } from "../../../../../../../assets/text/Text";

export const ScheduledErrorWrapper = styled(View)`
    padding: 10px;
    justify-content: center;
    align-items: center;
    margin: 5px 20px;
    border-radius: 10px;
    background-color: white;
    elevation: 5;
`

export const ErrorText = styled(MainText)`
    color: ${ COLOR.main };
    text-align: center;
`

export const RefrechButton = styled(TouchableOpacity)`
    margin: 10px;
    padding: 7px 32px;
    background-color: ${ COLOR.main };
    border-radius: 50px;
`

export const ButtonText = styled(MainText)`
    color: ${ COLOR.text };
`