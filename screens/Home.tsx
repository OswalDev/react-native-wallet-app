import React, { FunctionComponent} from "react";
import { StatusBar } from "expo-status-bar";
import styled from 'styled-components/native';
import { Colors } from "../components/colors";
import { Container } from "../components/shared";
import TransactionSection from "../components/Transactions/TransactionSection";
import SendMoneySection from "../components/SendMoney/SendMoneySection";

//assets
import portrait1 from "../assets/portraits/1.jpg";
import portrait2 from "../assets/portraits/2.jpg";
import portrait3 from "../assets/portraits/3.jpg";

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
            alias: "Personal Prepaid",
            logo: logoMasterCard,
        },
        {
            id: 3,
            accountNo: "9908392132",
            balance: 32566.0,
            alias: "Credit Card",
            logo: logoMasterCard,
        },
        {
            id: 4,
            accountNo: "9386738213",
            balance: 1122.2,
            alias: "Personal Prepaid",
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
            alias: "Personal Prepaid",
            logo: logoVisa,
        },
        {
            id: 7,
            accountNo: "2321799765",
            balance: 200000.5,
            alias: "Credit Card",
            logo: logoMasterCard,
        },
        {
            id: 8,
            accountNo: "123578876322",
            balance: 200000.5,
            alias: "Personal Prepaid",
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
            id:2,
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
            id:3,
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
            id:4,
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
            id:5,
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
            id:6,
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
            id:7,
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
            id:8,
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
            id:9,
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

    const SendMoneyDummyData = [
      {
        id: 1,
        amount: "2450.02",
        name: "Coby Andoh",
        background: Colors.tertiary,
        img: portrait1,
      },
      {
        id: 2,
        amount: "4550.32",
        name: "Coby Andoh",
        background: Colors.tertiary,
        img: portrait2,
      },
      {
        id: 3,
        amount: "506.12",
        name: "Coby Andoh",
        background: Colors.tertiary,
        img: portrait3,
      },
    ]

    return (
        <HomeContainer>
            <StatusBar style="dark"/>
            <CardSection data={cardDummyData} />
            <TransactionSection data={TransactionDummyData} />
            <SendMoneySection data={SendMoneyDummyData} />
        </HomeContainer>
    );
}

export default Home;