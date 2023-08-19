import { View } from "react-native";
import styled from "styled-components";
import { COLOR } from "../../../../../../../../assets/color";
import { MainText } from "../../../../../../../../assets/text/Text";

export const ErrorWrapper = styled(View)`
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 100px;
  background-color: ${(props) => props.theme.text};
`;

export const ErrorMessage = styled(MainText)`
  color: ${(props) => props.theme.main};
  font-size: 16px;
`;
