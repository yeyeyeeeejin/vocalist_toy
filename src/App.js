import React,{useState,useEffect}  from 'react';
import logo from './logo.svg';
import './App.css';
import { collection, getDocs } from "firebase/firestore";
import { db } from './config/firebase';

function App() {
  const[word,setWord] =useState();

  const getWordlist = async () =>{
    const querySnapshot = await getDocs(collection(db, "vocalist"));
    querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
  });
  setWord(word);
  }
  
  useEffect(() => {
    getWordlist();
  },[]);
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;