import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('caixa1'));
ReactDOM.render(<App />, document.getElementById('caixa2'));
ReactDOM.render(<App />, document.getElementById('caixa3'));
ReactDOM.render(<App />, document.getElementById('caixa4'));
ReactDOM.render(<App />, document.getElementById('caixa5'));

registerServiceWorker();
