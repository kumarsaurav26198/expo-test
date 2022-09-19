import * as React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, ProductScreen } from "../pages/afterlogin/index";
import { LoginScreen, SignUpScreen } from "../pages/beforelogin/index";

const Stack = createNativeStackNavigator();

function AppNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="HomeScreen" component={HomeScreen}
                    options={{
                        title: 'Home',
                        headerTitleStyle: styles.headerTitle,
                        headerBackVisible: true,
                        headerRight: () => <Text>Cart</Text>,
                        headerStyle: styles.headerStyle,
                    }}
                />
                <Stack.Screen name="ProductScreen" component={ProductScreen}
                    options={{
                        title: ' Product',
                        headerTitleStyle: styles.headerTitle,
                        headerBackVisible: true,
                        headerRight: () => <Text>Cart</Text>,
                        headerStyle: styles.headerStyle,

                    }} />
                <Stack.Screen name="LoginScreen" component={LoginScreen}
                    options={{
                        title: 'Login',
                        headerTitleStyle: styles.headerTitle,
                        headerBackVisible: true,
                        headerStyle: styles.headerStyle,
                    }} />
                <Stack.Screen name="SignUpScreen" component={SignUpScreen}
                    options={{
                        title: '',
                        headerBackVisible: true,
                        // headerStyle: styles.headerStyle,
                    }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigation;

// const Stack = createNativeStackNavigator();

// const screenOptions = {
//     headerShown: true,
// };

// export const SignedInStack = () => {
//     return (
//         <NavigationContainer>
//             <Stack.Navigator
//                 initialRouteName='HomeScreen'
//                 screenOptions={screenOptions}
//             >
//                 <Stack.Screen name="HomeScreen" component={HomeScreen} />
//                 <Stack.Screen name="ProductScreen" component={ProductScreen} />
//             </Stack.Navigator>
//         </NavigationContainer>
//     );
// };


// export const SignedOutStack = () => {
//     return (
//         <NavigationContainer>
//             <Stack.Navigator
//                 initialRouteName='LoginScreen'
//                 screenOptions={screenOptions}
//             >
//                 <Stack.Screen name="LoginScreen" component={LoginScreen}
//                     options={{
//                         title: 'Login',
//                         headerTitleStyle: styles.headerTitle,
//                         headerBackVisible: true,
//                         headerStyle: styles.headerStyle,
//                     }}
//                 />
//                 <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
//             </Stack.Navigator>
//         </NavigationContainer>
//     );
// };


const styles = StyleSheet.create({
    headerTitle: {
        fontSize: 20
    },
    headerTitleStyle: {
        fontWeight: 'bold',
        textAlign: 'center',
        alignSelf: 'center',
        color: 'black',
    },
    headerStyle: {
        backgroundColor: '#f4511e',
    },
});