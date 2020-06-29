import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignupAndSigninPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import {connect} from 'react-redux';
import { setCurrentUser } from "./redux/user/user.actions";
import './App.css';

class App extends React.Component{
  unSubscribeFromAuth = null; 

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount(){
    this.unSubscribeFromAuth();
  }
  render(){
    return (
      <div >
        <Header/>
        <Switch>
        <Route exact path = '/' component = {HomePage} />
        <Route exact path = '/shop' component = {ShopPage} />
        <Route exact path = '/signin' render = {() => this.props.currentUser?(<Redirect to ='/'/>):(<SignupAndSigninPage />)} />
        </Switch>
  
      </div>
    );
  }

}

const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
