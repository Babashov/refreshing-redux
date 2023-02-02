import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {combineReducers,createStore} from 'redux'
import {Provider} from 'react-redux'
import productReducer from './reducers/productReducer'
import userReducer from './reducers/userReducer';




const rootReducer = combineReducers({
  user:userReducer,
  products:productReducer
})
const store = createStore(rootReducer,{
  products:[
    {
      name:'Samsung',
      type:'TV'
    },
  ],
  user:'Mehemmed'
},

window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

)




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
