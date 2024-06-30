import { Pressable, Text, View,StyleSheet } from "react-native"


function CustomButton({ children ,onpress}) {
  return (

    <View style={styles.buttonOuterConatainer}>
      <Pressable onPress={onpress} style={styles.buttonInnerConatainer}  android_ripple={{color:"dark-grey"}}>
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>

  )
}

export default CustomButton

const styles= StyleSheet.create({
  buttonOuterConatainer:{
   margin:5,
   overflow:"hidden"
  },
  buttonInnerConatainer:{
  backgroundColor:"grey",
  paddingHorizontal:18,
  paddingVertical:8,
  borderRadius:10,
  elevation:10,
  

  },
  buttonText:{
    color:"white",
    textAlign:"center"
  }

})