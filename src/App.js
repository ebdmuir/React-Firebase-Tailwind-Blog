import React from 'react';
import './App.css';
import {Provider} from 'react-redux'
import {ReactReduxFirebaseProvider} from "react-redux-firebase";
import {getReduxStore, getRrfProp} from "./Config/firebase-redux";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import RouterManager from "./Layout/RouterManager/RouterManager";
function App() {
  return (
      <div className="App" >
        <Provider store={getReduxStore()}>
          <ReactReduxFirebaseProvider {...getRrfProp()}>
            <BrowserRouter>
              <RouterManager/>
            </BrowserRouter>
          </ReactReduxFirebaseProvider>
        </Provider>
      </div>
  );
}

export default App;
