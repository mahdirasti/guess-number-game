import { StyleSheet, Text, View } from "react-native"

import Colors from "../../constants/Colors"
import React from "react"

export default function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.secondary500,
    padding: 24,
    margin: 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    color: Colors.white,
    fontSize: 36,
    fontWeight: "bold"
  }
})
