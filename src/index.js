import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';
import { Provider } from 'react-redux'
import { store } from './app/store.js'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

<div role="listbox" aria-expanded="false" class="ui fluid selection dropdown" tabindex="0">
  <div aria-atomic="true" aria-live="polite" role="alert" class="divider default text">
    Select Friend
  </div>
  <i aria-hidden="true" class="dropdown icon">
  </i>
  <div class="menu transition">
    <div style="pointer-events:all" role="option" aria-checked="false" aria-selected="true" class="selected item">
      <img src="/images/avatar/small/jenny.jpg" class="ui avatar image" />
      <span class="text">Jenny Hess</span>
    </div>
    <div style="pointer-events:all" role="option" aria-checked="false" aria-selected="false" class="item">
      <img src="/images/avatar/small/elliot.jpg" class="ui avatar image" />
      <span class="text">Elliot Fu</span>
    </div>
    <div style="pointer-events:all" role="option" aria-checked="false" aria-selected="false" class="item">
      <img src="/images/avatar/small/stevie.jpg" class="ui avatar image" />
      <span class="text">Stevie Feliciano</span>
    </div>
    <div style="pointer-events:all" role="option" aria-checked="false" aria-selected="false" class="item">
      <img src="/images/avatar/small/christian.jpg" class="ui avatar image" />
      <span class="text">Christian</span>
    </div>
    <div style="pointer-events:all" role="option" aria-checked="false" aria-selected="false" class="item">
      <img src="/images/avatar/small/matt.jpg" class="ui avatar image" />
      <span class="text">Matt</span>
    </div>
    <div style="pointer-events:all" role="option" aria-checked="false" aria-selected="false" class="item">
      <img src="/images/avatar/small/justen.jpg" class="ui avatar image" />
      <span class="text">Justen Kitsune</span>
    </div>
  </div>
</div>