import React, { useRef, useEffect } from 'react';
import { mount } from 'reactApp/App';

const ReactApp = () => {
    const ref = useRef(null)

    useEffect(() => {
        mount(ref.current)
    }, []);

    return <div ref={ref} />
}


export default ReactApp;