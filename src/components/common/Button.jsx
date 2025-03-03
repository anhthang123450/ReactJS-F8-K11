import React from "react";
import "./Button.css";

const Button = (props) => {
    console.log(props);

    const size = props.size ? `btn-${props.size}` : "";

    const variant = props.variant ? `btn-${props.variant}` : "";

    //btn-small
    return (
        <button className={`btn ${size} ${variant}`} onClick={props.onClick}>
            {props.children}
        </button>
    );
};

export default Button;
