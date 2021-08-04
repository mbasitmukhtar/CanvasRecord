import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Button, Image, FlatList, ImageBackground, ActivityIndicator } from 'react-native';
import styles from './styles'
import firebase from '../../database/firebase';
import { data } from '../../utils/data'

const numColumns = 2;

export default class MainScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            isLoading: false,
            items: []
        }
    }

    componentDidMount() {
        this.getDataFromAPI()
    }

    signOut = () => {
        firebase.auth().signOut().then(() => {
            // this.props.navigation.navigate('Login')
        })
            .catch(error => this.setState({ errorMessage: error.message }))
    }

    getDataFromAPI = () => {
        // console.log(data)
        // const theData = JSON.stringify(data);
        // console.log(theData)

        this.setState({ items: data.quiz })
        console.log(this.state.items)
    }

    // getDataFromAPI = async () => {
    //     const endpoint = 'https://jsonplaceholder.typicode.com/photos?_limit=7'
    //     const res = await fetch(endpoint)
    //     const data = await res.json()
    //     this.setState({ items: data })
    // }

    formatData = (items, numColumns) => {
        const numberOfFullRows = Math.floor(items.length / numColumns)

        let numberOfElementsLastRow = items.length - (numberOfFullRows * numColumns)
        while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
            const idVal = "blank- ${numberOfElementsLastRow}"

            items.push({
                questionId: idVal,
                empty: true,
            })
            numberOfElementsLastRow = numberOfElementsLastRow + 1
        }

        return items;
    }

    goToNextScreen = (url) => {
        this.props.navigation.navigate('CanvasScreen', { imageUrl: url });
    }

    _renderItem = ({ item, index }) => {
        if (item.empty === true) {
            return (
                <View style={styles.cardInvisible}>
                    {/* <TouchableOpacity style={styles.cardInvisible}>
                    </TouchableOpacity> */}
                </View>
            )
        }
        return (
            <View style={styles.card}>
                <TouchableOpacity style={styles.cardContainer} onPress={() => this.goToNextScreen(item.questionImg)}>
                    <Image style={styles.cardImage} source={{ uri: item.questionImg }}></Image>
                </TouchableOpacity>
                <Text style={styles.cardText}>Question {item.questionNumber}</Text>
            </View>
        )
    }

    render() {
        let { items } = this.state
        if (items.length === 0) {
            return (
                <View style={styles.loader}>
                    <ActivityIndicator size='large' />
                </View>
            )
        }
        return (
            <ImageBackground source={require('../../images/bgsplash.png')} style={styles.main} >
                <View style={styles.container}>
                    <FlatList
                        numColumns={numColumns}
                        style={styles.listContainer}
                        data={this.formatData(items, numColumns)}
                        // data={items}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={this._renderItem}
                    />

                    <Button
                        color="#3740FE"
                        title="Logout"
                        onPress={() => this.signOut()}
                    />
                </View>
            </ImageBackground>
        );
    }
}