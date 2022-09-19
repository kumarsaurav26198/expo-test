import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import CustomButton from '../../../components/common/CustomButton';


export default function LoginScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onPressLogin = () => {

        if (email.length <= 0 || password.length <= 0)
        {
            Alert.alert('Please fill out the required fields.');
        } else
        {
            navigation.navigate("ProductScreen");
        }
    };
    return (
        <View style={styles.container}>
            <Text style={[styles.title, styles.leftTitle]}>Sign In</Text>
            <View style={styles.InputContainer}>
                <TextInput
                    style={styles.body}
                    placeholder="E-mail or phone number"
                    onChangeText={setEmail}
                    value={email}
                    placeholderTextColor='grey'
                    underlineColorAndroid="transparent"
                />
            </View>
            <View style={styles.InputContainer}>
                <TextInput
                    style={styles.body}
                    secureTextEntry={true}
                    placeholder="Password"
                    onChangeText={setPassword}
                    value={password}
                    placeholderTextColor="grey"
                    underlineColorAndroid="transparent"
                />
            </View>
            <View style={styles.loginContainer}>
                <CustomButton title={"  Log in"} onPress={onPressLogin} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: "#ff5a66",
        marginTop: 20,
        marginBottom: 20,
    },
    leftTitle: {
        alignSelf: 'stretch',
        textAlign: 'left',
        marginLeft: 20,
    },
    InputContainer: {
        width: "80%",
        marginTop: 30,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: "grey",
        borderRadius: 25,
    },
    body: {
        height: 42,
        paddingLeft: 20,
        paddingRight: 20,
        color: "#696969",
    },
    loginContainer: {
        width: "80%",
        backgroundColor: "#ff5a66",
        borderRadius: 25,
        padding: 10,
        marginTop: 30,
        width: "85%"

    },
});