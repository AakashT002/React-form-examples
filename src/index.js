import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import routes from './routes.js';
import registerServiceWorker from './registerServiceWorker';
import NameForm from './form'
ReactDOM.render(<div><NameForm /> <routes/></div>, document.getElementById('root'));
registerServiceWorker();
