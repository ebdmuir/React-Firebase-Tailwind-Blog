import React from 'react'
import {Trans} from "react-i18next";
import {Link} from "react-router-dom";

const Footer = (props) => {
    return (
        <div className="container mx-auto px-8">
            <div className="grid grid-cols-2 w-full">
                <div className="col-span-1 sm:table-cell">
                    <p className="uppercase text-grey text-sm sm:mb-6">Links</p>
                    <ul className="list-reset text-md mb-6">
                        <li className="mt-2 inline-block mr-2 sm:block sm:mr-0">
                            <Link to={"/" + (localStorage.getItem("i18n-lang") === "en" ? "en" : "hk") + "/quotation"} className="text-grey hover:text-grey-dark">
                                <Trans>Heading.quotation</Trans>
                            </Link>
                        </li>
                    </ul>
                </div>
                {/*<div className="col-span-1 sm:table-cell">*/}
                {/*    <p className="uppercase text-grey text-sm sm:mb-6">Legal</p>*/}
                {/*    <ul className="list-reset text-md mb-6">*/}
                {/*        <li className="mt-2 inline-block mr-2 sm:block sm:mr-0">*/}
                {/*            <a href="#" className="text-grey hover:text-grey-dark">Terms</a>*/}
                {/*        </li>*/}
                {/*        <li className="mt-2 inline-block mr-2 sm:block sm:mr-0">*/}
                {/*            <a href="#" className="text-grey hover:text-grey-dark">Privacy</a>*/}
                {/*        </li>*/}
                {/*    </ul>*/}
                {/*</div>*/}
                {/*<div className="col-span-1 sm:table-cell">*/}
                {/*    <p className="uppercase text-grey text-sm sm:mb-6">Social</p>*/}
                {/*    <ul className="list-reset text-md mb-6">*/}
                {/*        <li className="mt-2 inline-block mr-2 sm:block sm:mr-0">*/}
                {/*            <a href="#" className="text-grey hover:text-grey-dark">Facebook</a>*/}
                {/*        </li>*/}
                {/*        <li className="mt-2 inline-block mr-2 sm:block sm:mr-0">*/}
                {/*            <a href="#" className="text-grey hover:text-grey-dark">Linkedin</a>*/}
                {/*        </li>*/}
                {/*        <li className="mt-2 inline-block mr-2 sm:block sm:mr-0">*/}
                {/*            <a href="#" className="text-grey hover:text-grey-dark">Twitter</a>*/}
                {/*        </li>*/}
                {/*    </ul>*/}
                {/*</div>*/}
                <div className="col-span-1 sm:table-cell">
                    <p className="uppercase text-grey text-sm sm:mb-6">Company</p>
                    <ul className="list-reset text-md mb-6">
                        <li className="mt-2 inline-block mr-2 sm:block sm:mr-0">
                            <Link to={"/" + (localStorage.getItem("i18n-lang") === "en" ? "en" : "hk") +"/blog"} className="text-grey hover:text-grey-dark">Official Blog</Link>
                        </li>
                        <li className="mt-2 inline-block mr-2 sm:block sm:mr-0">
                            <a href="#" className="text-grey hover:text-grey-dark">About Us</a>
                        </li>
                        <li className="mt-2 inline-block mr-2 sm:block sm:mr-0">
                            <a href="mailto:momo@childnoder.com" className="text-grey hover:text-grey-dark">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    )
}
export default Footer