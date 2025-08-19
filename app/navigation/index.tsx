import React, { use, useEffect } from "react";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import AuthNavigation from "./AuthNavigation";
import colors from "../utils/color";
import TabsNavigator from "./TabNavigation";
import { authSlice, updateAuthState } from "../stores/AuthSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../stores";
import AsyncStorage from "@react-native-async-storage/async-storage";
import customFetch from "../config/db";
// import { TK}

const myTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: colors.bgColor,
  },
};
const Navigator = () => {
  const authSlice = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  const isAuth = authSlice.profile ? true : false;

  const fetchAuthUser = async () => {
    const token = await AsyncStorage.getItem("token");

    if (token) {
      try {
        const { data } = await customFetch.get("/auth/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (data) {
          dispatch(updateAuthState({ profile: data.user, pending: false }));
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    fetchAuthUser();
  }, []);

  return (
    <NavigationContainer theme={myTheme}>
      {isAuth ? <TabsNavigator /> : <AuthNavigation />}
    </NavigationContainer>
  );
};

export default Navigator;
