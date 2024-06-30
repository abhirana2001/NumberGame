import { View ,StyleSheet,Text} from "react-native"


function RandamNumber({children}) {
  return (
   <View style={styles.container} >
    <Text style={styles.textNumber} >{children}</Text>
   </View>
  )
}

export default RandamNumber

const styles=StyleSheet.create({
    container:{
     borderWidth:2,
     margin:30,
     padding:30,
     borderColor:"black",
     justifyContent:"center",
     alignItems:"center",
     width:200
    },
    textNumber:{
    fontSize:30,
    fontWeight:"bold",
  
    
    }
})