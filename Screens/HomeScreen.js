import React from "react";
import { Text, View, Button } from "react-native";


const HomeScreen = ({ navigation }) => {
    return (

        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>this is Home Screen</Text>
            <Button
                title="go to information"
                onPress={() => navigation.navigate("Info")}
            />


            <View style={{ marginVertical: 10 }} />
            <Button
                title="Open Modal"
                onPress={() => navigation.navigate("Modal")}
            />
        </View>

    );
};

export default HomeScreen


