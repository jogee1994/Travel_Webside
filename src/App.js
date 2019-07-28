import React from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderComponent from './HeaderComponent';
import MainComponent from './MainComponent';
import FooterComponent from './FooterComponent';
import NavComponent from './NavComponent';
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }
  render(){
    return (
      <>
        <NavComponent />
        <HeaderComponent />
        <MainComponent />
        <FooterComponent />
      </>
    );
  }
}

export default App;
