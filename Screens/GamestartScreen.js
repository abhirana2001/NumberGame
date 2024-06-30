import { Text, View, StyleSheet, Alert, FlatList, Dimensions, useWindowDimensions, ScrollView } from "react-native"
import Title from "../Components/Title"
import { useEffect, useState } from "react";
import RandamNumber from "../Components/RandamNumber";
import CustomButton from "../Components/CustomButton";
import Card from "../Components/Card";
import Ionicons from '@expo/vector-icons/Ionicons';
import GuessNumberList from "../Components/GuessNumberList";
function GenerateRandomNumber(min, max, exclude) {
    const randomNumber = Math.floor(Math.random() * (max - min)) + min
    if (randomNumber === exclude) {
        return GenerateRandomNumber(min, max, exclude)
    } else {
        return randomNumber
    }
}
;
let minBountry = 1
let maxBoundry = 100

function GamestartScreen({ userNumber, MatchInputValue }) {

    const intaialState = GenerateRandomNumber(1, 100, userNumber)
    const [currentGuess, setcurrentGuess] = useState(intaialState)
    const [guessRounds, setGuessRounds] = useState([intaialState])
    const [dimension, setdimension] = useState({
        window: Dimensions.get("window")
    })


    useEffect(() => {
        const Dimensionsset = Dimensions.addEventListener("change", ({ window }) => {
            setdimension({ window })
        })
        return () => Dimensionsset?.remove()
    }, [])

    const Diminestwidth = useWindowDimensions().width

    useEffect(() => {
        if (currentGuess === userNumber) {
            MatchInputValue(guessRounds.length)
        }
    }, [currentGuess, userNumber, MatchInputValue])

    useEffect(() => {
        minBountry = 1,
            maxBoundry = 100
    }, [])

    function nextGuessHandler(direction) {
        if (
            (direction === 'lower' && currentGuess < userNumber)

            || (direction === 'greater' && currentGuess > userNumber)
        ) {
            Alert.alert(
                "You are lying",
                "you Know this is wrong",
                [{ text: "Okay", style: "cancel" }]
            );
            return
        }

        if (direction === "lower") {
            maxBoundry = currentGuess

        } else {
            minBountry = currentGuess + 1
        }
        const NewRandomNumber = GenerateRandomNumber(minBountry, maxBoundry, currentGuess)
        setcurrentGuess(NewRandomNumber)
        setGuessRounds(newnumber => [NewRandomNumber, ...newnumber])
    }

    const { window } = dimension
    const width = window.width
    const height = window.height

    let Screen = <>
     
        <Title>Opponent's Guess</Title>
        <RandamNumber>{currentGuess}</RandamNumber>
        <View>
            <Card>
                <Text style={styles.Textsetup}>Higher and Lower</Text>
                <View style={styles.ButtonContainer} >
                    <View style={styles.subbutton}>
                        <CustomButton onpress={nextGuessHandler.bind(this, "lower")}>
                            <Ionicons name="remove" size={28} />

                        </CustomButton>
                    </View>
                    <View style={styles.subbutton}>
                        <CustomButton onpress={nextGuessHandler.bind(this, "greater")} >

                            <Ionicons name="add" size={28} />
                        </CustomButton>
                    </View>
                </View>
            </Card>
        </View>
        
    </>

    if (width > 420) {
        Screen = <>
       
          
             
            
                    <Text style={styles.landscapeTextsetup}>Higher and Lower</Text>
                    <View style={styles.landscape}>
                        <View style={styles.landscapeButton} >
                            <CustomButton onpress={nextGuessHandler.bind(this, "lower")}>
                                <Ionicons name="remove" size={28} />
                            </CustomButton>
                        </View>
                        <RandamNumber >{currentGuess}</RandamNumber>
                        <View style={styles.landscapeButton}  >
                            <CustomButton onpress={nextGuessHandler.bind(this, "greater")} >
                                <Ionicons name="add" size={28} />
                            </CustomButton>
                        </View>
                    </View>
                 

                   
          
         
        </>
    }
    return (

        <View style={styles.Container} >
            {/* <Title>Opponent's Guess</Title>
            <RandamNumber>{currentGuess}</RandamNumber>
            <View>
                <Card>
                    <Text style={styles.Textsetup}>Higher and Lower</Text>
                    <View style={styles.ButtonContainer} >
                        <View style={styles.subbutton}>
                            <CustomButton onpress={nextGuessHandler.bind(this, "lower")}>
                                <Ionicons name="remove" size={28}/>
                            
                            </CustomButton>
                        </View>
                        <View style={styles.subbutton}>
                            <CustomButton onpress={nextGuessHandler.bind(this, "greater")} >

                            <Ionicons name="add" size={28}/>
                            </CustomButton>
                        </View>
                    </View>
                </Card>
            </View> */}
            {Screen}
            <View style={styles.Flatlistitem} >
                <FlatList data={guessRounds} renderItem={(itemlist) => {
                    return <GuessNumberList Guessno={itemlist.item} RoundIndex={guessRounds.length - itemlist.index} />
                }} />
            </View>
        </View>

    )
}

export default GamestartScreen

const styles = StyleSheet.create({
    scorllviews: {
        flex: 1
    },
    Container: {
        flex: 1,
        padding: 16,
        alignItems: "center"
    },

    landscapeTextsetup: {
        marginTop: 20,
        fontFamily: "open-sans-bold",
        fontSize: 20
    },
    landscape: {
        flexDirection: "row",
        marginTop: 30
    },
    landscapeButton: {
        marginTop: 50
    },
    subbutton: {
        flex: 1
    },
    ButtonContainer: {
        flexDirection: "row",
        padding: 20
    },
    Textsetup: {
        fontSize: 18,
        fontWeight: "bold"
    },
    Flatlistitem: {
        flex: 1,
        padding: 16
    }
})

