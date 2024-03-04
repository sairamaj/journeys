import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import TestWithMockData from './components/TestWithMockData';
const root = ReactDOM.createRoot(document.getElementById('root'));

const mockData = [
  {
      "id": 1,
      "first_name": "Fletcher",
      "last_name": "McVanamy",
      "email": "mmcvanamy0@e-recht24.de",
      "age": 30
    }, {
      "id": 2,
      "first_name": "Clarice",
      "last_name": "Harrild",
      "email": "charrild1@dion.ne.jp",
      "age": 35
    }, 
]

root.render(
  <React.StrictMode>
    <TestWithMockData data={mockData}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
