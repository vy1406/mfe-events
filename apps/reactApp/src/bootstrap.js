import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const mount = (el) => {
    const root = createRoot(el); 
    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
};

if (process.env.NODE_ENV === "development") {
    const rootNode = document.querySelector("#root");
    if (rootNode) {
        mount(rootNode); 
    }
}

export { mount };
