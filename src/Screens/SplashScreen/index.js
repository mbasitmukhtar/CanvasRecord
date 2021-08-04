import React, { Component, useEffect } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import firebase from '../../database/firebase';
import styles from './styles'


export default class SplashScreen extends Component {

    constructor() {
        super();
        this.state = {
            isLoggedIn: false
        }
        // this.checkAuthState();
        this.startTimer();
    }

    startTimer = () => {
        this.interval = setInterval(
            () => {
                this.props.navigation.navigate("Login")
            },
            1000
        );
    }

    checkAuthState = () => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                var uid = user.uid;
                this.setState({
                    isLoggedIn: true
                })
                this.props.navigation.navigate('MainScreen');

            } else {
                this.setState({
                    isLoggedIn: false
                })
                firebase.auth().signOut();
                this.props.navigation.navigate('Login');

            }
        });
    }


    render() {
        return (
            <View style={styles.container}>
                <Image
                    source={require('../../images/bgsplash.png')}
                />
            </View>
        );
    }
}