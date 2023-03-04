import React, { FunctionComponent } from "react";
import { StatusBar } from "expo-status-bar";
import styled from 'styled-components/native';

//custom components
import { Container } from "../components/shared"
import { Colors } from "../components/colors"
import LargeText from "../components/Texts/LargeText"
import RegularText from "../components/Texts/RegularText"
import SmallText from "../components/Texts/SmallText"
import RegularButton from "../components/Buttons/RegularButton"

//image
import background from "../assets/bgs/background_v1.png"

//types
import { RootStackParamsList } from "../navigators/RootStack";
import { StackScreenProps } from "@react-navigation/stack";
type Props = StackScreenProps<RootStackParamsList, "Welcome">;

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

const TopImage = styled.Image`
width: 100%;
height: 100%;
resize-mode: stretch;
`;

const BottomSection = styled.View`
width: 100%;
padding: 25px;
flex: 1;
justify-content: flex-end;
`;

const Welcome:FunctionComponent<Props> = ({ navigation }) => {
    return(
        <>
            <StatusBar style="light"/>
            <WelcomeContainer>
                <TopSection>
                    <TopImage source={background} />
                </TopSection>
                <BottomSection>
                    <LargeText textStyles={{ width: "70%", marginBottom: 25 }}>
                        Best way to track your money
                    </LargeText>
                    <SmallText textStyles={{ width: "70%", marginBottom: 25 }}>
                        Best payment method, connects your money to your friends and family.
                    </SmallText >
                    <RegularButton onPress={() => { navigation.navigate("Home")} }>
                        Get Started
                    </RegularButton>
                </BottomSection>
            </WelcomeContainer>
        </>
    );
}

export default Welcome;