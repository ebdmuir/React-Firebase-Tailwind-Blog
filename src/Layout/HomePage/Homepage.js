import React, {useState} from 'react'
import Feature from "./Feature/Feature";
import {Trans, useTranslation} from "react-i18next";
import Customer from "./Customer/Customer";
import Call4Action from "./Call4Action/Call4Action";
import {Helmet} from "react-helmet";



const Homepage = (props) => {
    const {t, i18n} = useTranslation()

    const ldJson = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": t("HomePage.dt-1-t"),
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": t("HomePage.dt-1-d"),
                }
            },
            {
                "@type": "Question",
                "name": t("HomePage.dt-2-t"),
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": t("HomePage.dt-2-d"),
                }
            },
            {
                "@type": "Question",
                "name": t("HomePage.dt-3-t"),
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": t("HomePage.dt-3-d"),
                }
            },
            {
                "@type": "Question",
                "name":  t("HomePage.dt-4-t"),
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text":  t("HomePage.dt-4-d"),
                }
            }
        ]
    };

    return (
        <>
            <Helmet>
                <title>{t("HomePage.title")}</title>
                <link rel="alternate" href={"https://childnoder.com/" + (localStorage.getItem("i18n-lang") === "en" ? "hk" : "en")} hrefLang={ (localStorage.getItem("i18n-lang") === "en" ? "zh-Hant" : "en")}/>
                <meta property="fb:app_id" content="1293953327456577"/>
                <meta property="og:type" content="website"/>
                <meta property="site_name" content="childnoder"/>
                <meta property="title" content={t("HomePage.title")}/>
                <meta name="description"
                      content={t("HomePage.description")}/>
                <meta name="keywords"
                      content={t("HomePage.keywords")}/>
                <meta property="og:title" content={t("HomePage.title")}/>
                <meta property="og:description" content={t("HomePage.description")}/>
                {/*<meta property="og:image" content="https://imgur.com/a/hnvoqTG"/>*/}
                <meta property="og:url" content="https://childnoder.com"/>

                <script type="application/ld+json">
                    {JSON.stringify(ldJson)}
                </script>
            </Helmet>

            <div className="py-12 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-2xl text-indigo-600 font-bold tracking-wide uppercase">
                            <Trans>Feature.description</Trans>
                        </h2>
                        <h1 className="mt-8 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            <Trans>Feature.title</Trans>
                        </h1>
                        <p className="mt-8 max-w-2xl text-xl text-gray-500 mx-auto">
                            <Trans>Feature.description-2</Trans>
                        </p>
                    </div>


                    <div className='
               sm:overflow-auto sm:whitespace-nowrap
                md:flex  md:flex-wrap
                lg:flex lg:flex-nowrap
                 xl:flex xl:flex-nowrap
                 gap-5 mt-10 mb-5'
                    >
                        <Customer/>
                    </div>

                    <Call4Action/>

                    <Feature/>


                </div>
            </div>
        </>
    )
}
export default Homepage