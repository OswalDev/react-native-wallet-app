import React, { FunctionComponent} from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components";
import { Colors } from "../components/colors";
import { Container } from "../components/shared";

const HomeContainer = styled(Container)`
background-color: ${Colors.graylight}
width: 100%;
flex: 1;
`

const Home: FunctionComponent = () => {
    return (
        <HomeContainer>
            <StatusBar />
        </HomeContainer>
    );
}

export default Home;