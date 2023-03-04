import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { Colors } from "../colors";
import RegularText from "../Texts/RegularText";
import SmallText from "../Texts/SmallText";
import { View } from "react-native";

//components
import { ScreenWidth } from "../shared";
import card_bg from "./../../assets/bgs/background_transparent.png"; 

//navigation
import { useNavigation } from "@react-navigation/native";
import { Props as HomeProps } from "./../../screens/Home";

const CardBackground = styled.ImageBackground`
height: 75%;
width: ${ScreenWidth- 110}px;
resize-mode: contain;
background-color: ${Colors.accent};
border-radius: 25px;
margin-left: 25px;
overflow: hidden;
`;

const CardTouchable = styled.TouchableHighlight`
height: 100%;
border-radius: 25px;
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
import { CardProps } from "./types";

const CardItem: FunctionComponent<CardProps> = (props) => {
    //navigation configure
    const navigation = useNavigation<HomeProps["navigation"]>();

    const handlePress = () => {
        navigation.navigate("Balance", { ...props });
    };
    
    return (
        <CardBackground source={card_bg}>
            <CardTouchable underlayColor={Colors.secondary} onPress={handlePress}>
                <TouchableView>
                    <CardRow>
                        <RegularText textStyles={{ color: Colors.white }}>
                        ****** {props.accountNo.slice(6,10)}
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
            </CardTouchable>
        </CardBackground>
    );
}

export default CardItem;