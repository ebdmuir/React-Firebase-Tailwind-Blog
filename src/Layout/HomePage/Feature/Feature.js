import React,{ useState} from 'react'
import {Trans, useTranslation} from "react-i18next";
import {Link} from "react-router-dom";

const Feature = (props) => {

    const {t, i18n} = useTranslation()
    return(
    <div className="mt-16">
        <h2 className="mt-8 mb-12 text-4xl">
            <Trans>Feature.common</Trans>
        </h2>
        <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-20">
            <div className="flex">
                <div className="flex-shrink-0">
                    <div
                        className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">

                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                             viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
                        </svg>
                    </div>
                </div>
                <div className="ml-4">
                    <dt className="text-lg leading-6 font-medium text-gray-900">
                        <Trans>Feature.dt-1-t</Trans>
                    </dt>
                    <dd className="mt-2 text-base text-gray-500">
                        <Trans>Feature.dt-1-d</Trans>
                        <a href={'https://searchengineland.com/google-page-experience-signals-for-ranking-apply-only-to-mobile-344321'}>
                            <button className={"bg-indigo-200 text-gray-900 rounded-md my-2 p-2 block"} alt={t("Feature.learn-more")}>
                                <Trans>Feature.learn-more</Trans>
                            </button>
                        </a>
                    </dd>
                </div>
            </div>

            <div className="flex">
                <div className="flex-shrink-0">
                    <div
                        className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                             viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"/>
                        </svg>
                    </div>
                </div>
                <div className="ml-4">
                    <dt className="text-lg leading-6 font-medium text-gray-900">
                        <Trans>Feature.dt-2-t</Trans>
                    </dt>
                    <dd className="mt-2 text-base text-gray-500">
                        <Trans>Feature.dt-2-d</Trans>
                        <a href={'https://developers.google.com/web/showcase/2017/twitter?hl=en'}>
                            <button  className={"bg-indigo-200 text-gray-900 rounded-md my-2 p-2 block"} alt={t("Feature.learn-more")}>
                                <Trans>Feature.learn-more</Trans>
                            </button>
                        </a>
                    </dd>
                </div>
            </div>

            <div className="flex">
                <div className="flex-shrink-0">
                    <div
                        className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                             viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M13 10V3L4 14h7v7l9-11h-7z"/>
                        </svg>
                    </div>
                </div>
                <div className="ml-4">
                    <dt className="text-lg leading-6 font-medium text-gray-900">
                        <Trans>Feature.dt-3-t</Trans>
                    </dt>
                    <dd className="mt-2 text-base text-gray-500">
                        <Trans>Feature.dt-3-d</Trans>
                        <a href={'https://clipversity.com/article/Progressive-Web-App-fixed-the-barrier-between-App-and-Web-MG-5umAlth55f_V0hna'}>
                            <button  className={"bg-indigo-200 text-gray-900 rounded-md my-2 p-2 block"} alt={t("Feature.learn-more")}>
                                <Trans>Feature.learn-more</Trans>
                            </button>
                        </a>
                    </dd>
                </div>
            </div>

            <div className="flex">
                <div className="flex-shrink-0">
                    <div
                        className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                             viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"/>
                        </svg>
                    </div>
                </div>
                <div className="ml-4">
                    <dt className="text-lg leading-6 font-medium text-gray-900">
                        <Trans>Feature.dt-4-t</Trans>
                    </dt>
                    <dd className="mt-2 text-base text-gray-500">
                        <Trans>Feature.dt-4-d</Trans>
                    </dd>
                </div>
            </div>
        </dl>
    </div>
    )
}
export default Feature