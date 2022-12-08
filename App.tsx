import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import Welcome from "./screens/Welcome"

export default function App() {
  let [] = useFonts({
    "Lato-Bold": require("./assets/fonts/Lato-Bold.ttf"),
    "Lato-Regular": require("./assets/fonts/Lato-Regular.ttf"),
  });

  return (
    <Welcome />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
