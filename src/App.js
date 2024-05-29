import React,{useState,useEffect}  from 'react';
import './App.css';
import { collection, getDocs } from "firebase/firestore";
import { db } from './config/firebase';
import Main from './Screens/Main';
import './Screens/Main.css';

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
    <Main/>
    </div>
  );
}

export default App;