import { StyleSheet, Text, View } from "react-native"

import React from "react"

export default function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>
}

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    color: "#ffffff",
    fontSize: 24
  }
})
