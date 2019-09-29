import React from "react";
import "./styles.css";

const CardWrapper = ({children, style}) => (
    <div className="cardwrapper__main" style={style} >
        {children}
    </div>
);

export default CardWrapper;