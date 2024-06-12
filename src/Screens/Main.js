import { useState } from 'react'
import './Main'
import DropDown from '../components/DropDown'
import {CategoryUpdate, AddWord} from '../components/wordBoard';


export default function Main (){
    const [selected,setSelected] =useState("");
    return(
        <div className="container">
            <div className="mainbox">
                <div className="header">
                    <h1>단어장</h1>
                    
                    <div className="options">
                        <DropDown selected={selected}
                            setSelected={setSelected}
                        />
                        <AddWord/>
                        <CategoryUpdate/>
                        <button type="button" className="button">가리기!</button>
                    </div>
                </div>
                <div className="contents"> 
                <span>단어</span>
                <span>뜻</span>
                </div>
            </div>
            </div>
    )
    
}

