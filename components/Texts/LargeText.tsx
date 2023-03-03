import React, {FunctionComponent} from 'react'
import styled from "styled-components/native"

//custom components
import { Colors } from "../colors";

//types
import { TextProps } from './types';

const StyledText = styled.Text`
  font-size: 37px;
  color: ${Colors.white};
  text-align: left;
  font-family: Lato-Bold;
`;

const LargeText: FunctionComponent<TextProps> = (props) => {
  return <StyledText style={props.textStyles}>{props.children}</StyledText>
}

export default LargeText