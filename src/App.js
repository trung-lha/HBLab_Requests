import './App.css';
import { Sidebar } from "./components/Sidebar";
import { Row, Col, Container, Accordion, Card } from "react-bootstrap";
import { Employees } from "./pages/EmployeesManagement";
import userApi from './api/userApi'
import { useEffect, useState } from 'react';
import _ from 'lodash';

import LoginForm from './components/Login/index';
import SignUpForm from './components/Signup/index'
import RequeststList from './components/RequestList';
import Navbar from './components/Navbar'
import axios from 'axios';
function App() {
  const [currentUser, setCurrentUser] = useState({}); //if current user empty show login/register form
  const [showLoginForm, setShowLoginForm] = useState(true); //show login or register form

  const handleLoginFormSubmit = async (data) => {
    // setCurrentUser(data);

    // const result = await userApi.login(data);
    // console.log(result);
    await axios.post('http://127.0.0.1:8000/api/login', { ...data })
      .then((response) => {
        if (_.isEmpty(response.data)) {
          console.log('sai tai khoan hoac mat khau');
        }
        else {
          setCurrentUser(response.data[0]);
        }
      }, (error) => {
        console.log(error);
      });
  }

  const handleSignupFormSubmit = async (data) => {
    await axios.post('http://127.0.0.1:8000/api/user', { ...data })
      .then((response) => {
        if (response.data) {
          setCurrentUser(response.data);
        }
      }, (error) => {
        console.log(error);
      });
  }

  const handleLoginClick = () => {
    setShowLoginForm(!showLoginForm);
  }

  const handleSignupClick = () => {
    setShowLoginForm(!showLoginForm);

  }

  function showHomepage() {
    if (_.isEmpty(currentUser)) {
      if (showLoginForm) {
        return (
          <LoginForm handleLoginFormSubmit={handleLoginFormSubmit} handleSignupClick={handleSignupClick}></LoginForm>
        )
      } else {
        return (
          <SignUpForm handleSignupFormSubmit={handleSignupFormSubmit} handleLoginClick={handleLoginClick}></SignUpForm>
        )
      }
    } else {
      return (
        <RequeststList></RequeststList>
      )
    }
  }


  // useEffect(
  //   ()=>{
  //     async function fetchUser(){
  //       const result = await userApi.getAll();
  //       console.log(result);
  //     }
  //     fetchUser();
  //   },[]
  // )
  return (
    <div>
      <Navbar></Navbar>
      {showHomepage()}
    </div>
  );
}

export default App;
