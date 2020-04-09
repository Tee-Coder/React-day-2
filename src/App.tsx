import React from 'react';
import { Heading } from './Components/Heading';//WRITTEN BY ME
import Person from './Components/Person';//WRITTEN BY ME
import {Blog} from './TestFolders/blog'; 
import logo from './logo.svg';
import './App.css';

const myPersonFunction = (input: string): string => { //WRITTEN BY ME ALSO LINE 28
  return 'Our Person is Important' + input;
}
let mypersonalblog = (myValue: string): string =>
{
    return 'This is my first blog ever  and this is the first section. our topic will be on how to build a good relationship with your partner' + myValue;;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Heading />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Person name = "Billy-Joe Bob" age = {39} Homeaddress = "Windemere, s.w, Edmonton" Country = "Canada" callbackMethod = {myPersonFunction}/> 
        <h3>  BLOGSPOT </h3>
        <Blog blogTitle = "RELATIONSHIP TALK"  blogcontentMethod = {mypersonalblog} theindex = {1} />
      </header>
    </div>
  );
}

export default App;
