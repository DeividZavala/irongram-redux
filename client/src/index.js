import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'antd/dist/antd.css';
import {BrowserRouter} from 'react-router-dom';
import configureStore from './redux/store';
import {Provider} from 'react-redux';

const store = configureStore();

const WithRouter = () => <BrowserRouter><App /></BrowserRouter>;

const WithProvider = () => <Provider store={store}><WithRouter/></Provider>;

ReactDOM.render(<WithProvider/>, document.getElementById('root'));
registerServiceWorker();
