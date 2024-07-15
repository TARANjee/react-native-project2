import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'

export default class FlatCards extends Component {
    render() {
        return (
            <View>
                <Text style={styles.headingText}>FlatCards</Text>
                <View style={styles.container}>
                    <View style={[styles.box, styles.cardOne]}>
                        <Text>Red</Text>
                    </View>
                    <View style={[styles.box, styles.cardTwo]}>
                        <Text>Green</Text>
                    </View>
                    <View style={[styles.box, styles.cardThree]}>
                        <Text>Blue</Text>
                    </View>
                    <View style={[styles.box, styles.cardThree]}>
                        <Text>Blue</Text>
                    </View>
                    
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 25,
        fontWeight: "bold",
        paddingHorizontal: 10
    },
    container: {
        flex: 1,
        flexDirection: 'row',

    },
    box: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 8,
        borderRadius: 5,
        width: 100,
        height: 100,

    },
    cardOne: {
        backgroundColor: "#EF5354"
    },
    cardTwo: {
        backgroundColor: "#50DBB4"
    },
    cardThree: {
        backgroundColor: "#5DA3FA"
    }
})