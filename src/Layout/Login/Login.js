import React,{useState, useEffect} from 'react'
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import firebase from "../../Config/firebase";
import {uiConfig, isAuth, logout} from "../../Utils/FirebaseUtils";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"

const Login = (props) => {

    useEffect(() => {
        if(isAuth(props.auth)){
           props.history.push("/" + (localStorage.getItem("i18n-lang") === "en" ? "en" : "hk") +"/blog")
        }
    },[props.auth])


    return(
        <div>
            <StyledFirebaseAuth
                uiConfig={uiConfig}
                firebaseAuth={firebase.auth()}
            />
        </div>
    )
}
const enhance = connect(
    ({firebase: {auth, profile}}) => ({
        auth,
        profile
    })
)

export default enhance(withRouter(Login))
