import React, {FunctionComponent} from 'react'
import styled from "styled-components/native"

//custom components
import { Colors } from "../colors";

//types
import { TextProps } from './types';

const StyledText = styled.Text`
  font-size: 13px;
  color: ${Colors.gray};
  text-align: left;
  font-family: Lato-Regular;
`;

const SmallText: FunctionComponent<TextProps> = (props) => {
  return <StyledText style={props.textStyles}>{props.children}</StyledText>
}

export default SmallText