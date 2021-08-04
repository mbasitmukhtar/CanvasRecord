import React, { Component } from 'react';
import { ImageBackground, Text, View, TextInput, Button, Alert, ActivityIndicator } from 'react-native';
import styles from './styles'
import firebase from '../../database/firebase';


export default class Login extends Component {

    constructor() {
        super();
        this.state = {
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

    userLogin = () => {
        if (this.state.email === '' && this.state.password === '') {
            Alert.alert('Enter details to Sign In!')
        } else {
            this.setState({
                isLoading: true,
            })
            firebase
                .auth()
                .signInWithEmailAndPassword(this.state.email, this.state.password)
                .then((res) => {
                    console.log(res)
                    console.log('User logged-in successfully!')
                    this.setState({
                        isLoading: false,
                        email: '',
                        password: ''
                    })

                    // this.props.navigation.navigate('MainScreen')
                })
                .catch(error => {
                    this.setState({ errorMessage: error.message });
                    this.setState({
                        isLoading: false,
                        email: '',
                        password: ''
                    })
                    Alert.alert('Please enter correct credentials');
                })
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
                    <Text style={styles.footer_heading}>Log In</Text>

                    <TextInput
                        style={styles.inputStyle}
                        placeholder="Email"
                        autoCapitalize="none"
                        placeholderTextColor="#ccc"
                        value={this.state.email}
                        onChangeText={(val) => this.updateInputVal(val, 'email')}
                    />
                    <TextInput
                        style={styles.inputStyle}
                        autoCapitalize="none"
                        placeholder="Password"
                        placeholderTextColor="#ccc"
                        value={this.state.password}
                        onChangeText={(val) => this.updateInputVal(val, 'password')}
                        maxLength={15}
                        secureTextEntry={true}
                    />
                    <Button
                        color="#3740FE"
                        title="Sign In"
                        onPress={() => this.userLogin()}
                    />

                    <Text
                        style={styles.loginText}
                        onPress={() => this.props.navigation.navigate('Register')}>
                        Don't have account? Click here to Sign Up
                    </Text>
                </View>
            </ImageBackground>

        );
    }
}