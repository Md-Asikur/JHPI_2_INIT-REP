import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css"
import App from './App';
import ContextProvider from './context/ContextProvider';
import { StateProvider } from './ts_context/context/StateProvider';
import { initialState} from "./ts_context/context/initalState";
import reducer from "./ts_context/context/reducer";
import { Provider } from "react-redux";
import store from './Fs__Add/redux/store';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StateProvider initialState={initialState} reducer={reducer}>
    <ContextProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </ContextProvider>
  </StateProvider>
);

