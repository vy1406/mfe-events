import React, { useRef, useEffect } from 'react';
import { mount } from 'vueApp/vueApp';

const VueApp = () => {
    const ref = useRef(null)

    useEffect(() => {
        mount(ref.current)
    }, []);

    return <div ref={ref} />
}

export default VueApp;