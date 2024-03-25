import { useEffect } from 'react';
import {BrowserRouter as Router} from "react-router-dom"
import { UseDispatch, useDispatch } from 'react-redux';
import './App.css';
import AllRoutes from './AllRoutes';
import { getAllOutpasses } from './actions/outpass';

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllOutpasses())
  }, [dispatch])
  

  return (
    <div className="App">
      <Router>
        <AllRoutes />
      </Router>
    </div>
  );
}

export default App;