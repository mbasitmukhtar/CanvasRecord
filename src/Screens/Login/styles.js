import { StyleSheet } from "react-native";
import { color } from "react-native-reanimated";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    header: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    footer: {
        flex: 3,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        backgroundColor: "#fff",
        padding: 20,
    },

    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30,
        padding: 20,
    },

    footer_heading: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 30
    },

    text_footer: {
        color: '#05375a',
        fontSize: 18,
    },

    inputStyle: {
        width: '100%',
        marginBottom: 15,
        alignSelf: "center",
        borderColor: "#000",
        borderBottomWidth: 1,
        color: "#000"
    },
    loginText: {
        color: '#3740FE',
        marginTop: 25,
        textAlign: 'center'
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

    image: {
        flex: 1,
        justifyContent: "center"
    },
});

export default styles