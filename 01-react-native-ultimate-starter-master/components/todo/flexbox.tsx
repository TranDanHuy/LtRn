import { StyleSheet, Text, View } from "react-native"

const styles =  StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 40,
        borderWidth: 1,
        borderColor: "red",
        flexDirection: "column",
        justifyContent: "center",
        //alignItems: "center"



        //justifyContent: "center",
        //flexDirection:  "row",
        //alignItems: "center"


    },
    item1: {
        flex: 4,
        padding: 20,
        borderWidth: 1,
        backgroundColor: "green",
        //height: 150,
        width: 60,

    },
    item2: {
        flex: 1,
        padding: 20,
        borderWidth: 1,
        backgroundColor: "violet",
        height: 200,
        width: 30,
    },
    item3: {
        flex: 1,
        padding: 20,
        borderWidth: 1,
        backgroundColor: "blue",
        height: 100,
        width: 100
    },
    item4: {
        padding: 20,
        borderWidth: 1,
       backgroundColor: "yellow",

        
    }
})
const FlexBox = () => {
    return (
        <View style={styles.container}>
            <View style={styles.item1}>
                <Text>Item 1</Text>
            </View>
            <View style={styles.item2}>
                <Text>Item 2</Text>
            </View>
            <View style={styles.item3}>
                <Text>Item 3</Text>
            </View>
            <View style={styles.item4}>
                <Text>Item 4</Text>
            </View>
        </View>
    )
}
export default FlexBox;