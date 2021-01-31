import React, {useState} from 'react'
import Menu from "./Menu/Menu";
import MyCart from "./MyCart/MyCart";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {SUPPORTED_FUNCTIONS} from "../../Utils/FunctionList";
import {Trans, useTranslation} from "react-i18next";
import SubmitForm from "./SubmitForm/SubmitForm";
import {Helmet} from "react-helmet";

const Quotation = (props) => {
    const {t, i18n} = useTranslation()

    return (
        <>
            <Helmet>
                <title>{t("Quotation.title")}</title>
                <meta property="fb:app_id" content="1293953327456577"/>
                <meta property="og:type" content="website"/>
                <meta property="site_name" content="childnoder"/>
                <meta property="title" content={t("Quotation.title")}/>
                <meta name="description"
                      content={t("Quotation.description")}/>
                <meta name="keywords"
                      content={t("Quotation.keywords")}/>
                <meta property="og:title" content={t("Quotation.title")}/>
                <meta property="og:description" content={t("Quotation.description")}/>
                {/*<meta property="og:image" content="https://imgur.com/a/hnvoqTG"/>*/}
                <meta property="og:url" content="https://childnoder.com"/>

                {/*<script type="application/ld+json">*/}
                {/*    {JSON.stringify(ldJson)}*/}
                {/*</script>*/}
            </Helmet>

            <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <div className="mt-8 mb-4">
                    <h1 className="text-3xl text-indigo-600 font-bold">
                        <Trans>Heading.quotation</Trans>
                    </h1>
                </div>
                <div className="px-4 py-6 sm:px-0">
                    <div className="sm:grid md:flex lg:flex xl:flex gap-4 ">
                        <div className="sm:grid-rows-1 md:flex-grow lg:flex-grow lx:flex-grow ">
                            <Menu
                                selectedItem={props.selectedItem}
                                addToCart={props.addToCart}
                                removeFromCart={props.removeFromCart}
                            />
                        </div>
                        <div className="sm:grid-rows-1  md:flex-grow-0 lg:flex-grow-0 lx:flex-grow-0 mt-4 md:mt-0">
                            <div className="w-full mx-auto ">
                                <div className="flex justify-center pb-10 ">
                                    <div className="w-full">
                                        <div className="bg-white shadow-md rounded-lg px-3 py-2 mb-4">
                                            <MyCart
                                                selectedItem={props.selectedItem}
                                                removeFromCart={props.removeFromCart}
                                            />
                                            <hr/>

                                            <SubmitForm
                                                selectedItem={props.selectedItem}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
const mapDispatchToProps = dispatch => {
    return {
        addToCart: (state) => dispatch({
            type: SUPPORTED_FUNCTIONS.ADD_TO_CART,
            item: state
        }),
        removeFromCart: (state) => dispatch({
            type: SUPPORTED_FUNCTIONS.REMOVE_FROM_CART,
            itemID: state
        })
    }
}
const mapStateToProps = state => {
    return {
        selectedItem: state.QuotationManager.selectedItem,
        auth: state.firebase.auth
    }

}

const enhance = connect(
    mapStateToProps,
    mapDispatchToProps
)

export default enhance(withRouter(Quotation))