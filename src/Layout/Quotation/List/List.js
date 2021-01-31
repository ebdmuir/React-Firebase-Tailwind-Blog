import React from "react";
export default function List({ children }) {
    return (
        <ul className="divide-y divide-gray-100  h-96 md:h-full overflow-y-scroll md:overflow-hidden">
            {children}
        </ul>
    )
}
