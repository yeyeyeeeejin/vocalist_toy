import React,{useState,useEffect}  from 'react';
import './App.css';
import WordList  from './components/wordList';
import { collection, getDocs } from "firebase/firestore";
import { db } from './config/firebase';
import WordCataory from './components/wordCataory';
import "./components/css/header.css"

function Header (){
  return(
    <div className="header">
    <h1>Vocalist</h1>
      <WordCataory/>
    </div>
  )
}
function Contents () {
  return (//단어 리스트부분
      <div>
          <WordList></WordList>
      </div>
  )
}

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
      
        <div className="Box">
        <Header/>
          <Contents/>
        </div>
    </div>
  );
}
/*

*/
export default App;