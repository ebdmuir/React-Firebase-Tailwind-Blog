import React, {useState} from 'react'
import {Trans, useTranslation} from "react-i18next";
import classes from './Customer.module.css'
import clipversitylogo from '../../../Assets/Customer/clipversity/icons-72.webp'
import mewesearcherlogo from '../../../Assets/Customer/mewesearcher/icons-72.webp'
import socialimagerslogo from '../../../Assets/Customer/socialimagers/icons-72.webp'
import ViewExampleModal from "./ViewExampleModal/ViewExampleModal";

import cl_l_1_p from "../../../Assets/Customer/clipversity/clipversity-min.png"
import cl_l_1_w from "../../../Assets/Customer/clipversity/clipversity.webp"

import me_l_1_p from "../../../Assets/Customer/mewesearcher/mewesearcher-min.png"
import me_l_1_w from "../../../Assets/Customer/mewesearcher/mewesearcher.webp"

import so_l_1_p from "../../../Assets/Customer/socialimagers/socialimager-min.png"
import so_l_1_w from "../../../Assets/Customer/socialimagers/socialimager.webp"

const Customer = (props) => {
    const {t, i18n} = useTranslation()
    const [webID, setWebID] = useState(0)

    return (
        <>
            <ViewExampleModal webID={webID}/>
            <div className="container mx-auto max-w-xs  min-h-0 rounded-lg overflow-hidden shadow-lg my-2 bg-white cursor-pointer whitespace-normal">
                <div className={["relative mb-6", classes.hoverTrigger].join(" ")}
                    onClick={() => {
                        setWebID(0)
                        document.getElementsByTagName('body')[0].style.overflow = "hidden"
                        document.getElementById('myModal').showModal()
                    }}
                >
                    <div className={["absolute w-full h-full bg-opacity-50 bg-gray-500 border border-grey-100 text-center align-middle px-4 py-2",classes.hoverTarget].join(" ")}>
                         <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search-plus"
                             className="svg-inline--fa fa-search-plus fa-w-16" role="img"
                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path fill="currentColor"
                                  d="M304 192v32c0 6.6-5.4 12-12 12h-56v56c0 6.6-5.4 12-12 12h-32c-6.6 0-12-5.4-12-12v-56h-56c-6.6 0-12-5.4-12-12v-32c0-6.6 5.4-12 12-12h56v-56c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v56h56c6.6 0 12 5.4 12 12zm201 284.7L476.7 505c-9.4 9.4-24.6 9.4-33.9 0L343 405.3c-4.5-4.5-7-10.6-7-17V372c-35.3 27.6-79.7 44-128 44C93.1 416 0 322.9 0 208S93.1 0 208 0s208 93.1 208 208c0 48.3-16.4 92.7-44 128h16.3c6.4 0 12.5 2.5 17 7l99.7 99.7c9.3 9.4 9.3 24.6 0 34zM344 208c0-75.2-60.8-136-136-136S72 132.8 72 208s60.8 136 136 136 136-60.8 136-136z"></path>
                        </svg>
                    </div>
                    <picture  style={{minHeight: "200px"}}>
                        <source srcSet={cl_l_1_w} type="image/webp" className="lazyload"/>
                        <img src={cl_l_1_p} type="image/vnd.ms-photo" alt={t("Customer.clipversity")} className="lazyload"/>
                    </picture>
                </div>
                <div className="max-w-md py-4 px-8 bg-white rounded-lg mt-20">
                    <div className="flex justify-center md:justify-end -mt-16">
                        <img className="w-20 h-20 object-cover rounded-full border-1 lazyload" alt="clipversity icon"
                             data-src={clipversitylogo}/>
                    </div>
                    <div>
                        <h2 className="text-gray-800 text-2xl pt-4  font-bold text-left">
                            <Trans>Customer.e-1-t</Trans>
                        </h2>
                        <p className="mt-2 text-gray-600">
                            <Trans>Customer.e-1-d</Trans>
                        </p>
                    </div>
                    <div className="flex justify-end mt-4">
                        <a href="https://clipversity.com" alt="網上知識分享平台" className="text-lg font-medium text-indigo-800 bg-indigo-50 p-2 rounded">
                            <Trans>Customer.access</Trans>
                        </a>
                    </div>
                </div>

            </div>

            {/*card two*/}
            <div className="container mx-auto max-w-xs rounded-lg overflow-hidden shadow-lg my-2 bg-white cursor-pointer whitespace-normal">
                <div className={["relative mb-6", classes.hoverTrigger].join(" ")}
                     onClick={() => {
                         setWebID(1)
                         document.getElementsByTagName('body')[0].style.overflow = "hidden"
                         document.getElementById('myModal').showModal()
                     }}
                >
                    <div className={["absolute w-full h-full bg-opacity-50 bg-gray-500 border border-grey-100 text-center align-middle px-4 py-2",classes.hoverTarget].join(" ")}>
                         <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search-plus"
                             className="svg-inline--fa fa-search-plus fa-w-16" role="img"
                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path fill="currentColor"
                                  d="M304 192v32c0 6.6-5.4 12-12 12h-56v56c0 6.6-5.4 12-12 12h-32c-6.6 0-12-5.4-12-12v-56h-56c-6.6 0-12-5.4-12-12v-32c0-6.6 5.4-12 12-12h56v-56c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v56h56c6.6 0 12 5.4 12 12zm201 284.7L476.7 505c-9.4 9.4-24.6 9.4-33.9 0L343 405.3c-4.5-4.5-7-10.6-7-17V372c-35.3 27.6-79.7 44-128 44C93.1 416 0 322.9 0 208S93.1 0 208 0s208 93.1 208 208c0 48.3-16.4 92.7-44 128h16.3c6.4 0 12.5 2.5 17 7l99.7 99.7c9.3 9.4 9.3 24.6 0 34zM344 208c0-75.2-60.8-136-136-136S72 132.8 72 208s60.8 136 136 136 136-60.8 136-136z"></path>
                        </svg>
                    </div>
                    <picture  style={{minHeight: "200px"}}>
                        <source srcSet={me_l_1_w} type="image/webp" className="lazyload"/>
                        <img src={me_l_1_p} type="image/vnd.ms-photo" alt={t("Customer.mewesearcher")} className="lazyload"/>
                    </picture>
                </div>
                <div className="max-w-md py-4 px-8 bg-white  rounded-lg mt-20">
                    <div className="flex justify-center md:justify-end -mt-16">
                        <img className="w-20 h-20 object-cover rounded-full border-1 lazyload"
                             alt="mewesearcher logo"
                             src={mewesearcherlogo}/>
                    </div>
                    <div>
                        <h2 className="text-gray-800 text-2xl pt-4  font-bold text-left">
                            <Trans>Customer.e-2-t</Trans>
                        </h2>
                        <p className="mt-2 text-gray-600">
                            <Trans>Customer.e-2-d</Trans>
                        </p>
                    </div>
                    <div className="flex justify-end mt-4">
                        <a href="https://mewesearcher.com/" alt="搜尋MeWe群組及專頁" className="text-lg  font-medium text-indigo-800 bg-indigo-50 p-2 rounded">
                            <Trans>Customer.access</Trans>
                        </a>
                    </div>
                </div>
            </div>

            {/*card three*/}
            <div className="container mx-auto max-w-xs rounded-lg overflow-hidden shadow-lg my-2 bg-white cursor-pointer whitespace-normal ">
                <div className={["relative mb-6", classes.hoverTrigger].join(" ")}
                     onClick={() => {
                         setWebID(2)
                         document.getElementsByTagName('body')[0].style.overflow = "hidden"
                         document.getElementById('myModal').showModal()
                     }}
                >
                    <div className={["absolute w-full h-full bg-opacity-50 bg-gray-500 border border-grey-100 text-center align-middle px-4 py-2",classes.hoverTarget].join(" ")}>
                         <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search-plus"
                             className="svg-inline--fa fa-search-plus fa-w-16" role="img"
                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path fill="currentColor"
                                  d="M304 192v32c0 6.6-5.4 12-12 12h-56v56c0 6.6-5.4 12-12 12h-32c-6.6 0-12-5.4-12-12v-56h-56c-6.6 0-12-5.4-12-12v-32c0-6.6 5.4-12 12-12h56v-56c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v56h56c6.6 0 12 5.4 12 12zm201 284.7L476.7 505c-9.4 9.4-24.6 9.4-33.9 0L343 405.3c-4.5-4.5-7-10.6-7-17V372c-35.3 27.6-79.7 44-128 44C93.1 416 0 322.9 0 208S93.1 0 208 0s208 93.1 208 208c0 48.3-16.4 92.7-44 128h16.3c6.4 0 12.5 2.5 17 7l99.7 99.7c9.3 9.4 9.3 24.6 0 34zM344 208c0-75.2-60.8-136-136-136S72 132.8 72 208s60.8 136 136 136 136-60.8 136-136z"></path>
                        </svg>
                    </div>
                    <picture style={{minHeight: "200px"}}>
                        <source srcSet={so_l_1_w} type="image/webp" className="lazyload"/>
                        <img src={so_l_1_p} type="image/vnd.ms-photo"  alt={t("Customer.socialimagers")} className="lazyload"/>
                    </picture>
                </div>
                <div className="max-w-md py-4 px-8 bg-white rounded-lg mt-20">
                    <div className="flex justify-center md:justify-end -mt-16">
                        <img className="w-20 h-20 object-cover rounded-full border-1 lazyload" alt="socialimagers icon"
                             src={socialimagerslogo}/>
                    </div>
                    <div>
                        <h2 className="text-gray-800 text-2xl pt-4  font-bold text-left">
                            <Trans>Customer.e-3-t</Trans>
                        </h2>
                        <p className="mt-2 text-gray-600">
                            <Trans>Customer.e-3-d</Trans>
                        </p>
                    </div>
                    <div className="flex justify-end mt-4">
                        <a href="https://socialimagers.com/" alt="網上圖片生成器" className="text-lg font-medium text-indigo-800 bg-indigo-50 p-2 rounded ">
                            <Trans>Customer.access</Trans>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Customer