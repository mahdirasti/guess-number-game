import { StyleSheet, Text, View } from "react-native"

import Colors from "../../constants/Colors"
import React from "react"

export default function RoundLogItem({ item }) {
  return (
    <View style={styles.itemTitleContainer}>
      <Text style={styles.itemTitle}>{item.text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  itemTitleContainer: {
    padding: 16,
    borderRadius: 6,
    backgroundColor: Colors.secondary500,
    borderColor: Colors.primary500,
    borderWidth: 2,
    overflow: "hidden",
    marginBottom: 8
  },
  itemTitle: {
    color: Colors.primary500,
    fontFamily: "open-sans-bold",
    fontSize: 32,
    textAlign: "center"
  }
})
