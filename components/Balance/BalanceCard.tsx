import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { Colors } from "../colors";
import RegularText from "../Texts/RegularText";
import SmallText from "../Texts/SmallText";
import { View } from "react-native";

//components
import card_bg from "./../../assets/bgs/background_transparent.png"; 

const CardBackground = styled.ImageBackground`
height: 75%;
width: 100%;
resize-mode: contain;
background-color: ${Colors.accent};
border-radius: 25px;
overflow: hidden;
`;

const TouchableView = styled.View`
justify-content: space-between;
align-items: center;
padding: 30px;
flex: 1;
`;

const CardRow = styled.View`
flex-direction: row;
justify-content: space-between;
align-items: center;
width: 100%;
`

const Logo = styled.Image`
height: 80%;
width: 100%;
resize-mode: contain;
flex: 1;
`;

//types
import { BalanceCardProps } from "./types";

const BalanceCard: FunctionComponent<BalanceCardProps> = (props) => {

    return (
        <CardBackground source={card_bg}>
                <TouchableView>
                    <CardRow>
                        <RegularText textStyles={{ color: Colors.white }}>
                        ****** {props?.accountNo?.slice(6,10)}
                        </RegularText>
                    </CardRow>
                    <CardRow>
                        <View style={{ flex:3 }}>
                            <SmallText
                            textStyles={{ marginBottom: 5, color: Colors.graylight }}
                            >
                            Total Balance
                            </SmallText>
                            <RegularText textStyles={{ fontSize: 19 }}>
                                ${props.balance}
                            </RegularText>
                        </View>
                        <Logo source={props.logo} />
                    </CardRow>
                </TouchableView>
        </CardBackground>
    );
}

export default BalanceCard;