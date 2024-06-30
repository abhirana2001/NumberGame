
import { StyleSheet, View ,Dimensions} from "react-native"
import Colors from "../Constent/CustomCss"

function Card({children,style}) {
  return (
    <View style={[styles.MainContainer,style]}>
       {children}
    </View>
  )
}

export default Card
const Multidiveces = Dimensions.get("screen").width
const styles = StyleSheet.create({
    MainContainer: {
       
        marginTop: 25,
        padding: 10,
        backgroundColor: Colors.primary500,
        marginHorizontal: 10,
        borderRadius: 10,
        elevation: 8,
        alignItems: "center",
        width:280
      
     
    },
})