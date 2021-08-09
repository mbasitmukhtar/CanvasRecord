import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    imageContainer: {
        height: '80%',
        width: '80%'
    },

    preloader: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    },

    headerText: {
        fontSize: 20,
        textAlign: "center",
        margin: 10,
        fontWeight: "bold"
    },
    strokeColorButton: {
        marginHorizontal: 2.5, marginVertical: 8, width: 30, height: 30,
        // borderRadius: 15,
    },
    strokeWidthButton: {
        marginHorizontal: 2.5, marginVertical: 8, width: 95, height: 30,
        // borderRadius: 15,
        justifyContent: 'center', alignItems: 'center', backgroundColor: '#39579A'
    },

    strokeWidthComponentStyle: {
        // backgroundColor: 'white', marginHorizontal: 2.5,
        // width: Math.sqrt(w / 3) * 10, height: Math.sqrt(w / 3) * 10, borderRadius: Math.sqrt(w / 3) * 10 / 2
    },

    functionButton: {
        marginHorizontal: 2.5, marginVertical: 8, height: 30, width: 60,
        backgroundColor: '#39579A',
        justifyContent: 'center',
        alignItems: 'center',
        // borderRadius: 5,
    },

    functionButtonZero: {
        height: 0,
        // marginHorizontal: 2.5, marginVertical: 8, height: 0, width: 60,
        // backgroundColor: '#39579A',
        // justifyContent: 'center',
        // alignItems: 'center',
        // borderRadius: 5,
    },

    bottomRow: {
        padding: 20,
        justifyContent: 'center',
        height: 60,
    },

    recordImage: {
        width: 50,
        height: 50,
    },

    videoContainer: {
        flex: 1,
        padding: 20,
        justifyContent: 'center'
    },

    videoPlayer: {
        flex: 1,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },

    button: {
        backgroundColor: '#000',
        padding: 20,
        margin: 20,
    },

    buttonText: {
        color: '#fff',
    },


});

export default styles