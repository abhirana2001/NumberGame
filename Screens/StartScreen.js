import React, { useState } from 'react'
import { View, StyleSheet, TextInput, Alert, Text, KeyboardAvoidingView } from 'react-native'
import CustomButton from '../Components/CustomButton'
import Colors from '../Constent/CustomCss'
import Title from '../Components/Title'
import Card from '../Components/Card'


function StartScreen({ onInputSubmit }) {
    const [inputValue, setInputValue] = useState("")

    function handleInputValue(inputValue) {
        setInputValue(inputValue)
    }
    function handleRestValue() {
        setInputValue("")
    }
    function handleSubmitConfirm() {

        const ContertIntoNumber = parseInt(inputValue)
        console.log(ContertIntoNumber);
        if (isNaN(ContertIntoNumber) || ContertIntoNumber <= 0 || ContertIntoNumber > 99) {
            Alert.alert(
                "Invalid Number", "Number Always will smaller than 99",
                [{ text: "okey", style: "destructive", onPress: handleRestValue }]
            )
        }
        onInputSubmit(ContertIntoNumber)
    }
    return (
       
        <View style={styles.rootcontainer}>
            <Title >Guess a Number</Title>
            <View>

                <Card style={styles.card}>
                    <Text style={styles.Textsetup}>Enter Your Number</Text>
                    <TextInput
                        style={styles.InputText}
                        maxLength={2}
                        keyboardType="number-pad"
                        value={inputValue}
                        onChangeText={handleInputValue}
                    />
                    <View style={styles.CustomButton}>
                        <View style={styles.subbutton} >
                            <CustomButton  >Reset</CustomButton>
                        </View>
                        <View style={styles.subbutton}>
                            <CustomButton onpress={handleSubmitConfirm}>Confirm</CustomButton>
                        </View>
                    </View>
                </Card>
            </View>
        </View>
  
    )
}

export default StartScreen

const styles = StyleSheet.create({
    
    rootcontainer: {
        marginTop: 60,
        padding: 26,
    
    },
    Textsetup: {
        fontSize: 18,
        fontFamily: "open-sans-bold"
    },

    InputText: {
        marginVertical: 8,
        fontSize: 32,
        height: 50,
        width: 50,
        fontWeight: "bold",
        borderColor: "#333333",
        borderBottomWidth: 1,
        color: "#333333",
        textAlign: "center",

    },
    CustomButton: {
        flexDirection: "row",
        justifyContent: "center",
        alignContent: "center",
        margin: 5

    },
    subbutton: {
        flex: 1

    },
    card:{
        marginLeft:40
    }

})