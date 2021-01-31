import firebase from "../Config/firebase"
import {isEmpty, isLoaded} from "react-redux-firebase";

export function isHost(){
    return window.location.host === 'childnoder.com'
}

export const uiConfig = {
    signInFlow: "popup",
    signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        // firebase.auth.FacebookAuthProvider.PROVIDER_ID
    ],
    callbacks: {
        signInSuccess: () => {
            this.props.history.push({pathname: "/login"})
        }
    }
}

export function isAuth(auth) {
    return isLoaded(auth) && !isEmpty(auth)
}

export function logout(firebase) {
    firebase.auth().signOut()
        .then(function () {
            // Sign-out successful.
        })
        .catch(function (error) {
            // An error happened
        });
}