import { Text, View, Image, StyleSheet } from "react-native"
import Title from "../Components/Title"
import CustomButton from "../Components/CustomButton"

function GameOverScreen({setvalue,startValue,counter}) {
  
  return (
    <View style={styles.mainContainer} >
      <Title>Game Over</Title>
      <View style={styles.imageContanair}>
        <Image style={styles.imagesub} source={require("../assets/game over.jpg")} />
      </View>
      <Text style={styles.mainText}>
        your phone needed <Text style={styles.subText}>{counter}</Text> rounds to guess the number <Text style={styles.subText}>{startValue}</Text>
      </Text>
      
      <CustomButton onpress={setvalue}  >Restart</CustomButton>
    </View>
  )
}

export default GameOverScreen

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 20,
    marginTop: 50


  },
  imageContanair: {
    width: 350,
    height: 350,
    borderWidth: 2,
    borderRadius: 200,
    overflow: "hidden",
    marginTop: 20,

  },
  imagesub: {
    width: "100%",
    height: "100%"
  },
  mainText: {
    fontFamily: "open-sans",
    marginTop: 20,
    fontSize: 20,
    textAlign: "center",
    marginBottom:10

  },
  subText: {
    fontFamily: "open-sans-bold"
  }
})
