
import { ImageBackground, StyleSheet, SafeAreaView } from 'react-native';
import StartScreen from './Screens/StartScreen';
import { LinearGradient } from "expo-linear-gradient"
import { useState,useCallback } from 'react';
import GamestartScreen from './Screens/GamestartScreen';
import { StatusBar } from 'expo-status-bar';
import GameOverScreen from './Screens/GameOverScreen';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

export default function App() {
  const [gameStart, setGameStart] = useState()
  const [FinalValue, setFinalvalue] = useState(true)
  const [Counter,setCounter]= useState(0)

  function GameStartScreen(inputValue) {
    setGameStart(inputValue)
    setFinalvalue(false)
  }

  function MatchInputValue(GuessRoundNumber) {
    setFinalvalue(true)
    setCounter(GuessRoundNumber)
  }

  
 const[fontsLoaded, fontError]= useFonts({
    "open-sans": require("./font/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./font/OpenSans-Bold.ttf")
  })


  function RestartGame (){
    setGameStart(null)
    setFinalvalue(true)
  }

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  let Screen = <StartScreen onInputSubmit={GameStartScreen} />
 
  if (gameStart) {
    Screen = <GamestartScreen userNumber={gameStart} MatchInputValue={MatchInputValue} />
  }
  if (FinalValue && gameStart) {
    Screen = <GameOverScreen setvalue={RestartGame} startValue={gameStart} counter={Counter} />
  }
  
  return (

    <LinearGradient style={styles.mainRootFile} colors={["#FAEBD7", "grey"]}
    onLayout={onLayoutRootView}
    >

      <ImageBackground
        style={styles.mainRootFile}
        source={require("./assets/background.jpg")}
        resizeMode="cover"
        imageStyle={styles.backgroundimage}
      >

        <SafeAreaView style={styles.mainRootFile}>
          {Screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  mainRootFile: {
    flex: 1
  },
  backgroundimage: {
    opacity: 0.20
  }
});