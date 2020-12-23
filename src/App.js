import logo from './logo.svg';
import { Component } from 'react';
import Avatar from './Avatar/Avatar';
import './App.css';


class App extends Component{
  
  render() {
    return (
      <div className="App">
        <Avatar shape="square" width={150}/>
        <Avatar shape="circle" width={150}/>
      </div>
    );
  }
}


export default App;
