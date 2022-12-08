import React, {FunctionComponent} from 'react'
import styled from "styled-components/native"

//colors
import { Colors } from "../colors";

const StyledText = styled.Text`
  font-size: 13px;
  color: ${Colors.gray};
  text-align: left;
  font-family: Lato-Regular;
`;

//types
import { TextProps } from './types';

const SmallText: FunctionComponent<TextProps> = (props) => {
  return <StyledText style={props.textStyles}>{props.children}</StyledText>
}

export default SmallText