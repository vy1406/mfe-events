import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store/store';
import App from './bootstrap';


const container = document.getElementById('app');
const root = createRoot(container);

root.render(<Provider store={store.store}><App /></Provider>);
