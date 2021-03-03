import React from 'react';
import './App.css';
import Main from './Components/Main';
import { BrowserRouter as Router} from "react-router-dom";
import { Provider } from 'react-redux';
import store from './Store';

window.store = store;

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Main />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
