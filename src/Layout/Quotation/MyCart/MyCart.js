import React, {useEffect, useState} from 'react'
import {Trans, useTranslation} from "react-i18next";
import {getCurrencyName, getCurrencyPrice} from "../../../Utils/CurrencyHelper";

const MyCart = (props) => {
    const {t, i18n} = useTranslation()
    const [currency,setCurrency] = useState("hk")
    const [sum, setSum] = useState(0)

    useEffect(() => {
        if(Array.isArray(props.selectedItem)){
            let newSum = 0;
            props.selectedItem.map(e => {
                newSum += e.pricing
            })
            setSum(newSum)
        }
    }, [props.selectedItem])

    return (
        <>

            <div className="block text-gray-700 text-lg font-bold py-2 px-2">
                <Trans>Quotation.predict-price</Trans>
            </div>
            <div className="block text-gray-500 text-md font-semibold py-2 px-2">
                <Trans>Quotation.predict-price-des</Trans>
            </div>
            <div className="bg-gray-100 rounded-xl my-5 px-2">
                {
                    [...props.selectedItem.filter(e => e.type === 1)].length > 0 &&
                    <div className="py-3 text-sm">
                        <div className="my-2 rounded m-2 bg-yellow-100 w-12 px-2 py-1 text-yellow-700">
                            Web
                        </div>
                        <hr/>
                        {
                            [...props.selectedItem.filter(e => e.type === 1)].map((item, index) => {
                                return (
                                    <div
                                        key={item.name}
                                        className="flex justify-start text-gray-700  rounded-md  my-1">
                                        <span className="bg-gray-400 h-2 w-2 m-2 rounded-full"></span>
                                        <div className="flex-grow font-medium px-2">
                                            {t(item.name)} -  {getCurrencyName(currency)} {getCurrencyPrice(currency,item.pricing)}
                                        </div>
                                        <button
                                            className="cursor-pointer text-sm font-normal text-gray-500 tracking-wide rounded  hover:bg-red-100 hover:font-bold hover:text-red-600 px-2 py-2"
                                            onClick={() => props.removeFromCart(item.name)}
                                        >
                                            <Trans>MyCart.remove</Trans>
                                        </button>
                                    </div>
                                )
                            })
                        }
                    </div>
                }

                {
                    [...props.selectedItem.filter(e => e.type === 2)].length > 0 &&
                    <div className="py-3 text-sm">
                        <div className="my-2 rounded m-2 bg-green-100 w-20 px-2 py-1 text-green-700">
                            Android
                        </div>
                        <hr/>
                        {
                            [...props.selectedItem.filter(e => e.type === 2)].map((item, index) => {
                                return (
                                    <div
                                        className="flex justify-start text-gray-700  rounded-md  my-1">
                                        <span className="bg-gray-400 h-2 w-2 m-2 rounded-full"></span>
                                        <div className="flex-grow font-medium px-2">
                                            {t(item.name)} -  {getCurrencyName(currency)} {getCurrencyPrice(currency,item.pricing)}
                                        </div>
                                        <button
                                            className="cursor-pointer text-sm font-normal text-gray-500 tracking-wide rounded  hover:bg-red-100 hover:font-bold hover:text-red-600 px-2 py-2"
                                            onClick={() => props.removeFromCart(item.name)}
                                        >
                                            <Trans>MyCart.remove</Trans>
                                        </button>
                                    </div>
                                )
                            })
                        }
                    </div>

                }

                {
                    [...props.selectedItem.filter(e => e.type === 3)].length > 0 &&
                    <div className="py-3 text-sm">
                        <div className="my-2 rounded m-2 bg-blue-100 w-12 px-2 py-1 text-blue-700">
                            IOS
                        </div>
                        <hr/>
                        {
                            [...props.selectedItem.filter(e => e.type === 3)].map((item, index) => {
                                return (
                                    <div
                                        className="flex justify-start text-gray-700  rounded-md  my-1">
                                        <span className="bg-gray-400 h-2 w-2 m-2 rounded-full"></span>
                                        <div className="flex-grow font-medium px-2">
                                            {t(item.name)} -   {getCurrencyName(currency)} {getCurrencyPrice(currency,item.pricing)}
                                        </div>
                                        <button
                                            className="cursor-pointer text-sm font-normal text-gray-500 tracking-wide rounded  hover:bg-red-100 hover:font-bold hover:text-red-600 px-2 py-2"
                                            onClick={() => props.removeFromCart(item.name)}
                                        >
                                            <Trans>MyCart.remove</Trans>
                                        </button>
                                    </div>
                                )
                            })
                        }
                    </div>
                }

                <div className="text-right p-2 text-gray-900">
                    <Trans>MyCart.total</Trans>
                    {getCurrencyName(currency)}
                    {getCurrencyPrice(currency,sum)}
                </div>
            </div>
        </>
    )
}
export default MyCart