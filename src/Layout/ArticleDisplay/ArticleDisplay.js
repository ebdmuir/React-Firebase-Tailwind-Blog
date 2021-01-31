import React, {useEffect, useState} from 'react'
import parse from 'html-react-parser';
import {
    timeStampToString,
    timestraptoIOStime,
    contentLangConverter,
    titleLangConverter,
    restructureContent,
} from "../../Utils/Converter";
import { withRouter} from "react-router-dom";
import {Helmet} from "react-helmet";
import {useTranslation} from "react-i18next";
import firebaseRef from "../../Config/firebase";
import ReactQuillDisplayCss from '../../Utils/ReactQuillDisplay.module.css'
import ShareContainer from "../../Component/ShareContainer/ShareContainer";
import ContentLoader from "react-content-loader"

const articleTag = ["PWA", "網頁製作", "漸進式網絡應用程式", "跨平台", "開發PWA"]

const db = firebaseRef.firestore()
const ArticleDisplay = (props) => {
    const {t, i18n} = useTranslation()

    const [article, setArticle] = useState({
        id: '',
        canonicalUrl: '',
        title: '',
        titleCHI: '',
        content: '',
        contentCHI: '',
        thumbnailImage: '',
        featureImage: '',
        isPublish: false,
        createDate: new Date(),
        lastModified: new Date(),
        createUserName: 'childnoder'
    })
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {

        if (typeof props.location.state !== 'undefined') {
            //from article card
            setArticle({
                ...props.location.state.article
            })
            setIsLoaded(true)
        } else {
            const articleID = props.location.pathname.split("/" + (localStorage.getItem("i18n-lang") === "en" ? "en" : "hk") + "/article/")[1]
            db.collection('Article')
                .doc(articleID)
                .get()
                .then(doc => {
                    if (doc.exists) {
                        setArticle({...doc.data()})
                        setIsLoaded(true)
                    } else {
                        //if article not found or not yet published
                        props.history.push("/")
                    }
                })
                .catch(err => console.error(err))
        }
    }, [])

    const returnIdJson1 = (article) => {
        return {
            "@context": "https://schema.org",
            "@type": "NewsArticle",
            "image": [
                article.featureImage
            ],
            "url": "https://childnoder.com/" + (localStorage.getItem("i18n-lang") === "en" ? "en" : "hk") + "/article/" + article.id,
            "dateCreated": timestraptoIOStime(article.createDate.seconds),
            "datePublished": timestraptoIOStime(article.hasOwnProperty('publishDate') ? article.publishDate.seconds : article.createDate.seconds),
            "dateModified": timestraptoIOStime(article.lastModified.seconds),
            "headline": titleLangConverter(article, localStorage.getItem("i18n-lang")),
            "name": titleLangConverter(article, localStorage.getItem("i18n-lang")),
            "description": contentLangConverter(article, localStorage.getItem("i18n-lang")),
            "keywords": t("HomePage.keywords"),
            "author": {
                "@type": "Person",
                "name": article.createUserName,
                "url": "https://childnoder.com",
            },
            "creator": {
                "@type": "Organization",
                "name": "Childnoder",
            },
            "publisher": {
                "@type": "Organization",
                "name": t("HomePage.shortname"),
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://childnoder.com/logo.png"
                }
            },
            "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://childnoder.com/" + (localStorage.getItem("i18n-lang") === "en" ? "en" : "hk") + "/article/" + article.id
            },
            "articleBody": contentLangConverter(article, localStorage.getItem("i18n-lang")),
            "genre": 'web development',
        };

    }
    const returnIdJson2 = (article) => {
        return {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Childnoder",
                    "item": {
                        "@type": "WebSite",
                        "@id": "https://childnoder.com",
                        "name": t("HomePage.shortname")
                    }
                },
                {
                    "@type": "ListItem",
                    "position": 2,
                    "name": t("Heading.web-development"),
                    "item": {
                        "@type": "WebSite",
                        "@id": "https://childnoder.com",
                        "name": t("Heading.web-development"),
                    }
                },
                {
                    "@type": "ListItem",
                    "position": 3,
                    "name": titleLangConverter(article, localStorage.getItem("i18n-lang")),
                    "item": {
                        "@type": "WebSite",
                        "@id": "https://childnoder.com/" + (localStorage.getItem("i18n-lang") === "en" ? "en" : "hk") + "/article/" + article.id,
                        "name": titleLangConverter(article, localStorage.getItem("i18n-lang")),
                    }
                }
            ]
        };
    }


    if (isLoaded) {
        return (
            <>
                <Helmet>
                    <title>{titleLangConverter(article, localStorage.getItem("i18n-lang"))}</title>
                    <meta property="fb:app_id" content="1293953327456577"/>
                    <meta property="og:type" content="website"/>
                    <meta property="site_name" content="childnoder"/>
                    <meta property="title" content={titleLangConverter(article, localStorage.getItem("i18n-lang"))}/>
                    <meta name="description"
                          content={contentLangConverter(article, localStorage.getItem("i18n-lang"))}/>
                    <meta name="keywords"
                          content={t("HomePage.keywords")}/>
                    <meta property="og:title" content={titleLangConverter(article, localStorage.getItem("i18n-lang"))}/>
                    <meta property="og:description"
                          content={contentLangConverter(article, localStorage.getItem("i18n-lang"))}/>
                    <meta property="og:image" content={article.featureImage}/>

                    <meta property="og:url"
                          content={"https://childnoder.com/" + (localStorage.getItem("i18n-lang") === "en" ? "en" : "hk") + "/article/" + article.id}/>

                    {
                        article.canonicalUrl !== '' &&
                        <link rel="canonical" href={article.canonicalUrl}/>
                    }


                    <script type="application/ld+json">
                        {JSON.stringify(returnIdJson1(article))}
                    </script>

                    <script type="application/ld+json">
                        {JSON.stringify(returnIdJson2(article))}
                    </script>
                </Helmet>
                <div className="mb-4 md:mb-0 w-full max-w-screen-md mx-auto relative h-full rounded-xl"
                     style={{height: "24em"}}>
                    <div className="absolute left-0 bottom-0 w-full h-full z-10 rounded-xl"
                         style={{backgroundImage: "linear-gradient(180deg,transparent,rgba(0,0,0,.7))"}}></div>
                    <img
                        src={article.featureImage}
                        alt={article.title}
                        className="absolute left-0 top-0 w-full h-full z-0 object-cover rounded-xl "/>
                    <div className="p-4 absolute bottom-0 left-0 z-10">
                        <div
                            className="px-4 py-1 bg-black text-gray-200 inline-flex items-center justify-center mb-2">
                            {article.topic}
                        </div>
                        <h1 className="text-4xl font-semibold text-gray-100 leading-tight">
                            {titleLangConverter(article, localStorage.getItem("i18n-lang"))}
                        </h1>
                        <div className="flex mt-3">
                            {/*<img src="https://randomuser.me/api/portraits/men/97.jpg"*/}
                            {/*     className="h-10 w-10 rounded-full mr-2 object-cover"/>*/}
                            <div>
                                <p className="font-semibold text-gray-200 text-sm"> Childnoder </p>
                                <p className="font-semibold text-gray-400 text-xs">
                                    {timeStampToString(article.lastModified.seconds)}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="px-4 lg:px-0 mt-4 text-gray-700 max-w-screen-md mx-auto text-lg leading-relaxed text-right">
                    <ShareContainer
                        url={"https://childnoder.com/" + (localStorage.getItem("i18n-lang") === "en" ? "en" : "hk") + "/article/" + article.id}
                        img={article.featureImage}
                        title={titleLangConverter(article, localStorage.getItem("i18n-lang"))}
                        content={localStorage.getItem("i18n-lang") === 'en' ? article.content : article.contentCHI}
                        tags={articleTag}
                    />
                </div>

                <div
                    className={["px-4 lg:px-0 mt-6 text-gray-700 max-w-screen-md mx-auto text-lg leading-relaxed", ReactQuillDisplayCss.ReactQuillDisplay].join(" ")}>
                    {
                        localStorage.getItem("i18n-lang") === "en" ?
                            parse(restructureContent(article.content, articleTag, false)) : parse(restructureContent(article.contentCHI, articleTag, false))
                    }
                </div>
            </>
        )
    } else {
        return (
            <div className="mb-4 md:mb-0 w-full max-w-screen-md mx-auto relative h-screen rounded-xl"
                 id={'articleMain'}>
                <ContentLoader
                    speed={2}
                    width={document.getElementById('articleMain') !== null ? document.getElementById('articleMain').offsetWidth : 390}
                    height={1000}
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb"
                    {...props}
                >
                    <rect x="0" y="3" rx="12" ry="12"
                          width={document.getElementById('articleMain') !== null ? document.getElementById('articleMain').offsetWidth : 390}
                          height="400"/>
                    <rect
                        x={document.getElementById('articleMain') !== null ? document.getElementById('articleMain').offsetWidth - 190 : 200}
                        y="420" rx="12" ry="12" width="190" height="45"/>
                    <rect x="0" y="480" rx="12" ry="12"
                          width={document.getElementById('articleMain') !== null ? document.getElementById('articleMain').offsetWidth : 390}
                          height="500"/>
                </ContentLoader>
            </div>
        )
    }

}
export default withRouter(ArticleDisplay)