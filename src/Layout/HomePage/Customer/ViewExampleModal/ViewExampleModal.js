import React, {useEffect, useState} from 'react'
import classes from './ViewExampleModal.module.css'
import {useTranslation} from "react-i18next";

//clipversity
import cl_p_1_p from "../../../../Assets/Customer/clipversity/port1-min.png"
import cl_p_1_w from "../../../../Assets/Customer/clipversity/port1-min.webp"
import cl_p_2_p from "../../../../Assets/Customer/clipversity/port2-min.png"
import cl_p_2_w from "../../../../Assets/Customer/clipversity/port2-min.webp"
import cl_l_1_p from "../../../../Assets/Customer/clipversity/land1-min.png"
import cl_l_1_w from "../../../../Assets/Customer/clipversity/land1-min.webp"
import cl_l_2_p from "../../../../Assets/Customer/clipversity/land2-min.png"
import cl_l_2_w from "../../../../Assets/Customer/clipversity/land2-min.webp"
import cl_l_3_p from "../../../../Assets/Customer/clipversity/land3-min.png"
import cl_l_3_w from "../../../../Assets/Customer/clipversity/land3-min.webp"

//mewesearcher
import me_p_1_p from "../../../../Assets/Customer/mewesearcher/port1-min.png"
import me_p_1_w from "../../../../Assets/Customer/mewesearcher/port1-min.webp"
import me_p_2_p from "../../../../Assets/Customer/mewesearcher/port2-min.png"
import me_p_2_w from "../../../../Assets/Customer/mewesearcher/port2-min.webp"
import me_l_1_p from "../../../../Assets/Customer/mewesearcher/land1-min.png"
import me_l_1_w from "../../../../Assets/Customer/mewesearcher/land1-min.webp"
import me_l_2_p from "../../../../Assets/Customer/mewesearcher/land2-min.png"
import me_l_2_w from "../../../../Assets/Customer/mewesearcher/land2-min.webp"

//socialimagers
import so_p_1_p from "../../../../Assets/Customer/socialimagers/port1-min.png"
import so_p_1_w from "../../../../Assets/Customer/socialimagers/port1-min.webp"
import so_p_2_p from "../../../../Assets/Customer/socialimagers/port2-min.png"
import so_p_2_w from "../../../../Assets/Customer/socialimagers/port2-min.webp"
import so_l_1_p from "../../../../Assets/Customer/socialimagers/land1-min.png"
import so_l_1_w from "../../../../Assets/Customer/socialimagers/land1-min.webp"
import so_l_2_p from "../../../../Assets/Customer/socialimagers/land2-min.png"
import so_l_2_w from "../../../../Assets/Customer/socialimagers/land2-min.webp"
import so_l_3_p from "../../../../Assets/Customer/socialimagers/land3-min.png"
import so_l_3_w from "../../../../Assets/Customer/socialimagers/land3-min.webp"


