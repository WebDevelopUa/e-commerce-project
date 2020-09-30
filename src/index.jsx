import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './components/app/App';
import * as serviceWorker from './serviceWorker';
import {GlobalStyle} from "./globalStyles";
import {Provider} from 'react-redux';
import {store} from "./redux/store";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <GlobalStyle/>
                <App/>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>, document.getElementById('root')
);

serviceWorker.unregister();
