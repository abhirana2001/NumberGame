 import { StyleSheet, Text, View } from "react-native"

function GuessNumberList({Guessno,RoundIndex}) {
  return (
    <View style={styles.ListContainer}>
   <Text style={styles.TextContainr}>#{RoundIndex}</Text>
   <Text style={styles.TextContainr}>Opponent'Guess Number {Guessno}</Text>
   </View>
  )
}

export default GuessNumberList

const styles = StyleSheet.create({
    ListContainer:{
        borderWidth:2,
        height:50,
        width:"100%",
        elevation:8,
        justifyContent:"space-between",
        backgroundColor:"#FAEBD7",
        flexDirection:"row",
        borderRadius:10,
        padding:10,
        marginTop:15
    },
    TextContainr:{
        fontSize:16 ,
        fontFamily:"open-sans"

    
    }
  


})