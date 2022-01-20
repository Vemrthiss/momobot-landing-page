import React from "react"

const Link = (props) => {
    return (
        <a
            href={props.href}
            className="text-pink-500 hover:text-pink-400 visited:text-red-500"
            target="_blank"
        >
            {props.text}
        </a>

        
    )
}

export const Tooltip = (props) => {
    return (
        <a 
            class="underline decoration-dotted hover:text-pink-300"
            title={props.title} href={props.href}
            target="_blank"
        >
            {props.text}
        </a>
    )
}

export default Link