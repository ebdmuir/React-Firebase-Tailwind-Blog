import React, {useState, useEffect} from 'react'
import {Trans} from "react-i18next";
import {Link} from "react-router-dom";

const Call4Action = (props) => {
    return (
        <div className="container m-auto xl:px-6 py-10">
            <div
                className="flex flex-col md:flex-row items-center justify-between relative w-100 h-auto md:h-64 bg-100 shadow-md rounded-lg p-8 gap-4">
                <div className=" md:w-full text-2xl">
                     <span className="flex mb-4 p-2 font-bold text-indigo-600">
                         <Trans>Call4Action.title</Trans>
                    </span>
                    <img alt="quote" className="float-left mr-1"
                         src="https://assets-global.website-files.com/5b5a66e9f3166b36708705fa/5cf8fb1f994fb7168d0d66fb_quote-intro.svg"/>
                    <span className="flex">
                         <Trans>Call4Action.description</Trans>
                    </span>
                </div>
                <Link to={"/" + (localStorage.getItem("i18n-lang") === "en" ? "en" : "hk") +'/quotation'}>
                    <div
                        className="relative shadow-md font-medium my-5 py-2 px-4 text-white cursor-pointer bg-yellow-600 hover:bg-yellow-500 rounded text-lg text-center w-56">
            <span className="absolute h-3 w-3 right-0 top-0 animate-ping inline-flex rounded-full bg-yellow-600">

            </span>
                        <Trans>Call4Action.call4Action</Trans>
                    </div>
                </Link>

            </div>
        </div>
    )
}
export default Call4Action
