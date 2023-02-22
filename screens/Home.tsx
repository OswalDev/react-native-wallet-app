import React, { FunctionComponent} from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components";
import { Colors } from "../components/colors";
import { Container } from "../components/shared";

//card components
import CardSection from "../components/Cards/CardSection";

//card assets
import logoVisa from "./../assets/cards/visa_white.png";
import logoMasterCard from "./../assets/cards/mc.png";


const HomeContainer = styled(Container)`
background-color: ${Colors.graylight}
width: 100%;
flex: 1;
`

const Home: FunctionComponent = () => {

    const cardDummyData = [
        {
            id: 1,
            accountNo: "1266778897",
            balance: 199.5,
            alias: "Work Debit",
            logo: logoVisa,
        },
        {
            id: 2,
            accountNo: "4362178122",
            balance: 23456.5,
            alias: "Work Debit",
            logo: logoMasterCard,
        },
        {
            id: 3,
            accountNo: "9908392132",
            balance: 32566.0,
            alias: "Work Debit",
            logo: logoMasterCard,
        },
        {
            id: 4,
            accountNo: "9386738213",
            balance: 1122.2,
            alias: "Work Debit",
            logo: logoMasterCard,
        },
        {
            id: 5,
            accountNo: "4362178122",
            balance: 11.3,
            alias: "Work Debit",
            logo: logoVisa,
        },
        {
            id: 6,
            accountNo: "2565676997",
            balance: 6776.9,
            alias: "Work Debit",
            logo: logoVisa,
        },
        {
            id: 7,
            accountNo: "2321799765",
            balance: 200000.5,
            alias: "Work Debit",
            logo: logoMasterCard,
        },
        {
            id: 8,
            accountNo: "123578876322",
            balance: 200000.5,
            alias: "Work Debit",
            logo: logoVisa,
        }
    ]

    return (
        <HomeContainer>
            <StatusBar style="dark"/>
            <CardSection data={cardDummyData} />
        </HomeContainer>
    );
}

export default Home;