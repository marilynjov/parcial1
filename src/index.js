import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import {IntlProvider} from 'react-intl';
import localeEsMessages from "./components/locales/es";
import localeEnMessages from "./components/locales/en";


const browserLocale = navigator.language || navigator.userLanguage;
const messages = browserLocale.startsWith('es') ? localeEnMessages : localeEsMessages;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<IntlProvider locale={browserLocale} messages= {messages} >
    <App />
</IntlProvider>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
