import { Text, StyleSheet, View, Image } from 'react-native'
import React, { Component } from 'react'

export default class FancyCards extends Component {
  render() {
    return (
      <View>
        <Text style={styles.headingText}>Trending Places</Text>
        <View style={[styles.card, styles.cardElevated]}>
          <Image
            source={{
              uri: 'https://photos.smugmug.com/Canada/Summer-2014-Renamed-Photos/i-cb4Brhq/0/0d4b7e6e/XL/aerial%20view%20canadian%20rockies-XL.jpg'
            }}
            style={styles.cardImage}
          />
          <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Banff National Park</Text>
            <Text style={styles.cardLabel}>Mountains</Text>
            <Text style={styles.cardDesc}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, quae facere? Aliquam voluptas maxime est provident nam placeat veritatis repellat itaque aliquid quo.</Text>
            <Text style={styles.cardFooter}>40km away</Text>
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
  card: {
    width: 380,
    height: 360,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16
  },
  cardElevated: {
    backgroundColor: '#ffffff',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1
    }
  },
  cardImage: {
    marginBottom: 8,
    height: 180,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12
  },
  cardTitle: {
    color: '#000000',
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 4
  },
  cardLabel: {
    color: '#000000',
    fontSize: 14,
    marginBottom: 6
  },
  cardDesc: {
    color: '#333945',
    fontSize: 12,
    marginBottom: 12,
    flexShrink: 1,
    marginTop: 6
  },
  cardFooter: {
    color: '#000000'
  }
})