import React, {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";

const ListItem = (props) => {
    const {t, i18n} = useTranslation()
    return (
        <div
            className={["p-4 flex space-x-4 cursor-pointer ",
                typeof props.selectedItem.find(e => e.name === props.item.name) !== 'undefined' ? props.item.type === 1 ? "bg-yellow-50 text-yellow-700" : props.item.type === 2 ? "bg-green-50 text-green-700" : "bg-blue-50 text-blue-700" :
                    "hover:bg-gray-50"].join(" ")}
            onClick={() => {
                if (typeof props.selectedItem.find(e => e.name === props.item.name) !== 'undefined') {
                    props.removeFromCart(props.item.name)

                } else {
                    props.addToCart(props.item)
                }

            }}
        >
            <div className="w-8 h-8 flex-shrink-0 rounded-lg object-cover bg-gray-100 p-1">
                {typeof props.selectedItem.find(e => e.name === props.item.name) !== 'undefined' &&
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 512 512">
                    <path fill="currentColor"
                          d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                </svg>}
            </div>
            <div className="min-w-0 relative flex-auto sm:pr-20 lg:pr-0 xl:pr-20">
                <h2 className="text-lg font-semibold text-black mb-0.5">
                    {t(props.item.name)}
                </h2>
                <dl className="flex flex-nowrap text-sm font-medium ">
                    <div className="flex-nowrap w-full mt-0.5 font-normal text-gray-700">
                        {t(props.item.description)}
                    </div>
                    <div
                        className="absolute top-0 right-0 rounded-full bg-amber-50 text-amber-900 px-2 py-0.5  sm:flex lg:flex xl:flex items-center space-x-1">
                        <dd>{props.item.pricing}</dd>
                    </div>
                </dl>
            </div>
        </div>
    )
}
export default ListItem