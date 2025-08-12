import React from "react";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import AuthNavigation from "./AuthNavigation";
import colors from "../utils/color";
import TabsNavigator from "./TabNavigation";

const myTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: colors.bgColor,
  },
};
const Navigator = () => {
  const isAuth = false;
  return (
    <NavigationContainer theme={myTheme}>
      {isAuth ? <TabsNavigator /> : <AuthNavigation />}
    </NavigationContainer>
  );
};

export default Navigator;
