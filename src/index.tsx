import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";
import {Provider} from "react-redux";
import {store} from "./redux/store";
import {makeServer} from "./api/server";

if (process.env.NODE_ENV === 'development') {
    makeServer();
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
      <Provider store={store}>
          <App />
      </Provider>
  </React.StrictMode>
);
