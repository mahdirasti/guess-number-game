import { Alert, StyleSheet, TextInput, View } from "react-native"

import Colors from "../constants/Colors"
import PrimaryButton from "../components/ui/PrimaryButton"
import Title from "../components/ui/Title"
import { useState } from "react"

export default function StartGameScreen({ onConfirm }) {
  const [enteredNumber, setEnteredNumber] = useState("")
  const handleChangeInput = (val) => setEnteredNumber(val)

  const handleResetEnteredNumber = () => setEnteredNumber("")

  const handleConfirm = () => {
    const chosenNumber = parseInt(enteredNumber)

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      // show alert
      Alert.alert(
        "Invalid number!",
        "Number has to be a number between 1 and 99",
        [{ text: "Okay", onPress: handleResetEnteredNumber }]
      )
      return
    }

    if (onConfirm) onConfirm(chosenNumber)
  }

  return (
    <View style={styles.screenContainer}>
      <Title>Guess My Number!</Title>
      <View style={styles.inputsArea}>
        <Title>Enter a number</Title>
        <TextInput
          style={styles.inputNumber}
          maxLength={2}
          keyboardType="number-pad"
          value={enteredNumber}
          onChangeText={handleChangeInput}
        />
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={handleResetEnteredNumber}>
            Reset
          </PrimaryButton>
          <PrimaryButton onPress={handleConfirm}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  screenContainer: {
    padding: 32,
    gap: 16
  },
  inputsArea: {
    paddingVertical: 32,
    backgroundColor: Colors.primary200,
    borderRadius: 8,
    elevation: 8,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    alignItems: "center"
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 8,
    marginTop: 16
  },
  inputNumber: {
    height: 56,
    minWidth: 56,
    fontSize: 32,
    borderBottomWidth: 2,
    borderBottomColor: Colors.secondary500,
    color: Colors.secondary500,
    textAlign: "center"
  }
})
