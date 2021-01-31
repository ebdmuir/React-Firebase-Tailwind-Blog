import React from 'react'
import {Route, Switch,withRouter} from "react-router-dom";
import {connect} from "react-redux";
import NewArticle from "./NewArticle/NewArticle";
import ListArticle from "./ListArticle/ListArticle";



const AdminRouter = (props) => {
    return(
        <Switch>
            <Route path={"/:lang/admin/list-article"} exact>
                <ListArticle/>
            </Route>
            <Route path={"/:lang/admin/new-article"} >
                <NewArticle/>
            </Route>
            <Route path={"/:lang/admin/edit-article/:aid"} >
                <NewArticle/>
            </Route>
        </Switch>
    )
}

const enhance = connect(
    ({firebase: {auth, profile}}) => ({
        auth,
        profile
    })
)

export default enhance(withRouter(AdminRouter))