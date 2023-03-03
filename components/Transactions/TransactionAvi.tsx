import React, { FunctionComponent } from 'react'
import styled from 'styled-components/native';
import { View } from "react-native";
import {Ionicons} from "@expo/vector-icons"; //icons

//types
import { TransactionAviProps } from './types'

//custom components
import { Colors } from '../colors';

const  StyledView = styled.View`
height: 45px;
width: 45px;
border-radius: 10px;
justify-content: center;
align-items: center;
`;

const TransactionAvi: FunctionComponent<TransactionAviProps> = (props) => {

  return (
    <StyledView style={{ backgroundColor: props.background }}>
        <Ionicons name={props.icon} size={25} color={Colors.white} />
    </StyledView>

  )
}

export default TransactionAvi;