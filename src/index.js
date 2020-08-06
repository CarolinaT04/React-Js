//Dependencies
import React from 'react';
import { render } from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';

//Assets
import './index.css';

import App from './components/App';
import * as serviceWorker from './serviceWorker';

//Routes
import AppRoutes from './routes';

 render(
  <Router>
    <AppRoutes/>
  </Router>,
  document.getElementById('root') // this root is going to pass in the index
);
 
serviceWorker.unregister();
