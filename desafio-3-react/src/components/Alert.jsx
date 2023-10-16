import React from "react";
import Badge from "react-bootstrap/Badge";

const Alert = ({ message }) => {
    let alertVariant = "danger";


    return (
        <>
        {message && (
            <Badge variant bg={alertVariant} className="badgeStyle">
            {message}
            </Badge>
        )}
        </>
    );
};

export default Alert;