import {
  Alert,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View
} from "react-native"
import { useEffect, useState } from "react"

import Colors from "../constants/Colors"
import { Ionicons } from "@expo/vector-icons"
import NumberContainer from "../components/game/NumberContainer"
import PrimaryButton from "../components/ui/PrimaryButton"
import RoundLogItem from "../components/game/RoundLogItem"
import Title from "../components/ui/Title"

function generateRandomNumber(min, max, exclude) {
  const rand = Math.floor(Math.random() * (max - min)) + min

  if (rand === exclude) {
    return generateRandomNumber(min, max, exclude)
  } else {
    return rand
  }
}

let minBind = 1
let maxBind = 100

export default function GameScreen({ userNumber, onGameOver, onAddNewGuess }) {
  const [guessRounds, setGuessRounds] = useState([])

  const initialGuess = generateRandomNumber(1, 100, userNumber)
  const [currentGuess, setCurrentGuess] = useState(initialGuess)
  useEffect(() => {
    if (onGameOver && currentGuess === userNumber) {
      onGameOver()
      minBind = 1
      maxBind = 100
    }
  }, [currentGuess, onGameOver, userNumber])

  const nextGuessHandler = (direction) => {
    if (onAddNewGuess) onAddNewGuess()

    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie", "You know it is wrong ...", [
        { text: "Sorry!", style: "cancel" }
      ])
      return
    }

    if (direction === "lower") {
      maxBind = currentGuess
    } else {
      minBind = currentGuess + 1
    }

    const newRndNumber = generateRandomNumber(minBind, maxBind, currentGuess)
    setCurrentGuess(newRndNumber)

    setGuessRounds((crt) => [
      ...crt,
      { key: Math.random() * 10000, text: currentGuess }
    ])
  }

  return (
    <View style={styles.root}>
      <View style={styles.screenContainer}>
        <View style={styles.innerContainer}>
          <Title>Oponent's Guess</Title>
          <NumberContainer>{currentGuess}</NumberContainer>
          <View style={styles.details}>
            <Text style={styles.subtitle}>Higher or lower?</Text>
            <View style={styles.incrementButtons}>
              <PrimaryButton
                style={{ width: 100 }}
                onPress={nextGuessHandler.bind(this, "greater")}
              >
                <Ionicons name="md-add" size={24} color={Colors.white} />
              </PrimaryButton>
              <PrimaryButton
                style={{ width: 100 }}
                onPress={nextGuessHandler.bind(this, "lower")}
              >
                <Ionicons name="md-remove" size={24} color={Colors.white} />
              </PrimaryButton>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.logsContainer}>
        <FlatList
          data={guessRounds}
          renderItem={(itemData) => <RoundLogItem item={itemData.item} />}
          keyExtractor={(item) => item.key}
          style={styles.logsList}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    flexDirection: "column",
    justifyContent: "flex-start",
    height: "100%",
    paddingHorizontal: 24
  },
  screenContainer: {
    flex: 1,
    gap: 16,
    elevation: 8,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 6
  },
  innerContainer: {
    padding: 16,
    backgroundColor: Colors.primary200,
    borderRadius: 8,
    alignItems: "center",
    gap: 16
  },

  subtitle: {
    color: Colors.white,
    fontSize: 20
  },
  incrementButtons: {
    flexDirection: "row",
    gap: 8
  },
  details: {
    gap: 8,
    alignItems: "center"
  },
  logsContainer: {
    flex: 1
  }
})
