import React, {useEffect, useState} from 'react'
import ArticleCard from "./ArticleCard/ArticleCard";
import firebaseRef from "../../../Config/firebase";
import {Trans, useTranslation} from "react-i18next";
import {Helmet} from "react-helmet";
import {isAuth} from "../../../Utils/FirebaseUtils";
import {connect} from "react-redux";
import {Link, withRouter} from "react-router-dom";

const db = firebaseRef.firestore()
const Blog = (props) => {
    const {t, i18n} = useTranslation()
    const [articles, setArticles] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)
    const [noArticle, setNoArticle] = useState(false)

    useEffect(() => {

        db.collection('Article')
            .limit(8)
            .where("isPublish", "==", true)
            .get()
            .then(docs => {

                if (!docs.empty) {
                    let allArticle = []
                    docs.forEach(doc => {
                        allArticle.push({
                            ...doc.data(),
                            id: doc.id
                        })
                    })
                    setArticles(allArticle)
                    setIsLoaded(true)
                } else {
                    setNoArticle(true)
                    setIsLoaded(true)
                }
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <>
            <Helmet>
                <title>{t("Blog.title")}</title>
                <link rel="alternate"
                      href={"https://childnoder.com/" + (localStorage.getItem("i18n-lang") === "en" ? "hk" : "en") + '/blog'}
                      hrefLang={(localStorage.getItem("i18n-lang") === "en" ? "zh-Hant" : "en")}/>
                <meta property="fb:app_id" content="1293953327456577"/>
                <meta property="og:type" content="website"/>
                <meta property="site_name" content="childnoder"/>
                <meta property="title" content={t("Blog.title")}/>
                <meta name="description"
                      content={t("Blog.description")}/>
                <meta name="keywords"
                      content={t("Blog.keywords")}/>
                <meta property="og:title" content={t("Blog.title")}/>
                <meta property="og:description" content={t("Blog.description")}/>
                <meta property="og:image"
                      content="https://images.unsplash.com/photo-1506878206813-92402b8ded23?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1280&q=80"/>
                <meta property="og:url" content="https://childnoder.com"/>

            </Helmet>
            <div className="max-w-screen-lg mx-auto">
                <div className="flex flex-wrap md:flex-no-wrap space-x-0 md:space-x-6 mb-16">

                    <div className="my-2 lg:mb-0  p-4 lg:p-0 w-full md:w-4/7 relative rounded block">
                        <img
                            src="https://images.unsplash.com/photo-1506878206813-92402b8ded23?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80"
                            className="rounded-md object-cover w-full h-72 lazyload"
                            alt="web,developer"
                        />
                        <span className="text-green-700 text-sm hidden md:block mt-4">
                         <Trans>Blog.learn-new-trend</Trans>
                        </span>
                        <h1 className="text-gray-800 text-4xl font-bold mt-2 mb-2 leading-tight">
                            <Trans>Blog.get-start-now</Trans>
                        </h1>
                        <p className="text-gray-600 mb-4">
                            <Trans>Blog.get-start-now-des</Trans>
                        </p>
                        <a href="https://clipversity.com/home/course"
                           className="inline-block px-6 py-3 mt-2 rounded-md bg-green-700 text-gray-100">
                            <Trans>Blog.learn-more</Trans>
                        </a>
                    </div>


                </div>


                <div className="flex mt-16 mb-4 px-4 lg:px-0 items-center justify-between">
                    <div>
                        <h2 className="font-bold text-3xl inline-block">
                            <Trans>Blog.our-article</Trans>
                        </h2>
                        {
                            isAuth(props.auth) &&
                            <Link
                                to={"/" + (localStorage.getItem("i18n-lang") === "en" ? "en" : "hk") + "/admin/new-article"}>
                                <button className="rounded mx-4 py-2 px-4 bg-gray-100 text-gray-900 inline-block">
                                    <Trans>Blog.new-article</Trans>
                                </button>
                            </Link>

                        }
                    </div>

                    <a className="bg-gray-200 hover:bg-green-200 text-gray-800 px-3 py-1 rounded cursor-pointer">
                        <Trans>Blog.view-all</Trans>
                    </a>
                </div>
                <div className="block space-x-0 lg:flex lg:space-x-6">

                    {
                        isLoaded ?
                            articles.map((a, index) => {
                                if (index < 3)
                                    return (
                                        <ArticleCard key={'article' + index} data={a}/>
                                    )
                            })
                            :
                            "loading"
                    }

                </div>


                {/*<div className="rounded flex md:shadow mt-12">*/}
                {/*    <img*/}
                {/*        src="https://images.unsplash.com/photo-1579275542618-a1dfed5f54ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"*/}
                {/*        className="w-0 md:w-1/4 object-cover rounded-l"/>*/}
                {/*    <div className="px-4 py-2">*/}
                {/*        <h3 className="text-3xl text-gray-800 font-bold">Subscribe to newsletter</h3>*/}
                {/*        <p className="text-xl text-gray-700">We sent latest news and posts once in every week, fresh from*/}
                {/*            the oven</p>*/}
                {/*        <form className="mt-4 mb-10">*/}
                {/*            <input type="email" className="rounded bg-gray-100 px-4 py-2 border focus:border-green-400"*/}
                {/*                   placeholder="john@tech.com"/>*/}
                {/*            <button className="px-4 py-2 rounded bg-green-800 text-gray-100">*/}
                {/*                Subscribe*/}
                {/*                <i className='bx bx-right-arrow-alt'></i>*/}
                {/*            </button>*/}
                {/*            <p className="text-green-900 opacity-50 text-sm mt-1">No spam. We promise</p>*/}
                {/*        </form>*/}
                {/*    </div>*/}
                {/*</div>*/}

                <div className="block space-x-0 lg:flex lg:space-x-6">

                    {
                        isLoaded ?
                            articles.map((a, index) => {
                                if (index >= 3)
                                    return (
                                        <ArticleCard key={'article' + index} data={a}/>
                                    )
                            })
                            :
                            "loading"
                    }

                </div>

            </div>
        </>
    )
}

const enhance = connect(
    ({firebase: {auth, profile}}) => ({
        auth,
        profile
    })
)

export default enhance(withRouter(Blog))