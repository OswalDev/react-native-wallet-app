import React, { FunctionComponent } from "react";
import { StatusBar } from "expo-status-bar";
import styled from 'styled-components/native';

import { Container } from "../components/shared"
import { Colors } from "../components/colors"
//custom components

const WelcomeContainer = styled(Container)`
background-color: ${Colors.secondary};
justify-content: space-between;
widht: 100%;
height: 100%;`;

const TopSection = styled.View`
width: 100%;
flex: 1;
max-height: 55%;
`;

const topImage = styled.Image`
width: 100%;
height: 100%;
resize-mode: stretch;
`;

const BottomSection = styled.View`
width: 100%;
padding: 25px;
flex: 1;
`;

const Welcome:FunctionComponent = () => {
    return(
        <>
            <StatusBar style="light"/>
            <WelcomeContainer>
                <TopSection></TopSection>
                <BottomSection></BottomSection>
            </WelcomeContainer>
        </>
    );
}

export default Welcome;