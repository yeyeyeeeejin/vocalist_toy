import { useState } from "react";
import "./css/main.css"


export default function WordList (){
    const [input,setInput]=useState("");
    /*const [input,setInput] = useState( 
    word :"",
    meaning:"")*/ 
    const [inputs,setInputs]=useState([]);

    const onSubmit =(e)=>{
        e.preventDefault();
        if(input ===""){
            return;
        }
        console.log(input);
        setInputs((currentArray)=>[input, ...currentArray])
        setInput("");
    }
    const inputWord =(e)=>{
        setInput(e.target.value);

    }

    return (//단어 리스트부분
        <div className="WordList">
            <form onSubmit={onSubmit}>
            <input type="text" placeholder="단어" 
            onChange={inputWord} />
            <input type="text" placeholder="뜻" 
            onChange={inputWord} />
            <button>추가</button>
            </form>
            <ul>
                {inputs.map((item,index)=>
                <li key={input}> 
                <input type="checkbox" name="words" key={input}/>
                {item}</li>)}
            </ul>

    
        </div>
    )
}

