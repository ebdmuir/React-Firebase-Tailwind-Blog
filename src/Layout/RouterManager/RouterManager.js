import React, {useState, useEffect} from 'react'
import {BrowserRouter, Route, Switch, withRouter} from "react-router-dom";
import {supportedLanguages} from "../../Assets/i18n/i18n";
import {connect} from "react-redux";
import {useTranslation} from "react-i18next";
import firebase from "firebase";

import Heading from "../../Layout/Heading/Heading";
import Quotation from "../Quotation/Quotation";
import Homepage from "../HomePage/Homepage";
import Footer from "../Footer/Footer";
import Design from "../Pages/Design/Design";
import Blog from "../Pages/Blog/Blog";
import AdminRouter from "../AdminRouter/AdminRouter";
import ArticleDisplay from "../ArticleDisplay/ArticleDisplay";
import Login from "../Login/Login";

const AdminOnly = (ComposedComponent, auth) => {

    const AdminOnlyClass = (props) => {
        const [isPass, setIsPass] = useState(false)

        useEffect(() => {
            if (typeof auth !== 'undefined' && !auth.isEmpty ) {
                firebase.auth().currentUser.getIdTokenResult()
                    .then((idTokenResult) => {
                        if (idTokenResult.claims.type === "administrator") {
                            setIsPass(true)
                        }
                    })
            } else {
                props.history.push("/" + (localStorage.getItem("i18n-lang") === "en" ? "en" : "hk") + "/login")
                setIsPass(false)
            }
        },[auth])

        if (isPass) {
            return <ComposedComponent location={props.location} history={props.history}
                                      auth={props.auth}/>
        } else {
            return (
                <div>
                    Checking...
                </div>
            )
        }

    }
    return AdminOnlyClass


}

const RouterManager = (props) => {
    const {t, i18n} = useTranslation()
    const [currentLang,setCurrentLang] = useState("hk")

    useEffect(() => {
       if(props.location.pathname.split("/").length > 0 && props.location.pathname.split("/")[1] !== ""){
           const langCode = props.location.pathname.split("/")[1]
           i18n.changeLanguage(langCode)
           localStorage.setItem('i18n-lang', langCode);
       }
       else{
           //set Default language to hk
           localStorage.setItem('i18n-lang', "hk");
           props.history.push('/hk')
       }

    }, [])



    return (
        <>
                <header className="bg-white shadow">
                    <Heading/>
                </header>
                <main className="mt-32 ">
                    <Switch>
                        <Route path={"/:lang"} exact>
                            <Homepage/>
                        </Route>
                        <Route path={"/:lang/web"} exact>

                        </Route>
                        <Route path={"/:lang/android"} exact>

                        </Route>
                        <Route path={"/:lang/ios"} exact>

                        </Route>
                        <Route path={"/:lang/design"} exact>
                            <Design/>
                        </Route>
                        <Route path={"/:lang/blog"} exact>
                            <Blog/>
                        </Route>
                        <Route path={"/:lang/login"} exact>
                            <Login/>
                        </Route>
                        <Route path={"/:lang/quotation"} exact>
                            <Quotation/>
                        </Route>
                        <Route path={"/:lang/article/:id"} exact>
                            <ArticleDisplay/>
                        </Route>

                        <Route path="/:lang/admin" component={AdminOnly(AdminRouter, props.auth)}>
                        </Route>
                    </Switch>
                </main>
                <footer className="mt-16">
                    <Footer/>
                </footer>

        </>

    )
}

// const mapDispatchToProps = dispatch => {
//     return {
//     };
// };

const mapStateToProps = state => {
    return {
        auth: state.firebase.auth
    }

}

const enhance = connect(
    mapStateToProps,
    // mapDispatchToProps
)

export default enhance(withRouter(RouterManager))