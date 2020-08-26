import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CardList from './CardList';
import ErickList from './ErickList';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import { robots } from './robots';
import { Erick } from './Erick';


ReactDOM.render(
  <div>
    <CardList robots={robots}/>
    <ErickList Erick={Erick}/>
  </div>,
document.getElementById('root')
);

serviceWorker.unregister();
