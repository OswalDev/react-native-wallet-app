import  React, { FunctionComponent } from "react";

//screens
import Welcome from "../screens/Welcome";
import Home from "../screens/Home";
import Balance from "../screens/Balance";

//custom components
import { Colors } from "../components/colors";
import Greeting from "../components/Header/Greeting";
import Profile from "../components/Header/Profile";
import Avi from "./../assets/avi/avatar.png";

// balance screen props
import { CardProps } from "../components/Cards/types";

//balance back icon
import { Ionicons } from "@expo/vector-icons";

//react navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

export type RootStackParams = {
    Welcome: undefined;
    Home: undefined;
    Balance: CardProps;
};

const Stack = createStackNavigator<RootStackParams>();

const RootStack: FunctionComponent = () => {
    return <NavigationContainer>
        <Stack.Navigator
        screenOptions={{
            headerStyle: {
                backgroundColor: Colors.graylight,
                borderBottomWidth: 0,
                shadowColor: "transparent",
                shadowOpacity: 0,
                elevation: 0,
                height:  120,
            },
            headerTintColor: Colors.secondary,
            headerRightContainerStyle: {
                paddingRight: 25,
            },
            headerLeftContainerStyle: {
                paddingLeft: 10,
            },
            headerRight: () => (
                <Profile
                    img={Avi}
                    imgContainerStyle={{ backgroundColor: Colors.tertiary }}
                />
            ),
        }}
        initialRouteName="Welcome"
        >
            <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{ headerShown: false }}
            />
            <Stack.Screen
            name="Home"
            component={Home}
            options={{ 
                headerTitle: (props) => (
                <Greeting
                mainText="Hey Oswaldo!"
                subText="Welcome back"
                {...props}
                />
            ),
                headerLeft: () => <></>
            }}
            />
            <Stack.Screen
            name="Balance"
            component={Balance}
            options={({ route }) => ({
                headerTitle: route?.params?.alias,
                headerTitleAlign: "center",
                headerBackImage: () => (
                    <Ionicons
                    name="chevron-back"
                    size={25}
                    color={Colors.secondary}
                    />
                ),
                headerLeftContainerStyle:{
                    paddingLeft: 0,

                }
            })}
            />
        </Stack.Navigator>
    </NavigationContainer>
}

export default RootStack;