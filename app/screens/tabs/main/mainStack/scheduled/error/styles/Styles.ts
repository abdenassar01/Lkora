import { TouchableOpacity, View } from "react-native";
import styled from "styled-components";
import { MainText } from "../../../../../../../assets/text/Text";

export const ScheduledErrorWrapper = styled(View)`
  padding: 10px;
  justify-content: center;
  align-items: center;
  margin: 5px 20px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.text};
  elevation: 5;
`;

export const ErrorText = styled(MainText)`
  color: ${(props) => props.theme.main};
  text-align: center;
`;

export const RefrechButton = styled(TouchableOpacity)`
  margin: 10px;
  padding: 7px 32px;
  background-color: ${(props) => props.theme.main};
  border-radius: 50px;
`;

export const ButtonText = styled(MainText)`
  color: ${(props) => props.theme.text};
`;
