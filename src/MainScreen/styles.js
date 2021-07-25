import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    main: {
        flex: 1,
    },

    container: {
        flex: 1,
        margin: 5,
        paddingTop: '10%',
    },

    loader: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    card: {
        flex: 1,
        margin: 10,
    },

    cardContainer: {
        padding: 10,
        backgroundColor: '#fff',
        borderColor: '#000',
        borderRadius: 20,
        width: '100%',
    },

    cardInvisible: {
        flex: 1,
        padding: 10,
        margin: 10,
        backgroundColor: 'transparent'
    },

    cardText: {
        fontSize: 16,
        paddingTop: 10,
        color: '#fff'
    },

    cardImage: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
        borderColor: '#000',
        borderRadius: 20,
    },
});

export default styles