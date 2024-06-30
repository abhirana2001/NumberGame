import { StyleSheet,Text } from "react-native"

function Title({children,style}) {
  return (
    <Text style={styles.title} >{children}</Text>
  )
}

export default Title

const styles= StyleSheet.create({
    title: {
        fontSize:24,
     fontFamily:"open-sans-bold",
        borderWidth: 2,
        borderColor: "black",
        marginTop:50,
        padding:20,
        textAlign:"center",
        alignItems:"center"
     
    }
})