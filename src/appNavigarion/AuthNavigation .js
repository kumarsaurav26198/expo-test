import React from 'react';
// import { useEffect, useState } from 'react';
// import { SignedInStack, SignedOutStack } from './Navigation';
// import { auth } from '../Firebase/firebaseConfig';
import AppNavigation from './AppNavigation';

const AuthNavigation = () => {

    // const [currentUser, setCurrentUser] = useState(null);

    // const userHandler = user => user ? setCurrentUser(user) : setCurrentUser(null);

    // useEffect(() => {
    //     return auth.onAuthStateChanged((user) => userHandler(user));
    // }, []);

    return (
        <>
            {/* {currentUser ? <SignedInStack /> : <SignedOutStack />} */}
            <AppNavigation />
        </>
    );
};

export default AuthNavigation;