import { ImageSourcePropType } from "react-native";

// custom components
import { Colors } from "../colors";
import RegularText from '../Texts/RegularText';
import SmallText from '../Texts/SmallText';

export interface SendMoneyProps {
    id: number;
    name: string;
    amount: string;
    background: string;
    img: ImageSourcePropType;
}

export interface SendMoneySectionProps {
    data: Array<SendMoneyProps>
}