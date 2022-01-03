import React from 'react';

export default function MainButton(props) {
    return (
        <button className={"main-button " + props.customClasses}>
            {props.children}
        </button>
    )
}