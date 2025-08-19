import { Platform, SafeAreaView, StatusBar, StyleSheet } from "react-native";
import Navigator from "./app/navigation";
import FlashMessage from "react-native-flash-message";
import { Provider } from "react-redux";
import { store } from "./app/stores";

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <Navigator />
        <FlashMessage style={styles.message} position="top" />
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  message: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
