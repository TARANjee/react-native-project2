import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function ActionCard() {
    function openWebsite(websiteLink: string) {
        Linking.openURL(websiteLink)
    }

    return (
        <View>
            <Text style={styles.headingText}>Blog Card</Text>
            <View style={[styles.card, styles.elevatedCard]}>
                <View style={styles.headingContainer}>
                    <Text style={styles.headerText}>
                        What's new in javascript 21- ES12
                    </Text>
                </View>
                <Image
                    source={{
                        uri: "https://th.bing.com/th/id/R.535e92c65ddaff1a55f11df10c680c75?rik=f%2biBg6VYkZpFAQ&riu=http%3a%2f%2fradicalhub.com%2fwp-content%2fuploads%2f2018%2f07%2fjavascript.jpg&ehk=%2f8TEVGmLi%2bQfePoivY3xtjLzdul2sHZ8uuJe38nC3L4%3d&risl=&pid=ImgRaw&r=0"
                    }}
                    style={styles.cardImage}
                />
                <View style={styles.bodyContainer}>
                    <Text numberOfLines={3}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis voluptatem eum molestiae aperiam ut, dolorem nemo vitae! Ullam inventore ex expedita, accusantium reiciendis rerum eum quaerat necessitatibus, consequuntur, explicabo officia?</Text>
                </View>
                <View style={styles.footerContainer}>
                    <TouchableOpacity onPress={() => openWebsite('https://www.w3schools.com/Js/js_es6.asp')}>
                        <Text style={styles.socialLinks}>Read More</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => openWebsite('https://www.linkedin.com/in/tjsingh47/')}>
                        <Text style={styles.socialLinks}>Follow me</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 25,
        fontWeight: "bold",
        paddingHorizontal: 10
    },
    cardImage: {
        height: 190,

    },
    card: {
        width: 380,
        height: 360,
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 16
    },
    elevatedCard: {
        elevation: 3,
        backgroundColor: "#E07C24",
        
    },
    headingContainer: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText: {
        color: '#000',
        fontSize: 16,
        fontWeight: '600'
    },
    bodyContainer: {
        padding: 10,
        
    },
    footerContainer: {
        padding: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    socialLinks: {
        fontSize:16,
        color:'#000000',
        backgroundColor:'#ffffff',
        paddingHorizontal:20,
        paddingVertical:6,
        borderRadius:6
    }
})