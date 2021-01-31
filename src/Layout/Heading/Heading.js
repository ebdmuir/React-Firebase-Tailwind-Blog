import React, {useState} from 'react'
import {Trans, useTranslation} from "react-i18next";
import {Link, withRouter} from "react-router-dom";
import logo from '../../Assets/icons-72.png'
import {isAuth, logout} from "../../Utils/FirebaseUtils";
import firebaseRef from "../../Config/firebase";
import {connect} from "react-redux";

const MoreDropDown = (props) => {
    return (
        <div
            className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-full sm:px-0">
            <div
                className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                    <a href="#"
                       className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">

                        <svg className="flex-shrink-0 h-6 w-6 text-indigo-600"
                             xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"/>
                        </svg>
                        <div className="ml-4">
                            <p className="text-base font-medium text-gray-900">
                                Help Center
                            </p>
                            <p className="mt-1 text-sm text-gray-500">
                                Get all of your questions answered in our forums or contact
                                support.
                            </p>
                        </div>
                    </a>

                    <a href="#"
                       className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">

                        <svg className="flex-shrink-0 h-6 w-6 text-indigo-600"
                             xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                        </svg>
                        <div className="ml-4">
                            <p className="text-base font-medium text-gray-900">
                                Guides
                            </p>
                            <p className="mt-1 text-sm text-gray-500">
                                Learn how to maximize our platform to get the most out of it.
                            </p>
                        </div>
                    </a>

                    <a href="#"
                       className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">

                        <svg className="flex-shrink-0 h-6 w-6 text-indigo-600"
                             xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                        </svg>
                        <div className="ml-4">
                            <p className="text-base font-medium text-gray-900">
                                Events
                            </p>
                            <p className="mt-1 text-sm text-gray-500">
                                See what meet-ups and other events we might be planning near
                                you.
                            </p>
                        </div>
                    </a>

                    <a href="#"
                       className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">

                        <svg className="flex-shrink-0 h-6 w-6 text-indigo-600"
                             xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                        </svg>
                        <div className="ml-4">
                            <p className="text-base font-medium text-gray-900">
                                Security
                            </p>
                            <p className="mt-1 text-sm text-gray-500">
                                Understand how we take your privacy seriously.
                            </p>
                        </div>
                    </a>
                </div>
                <div className="px-5 py-5 bg-gray-50 sm:px-8 sm:py-8">
                    <div>
                        <h3 className="text-sm tracking-wide font-medium text-gray-500 uppercase">
                            Recent Posts
                        </h3>
                        <ul className="mt-4 space-y-4">
                            <li className="text-base truncate">
                                <a href="#"
                                   className="font-medium text-gray-900 hover:text-gray-700">
                                    Boost your conversion rate
                                </a>
                            </li>

                            <li className="text-base truncate">
                                <a href="#"
                                   className="font-medium text-gray-900 hover:text-gray-700">
                                    How to use search engine optimization to drive traffic to
                                    your site
                                </a>
                            </li>

                            <li className="text-base truncate">
                                <a href="#"
                                   className="font-medium text-gray-900 hover:text-gray-700">
                                    Improve your customer experience
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="mt-5 text-sm">
                        <a href="#"
                           className="font-medium text-indigo-600 hover:text-indigo-500"> View
                            all posts <span aria-hidden="true">&rarr;</span></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

const SolutionDropDown = (props) => {
    return (
        <div
            className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
            <div
                className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                    <Link to={"/" + (localStorage.getItem("i18n-lang") === "en" ? "en" : "hk") + "/web"}
                          className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">


                        <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="chrome"
                             className="flex-shrink-0 h-6 w-6 text-indigo-600" role="img"
                             xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 496 512">
                            <path fill="currentColor"
                                  d="M131.5 217.5L55.1 100.1c47.6-59.2 119-91.8 192-92.1 42.3-.3 85.5 10.5 124.8 33.2 43.4 25.2 76.4 61.4 97.4 103L264 133.4c-58.1-3.4-113.4 29.3-132.5 84.1zm32.9 38.5c0 46.2 37.4 83.6 83.6 83.6s83.6-37.4 83.6-83.6-37.4-83.6-83.6-83.6-83.6 37.3-83.6 83.6zm314.9-89.2L339.6 174c37.9 44.3 38.5 108.2 6.6 157.2L234.1 503.6c46.5 2.5 94.4-7.7 137.8-32.9 107.4-62 150.9-192 107.4-303.9zM133.7 303.6L40.4 120.1C14.9 159.1 0 205.9 0 256c0 124 90.8 226.7 209.5 244.9l63.7-124.8c-57.6 10.8-113.2-20.8-139.5-72.5z"></path>
                        </svg>
                        <div className="ml-4">
                            <p className="text-base font-medium text-gray-900">
                                <Trans>Heading.web-development</Trans>
                            </p>
                            <p className="mt-1 text-sm text-gray-500">
                                <Trans>Heading.web-development-des</Trans>
                            </p>
                        </div>
                    </Link>

                    <Link to={"/" + (localStorage.getItem("i18n-lang") === "en" ? "en" : "hk") + "/android"}
                          className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">


                        <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="android"
                             className="flex-shrink-0 h-6 w-6 text-indigo-600" role="img"
                             xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 576 512">
                            <path fill="currentColor"
                                  d="M420.55,301.93a24,24,0,1,1,24-24,24,24,0,0,1-24,24m-265.1,0a24,24,0,1,1,24-24,24,24,0,0,1-24,24m273.7-144.48,47.94-83a10,10,0,1,0-17.27-10h0l-48.54,84.07a301.25,301.25,0,0,0-246.56,0L116.18,64.45a10,10,0,1,0-17.27,10h0l47.94,83C64.53,202.22,8.24,285.55,0,384H576c-8.24-98.45-64.54-181.78-146.85-226.55"></path>
                        </svg>
                        <div className="ml-4">
                            <p className="text-base font-medium text-gray-900">
                                <Trans>Heading.android-app-development</Trans>
                            </p>
                            <p className="mt-1 text-sm text-gray-500">
                                <Trans>Heading.android-app-development-des</Trans>
                            </p>
                        </div>
                    </Link>

                    <Link to={"/" + (localStorage.getItem("i18n-lang") === "en" ? "en" : "hk") + "/ios"}
                          className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">


                        <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="apple"
                             className="flex-shrink-0 h-6 w-6 text-indigo-600" role="img"
                             xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 384 512">
                            <path fill="currentColor"
                                  d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path>
                        </svg>
                        <div className="ml-4">
                            <p className="text-base font-medium text-gray-900">
                                <Trans>Heading.ios-app-development</Trans>
                            </p>
                            <p className="mt-1 text-sm text-gray-500">
                                <Trans>Heading.ios-app-development-des</Trans>
                            </p>
                        </div>
                    </Link>

                    <Link to={"/" + (localStorage.getItem("i18n-lang") === "en" ? "en" : "hk") + "/design"}
                          className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">

                        <svg className="flex-shrink-0 h-6 w-6 text-indigo-600 "
                             xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/>
                        </svg>
                        <div className="ml-4">
                            <p className="text-base font-medium text-gray-900">
                                <Trans>Heading.design</Trans>
                            </p>
                            <p className="mt-1 text-sm text-gray-500">
                                <Trans>Heading.design-des</Trans>
                            </p>
                        </div>
                    </Link>
                </div>
                {/*<div*/}
                {/*    className="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">*/}
                {/*    <div className="flow-root">*/}
                {/*        <a href="#"*/}
                {/*           className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100">*/}

                {/*            <svg className="flex-shrink-0 h-6 w-6 text-gray-400"*/}
                {/*                 xmlns="http://www.w3.org/2000/svg" fill="none"*/}
                {/*                 viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">*/}
                {/*                <path strokeLinecap="round" strokeLinejoin="round"*/}
                {/*                      strokeWidth="2"*/}
                {/*                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>*/}
                {/*                <path strokeLinecap="round" strokeLinejoin="round"*/}
                {/*                      strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>*/}
                {/*            </svg>*/}
                {/*            <span className="ml-3">Watch Demo</span>*/}
                {/*        </a>*/}
                {/*    </div>*/}

                {/*    <div className="flow-root">*/}
                {/*        <a href="#"*/}
                {/*           className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100">*/}

                {/*            <svg className="flex-shrink-0 h-6 w-6 text-gray-400"*/}
                {/*                 xmlns="http://www.w3.org/2000/svg" fill="none"*/}
                {/*                 viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">*/}
                {/*                <path strokeLinecap="round" strokeLinejoin="round"*/}
                {/*                      strokeWidth="2"*/}
                {/*                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>*/}
                {/*            </svg>*/}
                {/*            <span className="ml-3">Contact Sales</span>*/}
                {/*        </a>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        </div>
    )
}

const Heading = (props) => {
    const [isSolutionModalOpen, setIsSolutionModalOpen] = useState(false)
    const [isMoreModalOpen, setIsMoreModalOpen] = useState(false)
    const [isMobileDropDown, setIsMobileDropDown] = useState(false)
    const [isLangDropDownOpen, setIsLangDropDownOpen] = useState(false)


    const {t, i18n} = useTranslation()

    return (
        <>
            <div className="relative bg-white">
                <div className=" mx-auto sm:px-0 fixed w-screen bg-white z-20 top-0 shadow-md">
                    <div
                        className="flex justify-between items-center border-b-2 bg-white border-gray-100 px-4 py-6 md:justify-start md:space-x-10 w-screen">
                        <div className="flex justify-start lg:w-0 lg:flex-1">
                            <Link to={"/" + (localStorage.getItem("i18n-lang") === "en" ? "en" : "hk")}>
                                <img className="h-8 w-auto sm:h-10"
                                     src={logo} alt="childnoder logo"/>
                            </Link>
                        </div>

                        <Link to={"/" + (localStorage.getItem("i18n-lang") === "en" ? "en" : "hk") + "/quotation"}
                              alt={t("Heading.quotation")}>
                            <button type="button"
                                    className=" whitespace-nowrap absolute top-5 right-24 md:right-48 items-right justify-right px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                            >
                                <Trans>Heading.quotation</Trans>
                            </button>
                        </Link>


                        <div className="-mr-2 -my-2 md:hidden">
                            <button type="button"
                                    className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                                    onClick={() => {
                                        document.getElementsByTagName('body')[0].style.overflow = "hidden"
                                        setIsMobileDropDown(true)
                                    }}
                            >
                                <span className="sr-only">Open menu</span>

                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M4 6h16M4 12h16M4 18h16"/>
                                </svg>
                            </button>
                        </div>
                        <nav className="absolute left-60  space-x-10">

                            <div className="relative hidden md:inline">
                                <Link to={"/" + (localStorage.getItem("i18n-lang") === "en" ? "en" : "hk") + "/blog"}>
                                    <button type="button"
                                            className="group bg-white rounded-md text-gray-500 inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                    <span>
                                          <Trans>Blog.blog</Trans>
                                    </span>

                                    </button>
                                </Link>
                            </div>

                            {
                                isAuth(props.auth) &&
                                <>
                                    <div className="relative hidden md:inline">
                                        <Link
                                            to={"/" + (localStorage.getItem("i18n-lang") === "en" ? "en" : "hk") + "/admin/new-article"}>
                                            <button type="button"
                                                    className="group bg-white rounded-md text-gray-500 inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                            >
                                    <span>
                                          <Trans>Heading.new-article</Trans>
                                    </span>
                                            </button>
                                        </Link>
                                    </div>
                                    <div className="relative hidden md:inline">
                                        <Link
                                            to={"/" + (localStorage.getItem("i18n-lang") === "en" ? "en" : "hk") + "/admin/list-article"}>
                                            <button type="button"
                                                    className="group bg-white rounded-md text-gray-500 inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                            >
                                    <span>
                                          <Trans>Heading.list-article</Trans>
                                    </span>
                                            </button>
                                        </Link>
                                    </div>
                                    <div className="relative hidden md:inline">
                                        <button type="button"
                                                className="group bg-white rounded-md text-gray-500 inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                onClick={() => logout(firebaseRef)}
                                        >
                                    <span>
                                          <Trans>Heading.logout</Trans>
                                    </span>

                                        </button>

                                    </div>
                                </>
                            }


                            {/*<div className="relative">*/}

                            {/*    <button type="button"*/}
                            {/*            className="group bg-white rounded-md text-gray-500 inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"*/}
                            {/*            onClick={() => {*/}
                            {/*                setIsSolutionModalOpen(!isSolutionModalOpen)*/}
                            {/*                setIsMoreModalOpen(false)*/}
                            {/*            }}*/}
                            {/*    >*/}
                            {/*        <span>*/}
                            {/*             <Trans>Heading.solutions</Trans>*/}
                            {/*        </span>*/}

                            {/*        <svg className="ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500"*/}
                            {/*             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"*/}
                            {/*             aria-hidden="true">*/}
                            {/*            <path fillRule="evenodd"*/}
                            {/*                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"*/}
                            {/*                  clipRule="evenodd"/>*/}
                            {/*        </svg>*/}
                            {/*    </button>*/}

                            {/*    {*/}
                            {/*        isSolutionModalOpen && <SolutionDropDown/>*/}
                            {/*    }*/}


                            {/*</div>*/}


                            {/*<div className="relative">*/}

                            {/*    <button type="button"*/}
                            {/*            className=" group bg-white rounded-md text-gray-500 inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 "*/}
                            {/*            onClick={() => {*/}
                            {/*                setIsMoreModalOpen(!isMoreModalOpen)*/}
                            {/*                setIsSolutionModalOpen(false)*/}
                            {/*            }}*/}
                            {/*    >*/}
                            {/*        <span>More</span>*/}

                            {/*        <svg className="ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500"*/}
                            {/*             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"*/}
                            {/*             aria-hidden="true">*/}
                            {/*            <path fillRule="evenodd"*/}
                            {/*                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"*/}
                            {/*                  clipRule="evenodd"/>*/}
                            {/*        </svg>*/}
                            {/*    </button>*/}

                            {/*    {*/}
                            {/*        isMoreModalOpen && <MoreDropDown/>*/}
                            {/*    }*/}

                            {/*</div>*/}
                        </nav>
                        <div
                            className=" whitespace-nowrap absolute w-10 md:w-36 top-5 right-12 md:right-8 items-right justify-right  border border-transparent rounded-md shadow-sm text-base font-medium text-white ">
                            <button type="button"
                                    className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-offset-gray-200"
                                    id="options-menu" aria-haspopup="true" aria-expanded="true"
                                    onClick={() => {
                                        setIsLangDropDownOpen(!isLangDropDownOpen)
                                    }}
                            >

                                <div className="hidden md:inline">
                                    {
                                        localStorage.getItem("i18n-lang") === "en" ?
                                            <Trans>Language.lang-en</Trans>
                                            :
                                            <Trans>Language.lang-hk</Trans>
                                    }
                                </div>

                                <div className="inline md:hidden">
                                    中/A
                                </div>

                                <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg"
                                     viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd"
                                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                          clipRule="evenodd"/>
                                </svg>
                            </button>

                            {
                                isLangDropDownOpen &&
                                <div
                                    className="origin-top-right absolute top-8 right-0 mt-4 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                                    <div className="py-1" role="menu" aria-orientation="vertical"
                                         aria-labelledby="options-menu">
                                        <div
                                            className="block text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer p-4"
                                            role="menuitem"
                                            onClick={() => {
                                                i18n.changeLanguage("hk")
                                                localStorage.setItem('i18n-lang', "hk");

                                                if (window.location.pathname !== '' && window.location.pathname.split("/en")[0] !== window.location.pathname) {
                                                    props.history.push('/hk' + window.location.pathname.split("/en")[1])
                                                }

                                                setIsLangDropDownOpen(!isLangDropDownOpen)
                                            }}>
                                            <Trans>Language.lang-hk</Trans>
                                        </div>
                                        <div
                                            className="block text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer p-4"
                                            role="menuitem"
                                            onClick={() => {
                                                i18n.changeLanguage("en")
                                                localStorage.setItem('i18n-lang', "en");

                                                if (window.location.pathname !== '' && window.location.pathname.split("/hk")[0] !== window.location.pathname) {
                                                    props.history.push('/en' + window.location.pathname.split("/hk")[1])
                                                }

                                                setIsLangDropDownOpen(!isLangDropDownOpen)
                                            }}
                                        >
                                            <Trans>Language.lang-en</Trans>
                                        </div>


                                    </div>
                                </div>
                            }


                            <Link to={"/" + (localStorage.getItem("i18n-lang") === "en" ? "en" : "hk") + "/quotation"}
                                  alt={t("Heading.quotation")}
                                  className="ml-8 whitespace-nowrap hidden md:inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 md:hidden">
                                <Trans>Heading.quotation</Trans>
                            </Link>


                        </div>
                    </div>
                </div>

                {/*mobile dropdown*/}
                {
                    isMobileDropDown &&
                    <div className="fixed top-20 inset-x-0 p-2 transition transform origin-top-right md:hidden z-20">
                        <div
                            className="rounded-lg shadow-xl ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                            <div className="pt-10 pb-6 px-5">
                                <div className="flex items-center justify-between">
                                    <div className="text-indigo-600 font-bold text-lg">
                                        Childnoder
                                    </div>
                                    <div className="-mr-2">
                                        <button type="button"
                                                className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                                                onClick={() => {
                                                    document.getElementsByTagName('body')[0].style.overflow = "scroll"
                                                    setIsMobileDropDown(false)
                                                }}
                                        >
                                            <span className="sr-only">Close menu</span>

                                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                                                 viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                      d="M6 18L18 6M6 6l12 12"/>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <nav className="grid gap-y-8">
                                        <Link
                                            to={"/" + (localStorage.getItem("i18n-lang") === "en" ? "en" : "hk") + "/web"}
                                            className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">

                                            <svg aria-hidden="true" focusable="false" data-prefix="fab"
                                                 data-icon="chrome"
                                                 className="flex-shrink-0 h-6 w-6 text-indigo-600" role="img"
                                                 xmlns="http://www.w3.org/2000/svg"
                                                 viewBox="0 0 496 512">
                                                <path fill="currentColor"
                                                      d="M131.5 217.5L55.1 100.1c47.6-59.2 119-91.8 192-92.1 42.3-.3 85.5 10.5 124.8 33.2 43.4 25.2 76.4 61.4 97.4 103L264 133.4c-58.1-3.4-113.4 29.3-132.5 84.1zm32.9 38.5c0 46.2 37.4 83.6 83.6 83.6s83.6-37.4 83.6-83.6-37.4-83.6-83.6-83.6-83.6 37.3-83.6 83.6zm314.9-89.2L339.6 174c37.9 44.3 38.5 108.2 6.6 157.2L234.1 503.6c46.5 2.5 94.4-7.7 137.8-32.9 107.4-62 150.9-192 107.4-303.9zM133.7 303.6L40.4 120.1C14.9 159.1 0 205.9 0 256c0 124 90.8 226.7 209.5 244.9l63.7-124.8c-57.6 10.8-113.2-20.8-139.5-72.5z"></path>
                                            </svg>
                                            <span className="ml-3 text-base font-medium text-gray-900">
                 <Trans>Heading.web-development</Trans>
              </span>
                                        </Link>

                                        <Link
                                            to={"/" + (localStorage.getItem("i18n-lang") === "en" ? "en" : "hk") + "/android"}
                                            className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">

                                            <svg aria-hidden="true" focusable="false" data-prefix="fab"
                                                 data-icon="android"
                                                 className="flex-shrink-0 h-6 w-6 text-indigo-600" role="img"
                                                 xmlns="http://www.w3.org/2000/svg"
                                                 viewBox="0 0 576 512">
                                                <path fill="currentColor"
                                                      d="M420.55,301.93a24,24,0,1,1,24-24,24,24,0,0,1-24,24m-265.1,0a24,24,0,1,1,24-24,24,24,0,0,1-24,24m273.7-144.48,47.94-83a10,10,0,1,0-17.27-10h0l-48.54,84.07a301.25,301.25,0,0,0-246.56,0L116.18,64.45a10,10,0,1,0-17.27,10h0l47.94,83C64.53,202.22,8.24,285.55,0,384H576c-8.24-98.45-64.54-181.78-146.85-226.55"></path>
                                            </svg>
                                            <span className="ml-3 text-base font-medium text-gray-900">
                 <Trans>Heading.android-app-development</Trans>
              </span>
                                        </Link>

                                        <Link
                                            to={"/" + (localStorage.getItem("i18n-lang") === "en" ? "en" : "hk") + "/ios"}
                                            className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">

                                            <svg aria-hidden="true" focusable="false" data-prefix="fab"
                                                 data-icon="apple"
                                                 className="flex-shrink-0 h-6 w-6 text-indigo-600" role="img"
                                                 xmlns="http://www.w3.org/2000/svg"
                                                 viewBox="0 0 384 512">
                                                <path fill="currentColor"
                                                      d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path>
                                            </svg>
                                            <span className="ml-3 text-base font-medium text-gray-900">
                 <Trans>Heading.ios-app-development</Trans>
              </span>
                                        </Link>

                                        <Link
                                            to={"/" + (localStorage.getItem("i18n-lang") === "en" ? "en" : "hk") + "/design"}
                                            className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">

                                            <svg className="flex-shrink-0 h-6 w-6 text-indigo-600 "
                                                 xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                 stroke="currentColor" aria-hidden="true">
                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                      strokeWidth="2"
                                                      d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/>
                                            </svg>
                                            <span className="ml-3 text-base font-medium text-gray-900">
                 <Trans>Heading.design</Trans>
              </span>
                                        </Link>

                                    </nav>
                                </div>
                            </div>
                            <div className="py-6 px-5 space-y-6">
                                <div className="grid grid-cols-2 gap-y-8 gap-x-8">
                                    <Link
                                        to={"/" + (localStorage.getItem("i18n-lang") === "en" ? "en" : "hk") + "/blog"}
                                        className="text-base font-medium text-gray-900 hover:text-gray-700">
                                        <Trans>Blog.blog</Trans>
                                    </Link>

                                    <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                                        Help Center
                                    </a>

                                    <div
                                        className="rounded bg-indigo-100 p-2 text-center"
                                        onClick={() => {
                                            i18n.changeLanguage("hk")
                                            localStorage.setItem('i18n-lang', "hk");
                                        }}>
                                        <Trans>Language.lang-hk</Trans>
                                    </div>

                                    <div
                                        className="rounded bg-indigo-100 p-2 text-center"
                                        onClick={() => {
                                            i18n.changeLanguage("en")
                                            localStorage.setItem('i18n-lang', "en");
                                        }}>
                                        <Trans>Language.lang-en</Trans>
                                    </div>

                                </div>
                                <div>
                                    <Link
                                        to={"/" + (localStorage.getItem("i18n-lang") === "en" ? "en" : "hk") + "/quotation"}
                                        className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                                        <Trans>Heading.quotation</Trans>
                                    </Link>

                                    {/*<p className="mt-6 text-center text-base font-medium text-gray-500">*/}
                                    {/*    Existing customer?*/}
                                    {/*    <Link href="#" className="text-indigo-600 hover:text-indigo-500">*/}
                                    {/*        Sign in*/}
                                    {/*    </Link>*/}
                                    {/*</p>*/}
                                </div>
                            </div>
                        </div>
                    </div>

                }
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

export default enhance(withRouter(Heading))