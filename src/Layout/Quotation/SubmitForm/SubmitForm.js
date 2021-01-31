import React, {useEffect, useState} from 'react'
import {Trans, useTranslation} from "react-i18next";
import firebaseRef from "../../../Config/firebase";
import {v4 as uuidv4} from 'uuid';
import {onUploadFile} from "../../../Utils/Upload";

const db = firebaseRef.firestore()

const SubmitForm = (props) => {
    const {t, i18n} = useTranslation()
    const [uploading, setUploading] = useState(false)

    const [isSending,setIsSending] = useState(false)
    const [isSent, setIsSent] = useState(false)

    const [fileList, setFileList] = useState([])
    const [currentPath, setCurrentPath] = useState('/Quotation/')

    const [newQuotation, setNewQuotation] = useState({
        email: "",
        name: "",
        phone: "",
        type: "",
        detail: "",
        docUrl:[],
        sum: 0,
        selectedItem: props.selectedItem,
        id: uuidv4()
    })

    useEffect(() => {
        if(Array.isArray(props.selectedItem)){
            let newSum = 0;
            props.selectedItem.map(e => {
                newSum += e.pricing
            })

            setNewQuotation({
                ...newQuotation,
                selectedItem:props.selectedItem,
                sum: newSum
            })
        }
    },[props.selectedItem])

    const resetForm = () => {
        setNewQuotation({
            email: "",
            name: "",
            phone: "",
            type: "",
            detail: "",
            docUrl:[],
            id: uuidv4()
        })
        setIsSending(false)
        setIsSent(false)
        setFileList([])
    }

    const uploadFile = async (e) => {
        setUploading(true)

        let allFile = []
        Array.from(e.target.files).forEach(file => allFile.push(file));
        const uploadState = await onUploadFile(allFile,currentPath + newQuotation.id)

        if (uploadState.success) {
            setUploading(false)
            let newArr = fileList
            let urlArr = []
            uploadState.data.map(item => {
                newArr.unshift({
                    createDate: new Date(),
                    id: item.id,
                    fileName:item.fileName,
                    url: item.url
                })
                urlArr.push({
                    createDate: new Date(),
                    id: item.id,
                    fileName:item.fileName,
                    url: item.url
                })
            })
            setNewQuotation({
                ...newQuotation,
                docUrl: newQuotation.docUrl.concat(urlArr)
            })
            setFileList(newArr)
        }
    }

    const submitForm = () => {
        setIsSending(true)
        db.collection('Request')
            .doc(newQuotation.id)
            .set(newQuotation)
            .then(() => {
                setIsSending(false)
                setIsSent(true)
                resetForm()
            })
            .catch(err => {
                console.log(err)
            })
    }

    const removeFile = (id) => {
        let newArr = newQuotation.docUrl
        newArr = newArr.filter(e => e.id !== id)
        setNewQuotation({
            ...newQuotation,
            docUrl: newArr
        })
    }

    return (
        <>
            <div className="block text-gray-700 text-lg font-bold py-2 px-2">
                <Trans>Quotation.contact-info</Trans>
            </div>
            <div className="block text-gray-500 text-md font-semibold py-2 px-2">
                <Trans>Quotation.contact-info-des</Trans>
            </div>

            {/*<div*/}
            {/*    className="options md:flex md:space-x-6 text-sm items-center text-gray-700 mt-4">*/}
            {/*    <p className="w-1/2 my-2 md:mb-0">I would like to </p>*/}
            {/*    <select*/}
            {/*        className="w-full border border-gray-200 p-2 focus:outline-none focus:border-gray-500">*/}
            {/*        <option value="select" selected>Select an option</option>*/}
            {/*        <option value="bug">report a bug</option>*/}
            {/*        <option value="feature">Request a feature</option>*/}
            {/*        <option value="feedback">Feedback</option>*/}
            {/*    </select>*/}
            {/*</div>*/}

            <div className="form my-4">
                <div className="flex flex-col text-sm">
                    <label htmlFor="title" className="font-bold my-2">
                        <Trans>Quotation.name</Trans>
                    </label>
                    <input
                        className=" appearance-none border border-gray-200 p-2 focus:outline-none focus:border-gray-500"
                        type="text" placeholder={t("Quotation.fill-name")}
                        value={newQuotation.name}
                        onChange={(e) => {
                            setNewQuotation({
                                ...newQuotation,
                                name: e.target.value
                            })
                        }}
                    />
                </div>

                <div className="flex flex-col text-sm">
                    <label htmlFor="title" className="font-bold my-2">
                        <Trans>Quotation.email</Trans>
                    </label>
                    <input
                        className=" appearance-none border border-gray-200 p-2 focus:outline-none focus:border-gray-500"
                        type="text" placeholder={t("Quotation.fill-email")}
                        value={newQuotation.email}
                        onChange={(e) => {
                            setNewQuotation({
                                ...newQuotation,
                                email: e.target.value
                            })
                        }}
                    />
                </div>

                <div className="flex flex-col text-sm">
                    <label htmlFor="title" className="font-bold my-2">
                        <Trans>Quotation.phone</Trans>
                    </label>
                    <input
                        className=" appearance-none border border-gray-200 p-2 focus:outline-none focus:border-gray-500"
                        type="text" placeholder={t("Quotation.fill-email")}
                        value={newQuotation.phone}
                        onChange={(e) => {
                            setNewQuotation({
                                ...newQuotation,
                                phone: e.target.value
                            })
                        }}
                    />
                </div>

                <div className="text-sm flex flex-col">
                    <label htmlFor="description"
                           className="font-bold mt-4 my-2">
                        <Trans>Quotation.detail</Trans>
                    </label>
                    <textarea
                        className=" appearance-none w-full border border-gray-200 p-2 h-40 focus:outline-none focus:border-gray-500"
                        placeholder={t("Quotation.detail")}
                        value={newQuotation.detail}
                        onChange={(e) => {
                            setNewQuotation({
                                ...newQuotation,
                                detail: e.target.value
                            })
                        }}
                    ></textarea>
                </div>

                <div className="text-sm flex flex-col">
                    <label htmlFor="Supporting Document"
                           className="font-bold mt-4 my-2">
                        <Trans>Quotation.supporting-doc</Trans>
                    </label>
                    <input type={'file'}
                           disabled={uploading}
                           id={'imageuploader'}
                           accept="*"
                           onChange={(e) => uploadFile(e)}
                           multiple
                    />
                    {
                        uploading && "UPLOADING..."
                    }
                </div>

                <div>
                    {
                        fileList.map(fl => {
                            return(
                                <div key={fl.id} className="w-full rounded shadow-sm my-5 px-5">
                                    {fl.fileName}
                                    <button
                                        className="cursor-pointer text-sm font-normal text-gray-500 tracking-wide rounded  hover:bg-red-100 hover:font-bold hover:text-red-600 px-2 py-2"
                                        onClick={() => removeFile(fl.id)}
                                    >
                                        <Trans>MyCart.remove</Trans>
                                    </button>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            <div
                className="block bg-gray-200 text-sm text-right py-2 px-3 -mx-3 -my-2 rounded-b-lg">
                <button
                    disabled={isSending || isSent || uploading}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => submitForm()}
                >
                    {isSending ? "LOADING" : isSent ? "SENT" : <Trans>Quotation.submit</Trans>}
                </button>
            </div>
        </>
    )
}
export default SubmitForm