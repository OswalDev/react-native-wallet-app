import React, { FunctionComponent } from 'react'
import styled from "styled-components/native"

// custom components
import { Colors } from "../components/colors";
import { Container } from "../components/shared";
import AmountSection from "../components/Balance/AmountSection";
import ButtonSection from "../components/Balance/ButtonSection";

//types
import { RootStackParamList } from '../navigators/RootStack';
import { StackScreenProps } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import BalanceCardSection from '../components/Balance/BalanceCardSection';

type Props = StackScreenProps<RootStackParamList, "Balance">;

const BalanceContainer = styled(Container)`
background-color: ${Colors.graylight};
width: 100%;
padding: 25px;
flex: 1;
`;

const Balance: FunctionComponent<Props> = ({ route }) => {
  return (
    <BalanceContainer>
        <StatusBar style='dark' />
        <AmountSection balance={route?.params?.balance} />
        <BalanceCardSection {...route?.params}/>
        <ButtonSection />
    </BalanceContainer>
  )
}

export default Balance;