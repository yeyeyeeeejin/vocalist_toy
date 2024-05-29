import {useState} from 'react';
import './DropDown.css';
const options=['영어','중국어','오픽']

export default function DropDown ({selected, setSelected}){
    const [isActive,setIsActive]=useState(false);
    return(
        <div className="dropdown">
            <div className="dropdown-btn" onClick ={(e)=>
            setIsActive(!isActive)}>
            {selected}
                <span className="downbtn">▼</span>
            </div>
            {isActive && (
                <div className="dropdown-content">
                {options.map((option) =>(
                    <div onClick ={(e) => {
                    setSelected(option)
                    setIsActive(false)
                    }}
                 className="dropdown-item">{option}</div>
                ))}
                
            </div>
            )}

        </div>
    )
}