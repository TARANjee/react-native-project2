import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactList() {
    const contacts = [
        {
            uid: 1,
            name: 'John',
            status: 'Making your GPay smooth',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/John_Travolta_Cannes_2018_(cropped).jpg'
        },
        {
            uid: 2,
            name: 'Amam',
            status: 'Busy',
            imageUrl: 'https://th.bing.com/th/id/OIP.GEluEM_wSTj0pyemWUXBaAHaLH?w=910&h=1365&rs=1&pid=ImgDetMain'
        },
        {
            uid: 3,
            name: 'Lucky',
            status: 'Working ❤️',
            imageUrl: 'https://th.bing.com/th/id/OIP.jryuUgIHWL-1FVD2ww8oWgHaHa?rs=1&pid=ImgDetMain'
        },
        {
            uid: 4,
            name: 'Tanu',
            status: 'Travelling',
            imageUrl: 'https://th.bing.com/th/id/OIP.wVPWP4hWoG3oOqeii_fQvgHaHa?w=2048&h=2050&rs=1&pid=ImgDetMain'
        },
        {
            uid: 5,
            name: 'Hardeep',
            status: 'Busy',
            imageUrl: 'https://th.bing.com/th/id/OIP.c0GTqHSPgp9rz7Pn2Aw_8wHaF7?rs=1&pid=ImgDetMain'
        }

    ]
    return (
        <View>
            <Text style={styles.headingText}>Contact List</Text>
            <ScrollView style={styles.container} scrollEnabled={false}>
                {contacts.map((contact) => (
                    <View key={contact.uid} style={styles.userCard}>

                        <Image
                            source={{ uri: contact.imageUrl }}
                            style={styles.userImage}
                        />
                        <View>
                            <Text style={styles.userName}>{contact.name}</Text>
                            <Text style={styles.userStatus}>{contact.status}</Text>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </View >
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 25,
        fontWeight: "bold",
        paddingHorizontal: 10
    },
    container: {
        paddingHorizontal: 16,
        marginBottom: 4
    },
    userCard: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 3,
        backgroundColor: '#8D4DAF',
        borderRadius: 10,
        padding: 8
    },
    userImage: {
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        marginRight: 14
    },
    userName: {
        fontSize: 16,
        fontWeight: '600',
        color: "#fff"
    },
    userStatus: {
        fontSize: 12,
    }
})