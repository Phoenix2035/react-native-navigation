import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import HomeScreen from "./Screens/HomeScreen";
import InfoScreen from "./Screens/InfoScreen";
import SettingScreen from "./Screens/SettingScreen";
import ProfileScreen from "./Screens/ProfileScreen";
import ModalScreen from "./Screens/ModalScreen";

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const SettingStack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="first">
                    {
                        () => (
                            <HomeStack.Navigator mode="modal">
                                <HomeStack.Screen name="Home" component={HomeScreen} />
                                <HomeStack.Screen name="Info" component={InfoScreen} />
                                <HomeStack.Screen name="Modal" component={ModalScreen} options={{
                                    headerShown: false
                                }} />
                            </HomeStack.Navigator>
                        )
                    }
                </Tab.Screen>

                <Tab.Screen name="second" >
                    {
                        () => (
                            <SettingStack.Navigator>
                                <SettingStack.Screen name="Setting" component={SettingScreen} />
                                <SettingStack.Screen name="Profile" component={ProfileScreen} />
                            </SettingStack.Navigator>
                        )
                    }
                </Tab.Screen>
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default App;
