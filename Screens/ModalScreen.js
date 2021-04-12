import React from 'react'
import { StyleSheet, Button, Text, View } from 'react-native'

export default function ModalScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 30 }}>This is a Modal!</Text>
            <Button title="Dismiss" onPress={() => navigation.goBack()} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    }
})
