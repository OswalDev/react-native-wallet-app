import React, {FunctionComponent} from "react";
import styled from "styled-components/native";

// custom components
import RegularText from '../Texts/RegularText';
import SmallText from '../Texts/SmallText';
import { Colors } from "../colors";
import Profile from "../Header/Profile";
import { ScreenWidth } from "../shared";

//types
import { SendMoneyProps } from "./types";


const SendMoneyItemContainer = styled.TouchableHighlight`
height: 130px;
width: ${ScreenWidth * 0.27}px;
padding: 10px;
border-radius: 15px;
justify-content: space-around;
margin: 0px 10px 10px 0px;
`;

const SendMoneyItem:  FunctionComponent<SendMoneyProps> = (props) => {
    return (
        <SendMoneyItemContainer 
        underlayColor={Colors.secondary}
        style={{ backgroundColor: props.background }}
        onPress={() => {
            alert("Send money")
        }}
        >
            <>
                <Profile img={props.img} imgContainerStyle={{ marginBottom: 10 }} />
                <SmallText 
                textStyles={{
                    textAlign: "left",
                    color: Colors.white,
                    fontSize: 12,
                }}
                >
                    {props.name}
                </SmallText>
                <RegularText 
                textStyles={{
                    color: Colors.white,
                    textAlign: "left",
                }}
                >
                    {props.amount}
                </RegularText>
            </>
        </SendMoneyItemContainer>
    );
};

export default SendMoneyItem;