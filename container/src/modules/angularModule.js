import React, { useEffect, useRef } from "react";
import { mount } from "angularApp/angularApp";

const AngularApp = () => {
    const ref = useRef(null);
    useEffect(() => {
        mount();
    }, []);
    return <div ><app-root></app-root></div>;
};

export default AngularApp;