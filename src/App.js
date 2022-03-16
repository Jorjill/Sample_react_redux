import { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login_page from './pages/login';
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from './state/index';
import { MainPage } from './pages/main';
import Info from './pages/info';

const App = () => {

  const dispatch = useDispatch();
  const { addAllEmployees } = bindActionCreators(actionCreators, dispatch);

  useEffect(()=>{
    fetch('http://jsonplaceholder.typicode.com/users')
    .then((response)=>response.json())
    .then((people)=>addAllEmployees(people));
  },[]);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path='/'
            element={<Login_page />}
          />
          <Route path='/main' element={<MainPage />}/>
          <Route path='/person/:id' element={<Info />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;