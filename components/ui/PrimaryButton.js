import { Pressable, StyleSheet, Text, View } from "react-native"

import Colors from "../../constants/Colors"

export default function PrimaryButton({ children, onPress, style }) {
  const pressHandler = () => {
    if (onPress) onPress()
  }

  return (
    <View style={[styles.buttonOuterContainer, style]}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.buttonInnerContainerPressed]
            : styles.buttonInnerContainer
        }
        onPress={pressHandler}
        android_ripple={{ color: Colors.primary600 }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    overflow: "hidden"
  },
  buttonInnerContainerPressed: {
    opacity: 0.5
  },
  buttonInnerContainer: {
    backgroundColor: Colors.primary500,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2
  },
  buttonText: {
    color: "#ffffff",
    textAlign: "center"
  }
})
