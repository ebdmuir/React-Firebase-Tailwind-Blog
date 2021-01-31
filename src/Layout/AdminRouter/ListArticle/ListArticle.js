import React, {useEffect, useState} from 'react'
import {Trans} from "react-i18next";
import firebaseRef from "../../../Config/firebase";
import {Link} from "react-router-dom";
import DeleteArticleModal from "./DeleteArticleModal/DeleteArticleModal";

const db = firebaseRef.firestore()

const ListArticle = () => {
    const [isLoaded, setIsLoaded] = useState(false)
    const [allArticle, setAllArticle] = useState([])
    const [removeArticleID, setRemoveArticleID] = useState("")

    useEffect(() => {
        getArticles()
    }, [])

    const getArticles = () => {
        db.collection("Article")
            .limit(10)
            .get()
            .then(docs => {
                if (!docs.empty) {
                    let newAllArticles = []
                    docs.forEach(doc => {
                        newAllArticles.push({
                            id: doc.id,
                            ...doc.data()
                        })
                    })
                    setAllArticle(newAllArticles)
                    setIsLoaded(true)
                } else {
                    setAllArticle([])
                    setIsLoaded(true)
                }
            })

    }

    const removeArticle = () => {
        if(removeArticleID !== ''){
            db.collection("Article")
                .doc(removeArticleID)
                .delete()
                .then(res=> {
                    let newAllArticles = allArticle
                    newAllArticles = newAllArticles.filter(e => e.id !== removeArticleID)
                    setAllArticle(newAllArticles)
                    setRemoveArticleID("")
                })
        }

    }

    return (
        <div className="mb-4 md:mb-0 w-full max-w-screen-md mx-auto relative h-full ">
            <DeleteArticleModal
                removeArticle={removeArticle}
            />
            <h1 className="text-3xl">
                <Trans>ListArticle.list-article</Trans>
            </h1>
            <div className="my-4">
                <div className="overflow-x-auto bg-white rounded-lg shadow overflow-y-auto relative"
                     style={{"height": "405px"}}>
                    <table
                        className="border-collapse table-auto w-full whitespace-no-wrap bg-white table-striped relative">
                        <thead>
                        <tr className="text-left">
                            <th className="bg-gray-100 sticky top-0 border-b border-gray-200 px-6 py-2 text-gray-600 font-bold tracking-wider uppercase text-xs">
                                ID
                            </th>
                            <th className="bg-gray-100 sticky top-0 border-b border-gray-200 px-6 py-2 text-gray-600 font-bold tracking-wider uppercase text-xs">
                                Test
                            </th>
                            <th className="bg-gray-100 sticky top-0 border-b border-gray-200 px-6 py-2 text-gray-600 font-bold tracking-wider uppercase text-xs">
                                Test2
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            isLoaded ?
                                allArticle.length > 0 ?
                                    allArticle.map((a, index) => {
                                        return (
                                            <tr key={a.id}>
                                                <td className="border-dashed border-t border-gray-200 userId">
                                                    <span className="text-gray-700 px-6 py-3 flex items-center">
                                                        {index + 1}
                                                    </span>
                                                </td>
                                                <td className="border-dashed border-t border-gray-200 userId">
                                                    <span className="text-gray-700 px-6 py-3 flex items-center">
                                                        {a.title + " / " + a.titleCHI}
                                                    </span>
                                                </td>
                                                <td className="border-dashed border-t border-gray-200 firstName">
                                                    <span className="text-gray-700 px-6 py-3 flex items-center">

                                                        <Link to={{
                                                            pathname: '/' + (localStorage.getItem("i18n-lang") === "en" ? "en" : "hk") + "/admin/edit-article/" + a.id,
                                                            state: {article: a}
                                                        }}>
                                                             <button className="w-4 h-4 rounded mx-2">
                                                                <svg aria-hidden="true" focusable="false"
                                                                     data-prefix="fas" data-icon="edit"
                                                                     className="svg-inline--fa fa-edit fa-w-18"
                                                                     role="img" xmlns="http://www.w3.org/2000/svg"
                                                                     viewBox="0 0 576 512"><path fill="currentColor"
                                                                                                 d="M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"></path>
                                                                </svg>
                                                               </button>
                                                        </Link>

                                                        <Link to={{
                                                            pathname: '/' + (localStorage.getItem("i18n-lang") === "en" ? "en" : "hk") + "/article/" + a.id,
                                                            state: {article: a}
                                                        }}>
                                                             <button className="w-4 h-4 rounded mx-2">
                                                                <svg aria-hidden="true" focusable="false"
                                                                     data-prefix="fas" data-icon="external-link-alt"
                                                                     className="svg-inline--fa fa-external-link-alt fa-w-16"
                                                                     role="img" xmlns="http://www.w3.org/2000/svg"
                                                                     viewBox="0 0 512 512"><path fill="currentColor"
                                                                                                 d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"></path></svg>
                                                            </button>
                                                        </Link>

                                                             <button className="w-4 h-4 rounded mx-2"
                                                                onClick={() => {
                                                                    setRemoveArticleID(a.id)
                                                                    document.getElementsByTagName('body')[0].style.overflow = "hidden"
                                                                    document.getElementById('deleteModal').showModal()
                                                                }}
                                                             >
                                                            <svg aria-hidden="true" focusable="false" data-prefix="fas"
                                                                 data-icon="trash-alt"
                                                                 className="svg-inline--fa fa-trash-alt fa-w-14"
                                                                 role="img" xmlns="http://www.w3.org/2000/svg"
                                                                 viewBox="0 0 448 512"><path fill="currentColor"
                                                                                             d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"></path></svg>
                                                            </button>


                                                    </span>
                                                </td>
                                            </tr>
                                        )
                                    })
                                    : "article not found "
                                :
                                "loading"
                        }

                        </tbody>
                    </table>
                </div>

            </div>


        </div>
    )
}
export default ListArticle