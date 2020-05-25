import React from 'react';
import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignupAndSigninPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";

import { auth } from "./firebase/firebase.utils";

import './App.css';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      currentUser: null
    }
  }

  unSubscribeFromAuth = null; 

  componentDidMount(){
    this.unSubscribeFromAuth = auth.onAuthStateChanged(user =>{ this.setState({currentUser:user})})
  }

  componentWillUnmount(){
    this.unSubscribeFromAuth();
  }
  render(){
    return (
      <div >
        <Header currentUser = {this.state.currentUser}/>
        <Switch>
        <Route exact path = '/' component = {HomePage}></Route>
        <Route exact path = '/shop' component = {ShopPage}></Route>
        <Route exact path = '/signin' component = {SignupAndSigninPage}></Route>
        </Switch>
  
      </div>
    );
  }

}

export default App;
