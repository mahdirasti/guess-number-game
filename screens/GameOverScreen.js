import { Image, StyleSheet, Text, View } from "react-native"

import Colors from "../constants/Colors"
import PrimaryButton from "../components/ui/PrimaryButton"
import React from "react"
import Title from "../components/ui/Title"

export default function GameOverScreen({
  userNumber,
  countGuess,
  startANewGame
}) {
  return (
    <View style={styles.screenContainer}>
      <Title>Game Over!</Title>
      <View style={styles.contentContainer}>
        <Image source={require("../assets/images/success.png")} />
        <Text style={styles.resultText}>
          Your phone needed{" "}
          <Text style={styles.highlightText}>{countGuess}</Text> rounds to guess
          number <Text style={styles.highlightText}>{userNumber}</Text>
        </Text>
        <PrimaryButton onPress={startANewGame}>Start a new game</PrimaryButton>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  screenContainer: {
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
    gap: 16
  },
  contentContainer: {
    alignItems: "center",
    justifyContent: "center",
    gap: 16
  },
  resultText: {
    fontSize: 18,
    fontFamily: "open-sans"
  },
  highlightText: {
    fontFamily: "open-sans-bold",
    color: Colors.primary500
  }
})
