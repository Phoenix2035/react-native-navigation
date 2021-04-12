import React from "react";
import { Button, Text, View } from "react-native";


const SettingScreen = ({ navigation }) => {
    return (

        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>this is Setting Screen</Text>
            <Button
                title="go to Profile"
                onPress={() => navigation.navigate("Profile")}
            />
        </View>

    );
};

export default SettingScreen


