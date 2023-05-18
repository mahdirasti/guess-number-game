import { ImageBackground, SafeAreaView, StyleSheet } from "react-native"

import Colors from "./constants/Colors"
import GameLoadingScreen from "./screens/GameLoadingScreen"
import GameOverScreen from "./screens/GameOverScreen"
import GameScreen from "./screens/GameScreen"
import { LinearGradient } from "expo-linear-gradient"
import StartGameScreen from "./screens/StartGameScreen"
import { StatusBar } from "expo-status-bar"
import { useFonts } from "expo-font"
import { useState } from "react"

export default function App() {
  const [countGuess, setCountGuess] = useState(0)
  const newGuessHandler = () => {
    setCountGuess((crt) => crt + 1)
  }

  const [isFontLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf")
  })

  const [isGameOver, setIsGameOver] = useState(false)
  const gameOverHandler = () => {
    setIsGameOver(true)
  }

  const [userNumber, setUserNumber] = useState()

  const pickedNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber)
    setIsGameOver(false)
  }

  const startANewGame = () => {
    setIsGameOver(false)
    setCountGuess(0)
    setUserNumber("")
  }

  let screen = <StartGameScreen onConfirm={pickedNumberHandler} />

  if (userNumber) {
    screen = (
      <GameScreen
        userNumber={userNumber}
        onGameOver={gameOverHandler}
        onAddNewGuess={newGuessHandler}
      />
    )
  }

  if (isGameOver) {
    screen = (
      <GameOverScreen
        startANewGame={startANewGame}
        countGuess={countGuess}
        userNumber={userNumber}
      />
    )
  }

  if (!isFontLoaded) {
    return <GameLoadingScreen />
  }

  return (
    <>
      <LinearGradient
        colors={[Colors.secondary500, Colors.primary200]}
        style={styles.rootScreen}
      >
        <ImageBackground
          source={require("./assets/images/dices.jpg")}
          resizeMode="cover"
          style={styles.rootScreen}
          imageStyle={styles.imageStyle}
        >
          <SafeAreaView>{screen}</SafeAreaView>
        </ImageBackground>
      </LinearGradient>
      <StatusBar style="light" />
    </>
  )
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1
  },
  imageStyle: {
    padding: 24,
    opacity: 0.15
  }
})
