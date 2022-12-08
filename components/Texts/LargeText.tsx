import React, {FunctionComponent} from 'react'
import styled from "styled-components/native"

//colors
import { Colors } from "../colors";

const StyledText = styled.Text`
  font-size: 37px;
  color: ${Colors.white};
  text-align: left;
  font-family: Lato-Bold;
`;

//types
import { TextProps } from './types';

const LargeText: FunctionComponent<TextProps> = (props) => {
  return <StyledText style={props.textStyles}>{props.children}</StyledText>
}

export default LargeText