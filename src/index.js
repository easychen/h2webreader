import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from "mobx-react";
import AppState from './store/AppState';

import './index.scss';

import { I18nextProvider } from 'react-i18next';
import i18n from './i18n'; 

ReactDOM.render(<Provider store={AppState}>
                    <I18nextProvider i18n={ i18n }>
                        <App />
                    </I18nextProvider>    
                </Provider>, document.getElementById('root'));
serviceWorker.unregister();

