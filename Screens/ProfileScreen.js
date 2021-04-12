import React, { useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native"
import { Text, View } from "react-native";


const ProfileScreen = ({ navigation }) => {

    useFocusEffect(
        useCallback(() => {
            //execute when user focus
            alert("focused")

            return () => {
                // execute when unMount
                alert("unFocused")
            }
        })
    )

    return (

        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>this is Profile Screen</Text>
        </View>

    );
};

export default ProfileScreen


