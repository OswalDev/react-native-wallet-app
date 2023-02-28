import React, { FunctionComponent} from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components";
import { Colors } from "../components/colors";
import { Container } from "../components/shared";
import TransactionSection from "../components/Transactions/TransactionSection";

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

    const TransactionDummyData = [
        {
          id:1,
          amount: "-20.00",
          date: "14 Jan 2023",
          title: "Taxi",
          subtitle: "Uber car",
          art: {
            background: Colors.primary,
            icon: "car",
          },
        },
        {
            id:1,
            amount: "-32.00",
            date: "15 Feb 2023",
            title: "Taxi",
            subtitle: "Uber car",
            art: {
              background: Colors.primary,
              icon: "car",
            },
          },
          {
            id:1,
            amount: "-11.20",
            date: "22 Feb 2023",
            title: "Taxi",
            subtitle: "Uber car",
            art: {
              background: Colors.primary,
              icon: "car",
            },
          },
          {
            id:1,
            amount: "-21.03",
            date: "23 Feb 2023",
            title: "Shopping",
            subtitle: "Uber car",
            art: {
              background: Colors.tertiary,
              icon: "cart",
            },
          },
          {
            id:1,
            amount: "-46.01",
            date: "27 Feb 2023",
            title: "Shopping",
            subtitle: "Uber car",
            art: {
              background: Colors.tertiary,
              icon: "cart",
            },
          },
          {
            id:1,
            amount: "-112.12",
            date: "01 Mar 2023",
            title: "Flight ticket",
            subtitle: "American Airlines",
            art: {
              background: Colors.accent,
              icon: "airplane",
            },
          },
          {
            id:1,
            amount: "-324.56",
            date: "04 Mar 2023",
            title: "Flight ticket",
            subtitle: "Conviasa",
            art: {
              background: Colors.accent,
              icon: "airplane",
            },
          },
          {
            id:1,
            amount: "-86.00",
            date: "09 Mar 2023",
            title: "Taxi",
            subtitle: "Uber car",
            art: {
              background: Colors.primary,
              icon: "car",
            },
          },
          {
            id:1,
            amount: "-469.33",
            date: "12 Mar 2023",
            title: "Flight ticket",
            subtitle: "American Airlines",
            art: {
              background: Colors.accent,
              icon: "airplane",
            },
          }
    ]

    return (
        <HomeContainer>
            <StatusBar style="dark"/>
            <CardSection data={cardDummyData} />
            <TransactionSection data={TransactionDummyData} />
        </HomeContainer>
    );
}

export default Home;