const ViewExampleModal = (props) => {
    const {t, i18n} = useTranslation()
    const [isLoaded, setLoaded] = useState(false)
    const getData = (webID) => {
        let data = [
            {
                title: t("Customer.e-1-t"),
                description: t("Customer.e-1-d"),
                images:[
                    {
                        png:cl_p_1_p,
                        webp:cl_p_1_w
                    },
                    {
                        png:cl_p_2_p,
                        webp:cl_p_2_w
                    },
                    {
                        png:cl_l_1_p,
                        webp:cl_l_1_w
                    },
                    {
                        png:cl_l_2_p,
                        webp:cl_l_2_w
                    }

                ]
            },
            {
                title: t("Customer.e-2-t"),
                description: t("Customer.e-2-d"),
                images:[
                    {
                        png:me_p_1_p,
                        webp:me_p_1_w
                    },
                    {
                        png:me_p_2_p,
                        webp:me_p_2_w
                    },
                    {
                        png:me_l_1_p,
                        webp:me_l_1_w
                    },
                    {
                        png:me_l_2_p,
                        webp:me_l_2_w
                    }
                ]
            },
            {
                title: t("Customer.e-3-t"),
                description: t("Customer.e-3-d"),
                images:[
                    {
                        png:so_p_1_p,
                        webp:so_p_1_w
                    },
                    {
                        png:so_p_2_p,
                        webp:so_p_2_w
                    },
                    {
                        png:so_l_1_p,
                        webp:so_l_1_w
                    },
                    {
                        png:so_l_2_p,
                        webp:so_l_2_w
                    }
                ]
            },
        ]
        return data[webID]
    }

    useEffect(() => {
        setLoaded(false)
        setTimeout(() => {
            setLoaded(true)
        },250)
    },[props.webID])

    if(isLoaded){
        return(
            <dialog id="myModal" className="h-auto w-11/12 lg:w-4/5 md:w-4/5 sm:w-11/12 p-5  bg-white rounded-md overflow-y-hidden border-none">

                <div className="flex flex-col w-full h-auto ">
                    {/*Header*/}
                    <div className="flex w-full h-auto justify-center items-center">
                        <div className="flex w-10/12 h-auto py-3 justify-center items-center text-2xl font-bold">
                            {getData(props.webID).title}
                        </div>
                        <div onClick={() => {
                            document.getElementsByTagName('body')[0].style.overflow = "scroll"
                            document.getElementById('myModal').close()
                        }}
                             className="flex w-1/12 h-auto justify-center cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 stroke="#000000"
                                 className="feather feather-x">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </div>
                        {/*Header End*/}
                    </div>
                    {/*Modal*/}
                    <div className="container mx-auto md:p-8 max-h-screen overflow-y-scroll">
                        <div className="flex flex-row flex-wrap mx-2">
                            <div className="lg:w-1/2 lg:inline-block round ">
                                <div className="w-full my-4 sm:mb-0 px-2 py-4 rounded shadow-sm">
                                    <a className="block w-full h-full bg-grey-dark bg-no-repeat bg-center bg-cover"
                                       href="#" title="Link"
                                    >
                                        <picture>
                                            <source srcSet={getData(props.webID).images[2].webp} type="image/webp" className="lazyload"/>
                                            <img src={getData(props.webID).images[2].png} type="image/vnd.ms-photo" alt={"website example hor"} className="lazyload"/>
                                        </picture>
                                    </a>
                                </div>
                                <div className="w-full  my-4 sm:mb-0 px-2 py-4 rounded shadow-sm">
                                    <a className="block w-full h-full bg-grey-dark bg-no-repeat bg-center bg-cover"
                                       href="#" title="Link"
                                    >
                                        <picture>
                                            <source srcSet={getData(props.webID).images[3].webp} type="image/webp" className="lazyload"/>
                                            <img src={getData(props.webID).images[3].png} type="image/vnd.ms-photo" alt={"website example hor 2"} className="lazyload"/>
                                        </picture>
                                    </a>
                                </div>
                            </div>


                            <div className="lg:w-1/2 md:flex">
                                <div className="h-auto w:full md:w-1/2  md:h-auto  object-contain mb-4 md:w-1/2 md:inline-block p-2 rounded shadow-sm">
                                    <a className="block w-full bg-grey-dark bg-no-repeat bg-center bg-cover" href="#"
                                       title="Link"
                                    >
                                        <picture>
                                            <source srcSet={getData(props.webID).images[0].webp} type="image/webp" className="lazyload"/>
                                            <img src={getData(props.webID).images[0].png} type="image/vnd.ms-photo" alt={"website example vertical"} className=" md:h-96 w-auto md:w-full md:h-auto object-contain inline-block lazyload"/>
                                        </picture>
                                    </a>
                                </div>
                                <div className="h-auto w:full md:w-1/2  md:h-auto  object-contain mb-4 md:w-1/2 md:inline-block p-2 rounded shadow-sm">
                                        <a className="block w-full bg-grey-dark bg-no-repeat bg-center bg-cover" href="#"
                                           title="Link"
                                        >
                                            <picture>
                                                <source srcSet={getData(props.webID).images[1].webp} type="image/webp" className="lazyload"/>
                                                <img src={getData(props.webID).images[1].png} type="image/vnd.ms-photo" alt={"website example another vertical"} className=" md:h-96  w-auto md:w-full md:h-auto object-contain inline-block lazyload"/>
                                            </picture>
                                        </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </dialog>
        )
    }
    else{
        return(
            <dialog id="myModal" className="h-auto w-11/12 lg:w-4/5 md:w-4/5 sm:w-11/12 p-5  bg-white rounded-md overflow-y-hidden">

                <div className="flex flex-col w-full h-auto ">
                    {/*Header*/}
                    <div className="flex w-full h-auto justify-center items-center">
                        <div className="flex w-10/12 h-auto py-3 justify-center items-center text-2xl font-bold">
                            LOADING...
                        </div>
                        <div onClick={() => document.getElementById('myModal').close()}
                             className="flex w-1/12 h-auto justify-center cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 stroke="#000000"
                                 className="feather feather-x">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </div>
                        {/*Header End*/}
                    </div>
                    {/*Modal*/}
                    <div className="container mx-auto md:p-8">
                        <div className="flex flex-row flex-wrap mx-2">
                            <div className="lg:w-1/2 lg:inline-block round ">
                                <div className="w-full my-4 sm:mb-0 px-2 py-4 rounded shadow-sm">
                                    <a className="block w-full h-full bg-grey-dark bg-no-repeat bg-center bg-cover"
                                       href="#" title="Link"
                                    >
                                        <img src="https://via.placeholder.com/492x309?text=LOADING" alt='loading place holder'/>
                                    </a>
                                </div>
                                <div className="w-full  my-4 sm:mb-0 px-2 py-4 rounded shadow-sm">
                                    <a className="block w-full h-full bg-grey-dark bg-no-repeat bg-center bg-cover"
                                       href="#" title="Link"
                                    >
                                        <img src="https://via.placeholder.com/492x309?text=LOADING" alt='loading place holder'/>
                                    </a>
                                </div>
                            </div>


                            <div className="lg:w-1/2 lg:inline-block">
                                <div className="h-auto w:full md:w-1/2  md:h-auto  object-contain mb-4 md:w-1/2 md:inline-block p-2 rounded shadow-sm">
                                    <a className="block w-full bg-grey-dark bg-no-repeat bg-center bg-cover" href="#"
                                       title="Link"
                                    >
                                        <img src="https://via.placeholder.com/238x478?text=LOADING" alt='loading place holder'/>
                                    </a>
                                </div>
                                <div className="h-auto  w:full md:w-1/2  md:h-auto  object-contain mb-4 md:w-1/2 md:inline-block p-2 rounded shadow-sm">
                                    <div className="flex flex-col sm:flex-row md:flex-col -mx-2">
                                        <a className="block w-full  bg-grey-dark bg-no-repeat bg-center bg-cover" href="#"
                                           title="Link"
                                        >
                                            <img src="https://via.placeholder.com/238x478?text=LOADING" alt='loading place holder'/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </dialog>
        )
    }

}
export default ViewExampleModal