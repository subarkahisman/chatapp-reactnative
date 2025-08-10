import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProfileScreen from "../screens/ProfileScreen";
import ChatScreen from "../screens/ChatScreen";
import AntDesign from "@expo/vector-icons/AntDesign";
import colors from "../utils/color";

const Tab = createBottomTabNavigator();

function TabsNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          tabBarIcon({ focused, color, size }) {
            return focused ? (
              <AntDesign
                name="message1"
                size={size}
                color={colors.activateTab}
              />
            ) : (
              <AntDesign name="message1" size={size} color={colors.deactive} />
            );
          },
          title: "Message",
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon({ focused, color, size }) {
            return focused ? (
              <AntDesign name="user" size={size} color={colors.activateTab} />
            ) : (
              <AntDesign name="user" size={size} color={colors.deactive} />
            );
          },
          title: "Profile",
        }}
      />
    </Tab.Navigator>
  );
}

export default TabsNavigator;
