import React, { Component } from 'react'
import { View, Text, Image, ImageBackground, TextInput, Button, ActivityIndicator } from 'react-native'
import styles from './styles'
import firebase from '../../database/firebase';

export default class Signup extends Component {

    constructor() {
        super();
        this.state = {
            displayName: '',
            email: '',
            password: '',
            isLoading: false
        }
    }

    updateInputVal = (val, prop) => {
        const state = this.state;
        state[prop] = val;
        this.setState(state);
    }

    registerUser = () => {
        if (this.state.email === '' && this.state.password === '') {
            Alert.alert('Enter details to signup!')
        } else {
            this.setState({
                isLoading: true,
            })
            firebase
                .auth()
                .createUserWithEmailAndPassword(this.state.email, this.state.password)
                .then((res) => {
                    res.user.updateProfile({
                        displayName: this.state.displayName
                    })
                    console.log('User registered successfully!')
                    this.setState({
                        isLoading: false,
                        displayName: '',
                        email: '',
                        password: ''
                    })
                    this.props.navigation.navigate('Login')
                })
                .catch(error => this.setState({ errorMessage: error.message }))
        }
    }

    render() {

        if (this.state.isLoading) {
            return (
                <View style={styles.preloader}>
                    <ActivityIndicator size="large" color="#9E9E9E" />
                </View>
            )
        }
        return (
            <ImageBackground source={require('../../images/bgsplash.png')} style={styles.container} >

                <View style={styles.header}>
                    <Text style={styles.text_header}>Welcome</Text>
                </View>


                <View style={styles.footer}>
                    <Text style={styles.footer_heading}>Register</Text>
                    <View style={styles.container}>
                        <TextInput
                            style={styles.inputStyle}
                            placeholder="Name"
                            placeholderTextColor="#ccc"
                            value={this.state.displayName}
                            onChangeText={(val) => this.updateInputVal(val, 'displayName')}
                        />
                        <TextInput
                            style={styles.inputStyle}
                            placeholder="Email"
                            placeholderTextColor="#ccc"
                            autoCapitalize="none"
                            value={this.state.email}
                            onChangeText={(val) => this.updateInputVal(val, 'email')}
                        />
                        <TextInput
                            style={styles.inputStyle}
                            placeholder="Password"
                            autoCapitalize="none"
                            placeholderTextColor="#ccc"
                            value={this.state.password}
                            onChangeText={(val) => this.updateInputVal(val, 'password')}
                            maxLength={15}
                            secureTextEntry={true}
                        />
                        <Button
                            color="#3740FE"
                            title="Signup"
                            onPress={() => this.registerUser()}
                        />

                        <Text
                            style={styles.loginText}
                            onPress={() => this.props.navigation.navigate('Login')}>
                            Already Registered? Click here to login
                        </Text>
                    </View>
                </View>

            </ImageBackground>
        )
    }
};