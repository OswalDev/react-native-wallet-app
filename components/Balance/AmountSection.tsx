import React, { FunctionComponent } from 'react'
import styled from "styled-components/native"

//custom componentes
import { Colors } from '../colors';
import SmallText from '../Texts/SmallText';
import RegularText from '../Texts/RegularText';

//types
import { AmountProps } from './types';

const AmountSectionBackground = styled.View`
width: 100%;
padding-top: 5px;
align-items: center;
flex: 1;
`;

const AmountSection: FunctionComponent<AmountProps> = (props) => {
    return (
        <AmountSectionBackground>
            <SmallText textStyles={{ color: Colors.secondary, marginBottom: 15 }}>
                Total Balance
            </SmallText>
            <RegularText textStyles={{ color: Colors.secondary, fontSize: 28 }}>
                $ {props.balance}
            </RegularText>
        </AmountSectionBackground>
    );
};

export default AmountSection;