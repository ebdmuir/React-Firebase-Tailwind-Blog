import React, {useState} from 'react'
import {Link} from "react-router-dom";
import {descriptionLangConverter, titleLangConverter} from "../../../../Utils/Converter";

const ArticleCard = (props) => {
    return (
        <Link to={{
            pathname: '/' + (localStorage.getItem("i18n-lang") === "en" ? "en" : "hk") + "/article/" + props.data.id,
            state: {article: props.data}
        }}

        >
            <div className="rounded w-full lg:w-1/2 lg:w-1/3 p-4 lg:p-0">
                <img
                    src={props.data.featureImage}
                    className="rounded lazyload"
                    alt={titleLangConverter(props.data, localStorage.getItem("i18n-lang"))}/>
                <div className="p-4 pl-0">
                    <h2 className="font-bold text-2xl text-gray-800">
                        {titleLangConverter(props.data, localStorage.getItem("i18n-lang"))}
                    </h2>
                    <p className="text-gray-700 mt-2">
                        {descriptionLangConverter(props.data, localStorage.getItem("i18n-lang"))}
                    </p>

                    <Link to={{
                        pathname: '/' + (localStorage.getItem("i18n-lang") === "en" ? "en" : "hk") + "/article/" + props.data.id,
                        state: {article: props.data}
                    }}
                          className="inline-block py-2 rounded text-green-900 mt-2 ml-auto">
                        Read more
                    </Link>
                </div>
            </div>
        </Link>

    )
}
export default ArticleCard