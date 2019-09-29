import React from "react";
import CardWrapper from "../CardWrapper/CardWrapper";

import "./styles.css";

const LampBox = ({style, text, number, icon}) => (
    <CardWrapper style={{...style, padding: "0px 10px", display: "flex", justifyContent: "center", marginRight: "40px"}} >
        <div className="text-center"  style={{fontSize: '40px', display: "inline-block"}} >
            {icon}
            <div className="lampbox__text" >{text}</div>
            <h1 className="lampbox__number">{number}</h1>
        </div>
    </CardWrapper>
);

export default LampBox;