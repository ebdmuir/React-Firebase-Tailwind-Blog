import React, {useEffect, useState} from 'react'
import List from "../List/List";
import ListItem from "../ListItem/ListItem";
import {getItems} from "../../../Assets/pricing";

const Menu = (props) => {
    const [type, setType] = useState("web")

    return (
        <div className="divide-y divide-gray-100 shadow-md rounded-lg w-full mb-4">
            <nav className="p-4">
                <ul className="flex space-x-2 ">
                    <li
                        onClick={() => setType("web")}
                        className={["cursor-pointer block px-4 py-2 rounded-md font-bold", type === "web" ? "bg-yellow-50 text-yellow-700" : ""].join(" ")}>
                        Web
                        {
                            [...props.selectedItem.filter(e => e.type === 1)].length > 0 &&
                            <div className="rounded-full bg-yellow-700 text-white inline-block px-3 mx-2">
                                {[...props.selectedItem.filter(e => e.type === 1)].length}
                            </div>
                        }
                    </li>
                    <li
                        onClick={() => setType("android")}
                        className={["cursor-pointer block px-4 py-2 rounded-md font-bold", type === "android" ? "bg-green-50 text-green-700" : ""].join(" ")}>
                        Android
                        {
                            [...props.selectedItem.filter(e => e.type === 2)].length > 0 &&
                            <div className="rounded-full bg-green-700 text-white inline-block px-3 mx-2">
                                {[...props.selectedItem.filter(e => e.type === 2)].length}
                            </div>
                        }

                    </li>
                    <li
                        onClick={() => setType("ios")}
                        className={["cursor-pointer block px-4 py-2 rounded-md font-bold", type === "ios" ? "bg-blue-50 text-blue-700" : ""].join(" ")}>
                        IOS
                        {
                            [...props.selectedItem.filter(e => e.type === 3)].length > 0 &&
                            <div className="rounded-full bg-blue-700 text-white inline-block px-3 mx-2">
                                {[...props.selectedItem.filter(e => e.type === 3)].length}
                            </div>
                        }

                    </li>
                </ul>
            </nav>
            <List>
                {getItems(type).map((item) => (
                    <ListItem key={item.name} item={item}
                              selectedItem={props.selectedItem}
                              addToCart={props.addToCart}
                              removeFromCart={props.removeFromCart}
                    />
                ))}
            </List>
        </div>
    )
}
export default Menu