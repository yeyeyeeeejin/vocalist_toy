import React,{useState,useEffect}  from 'react';
import './modal.css'

export default function Modal (){
    const [modalOpen, setModalOpen] = useState(false);
    const closeModal = ()=>{
        setModalOpen(!modalOpen);
    }

    return(
        <div className='modal'>
            <div className='overlay'></div>
            <div className="modal-content">
        <p>
            커피랩 토스트 :
            방울토마토와 계란이 곁들여진 가정식 토스트.
            5500원 밖에 안한다고!!!
            빨리 먹으러오라고!! 하여튼 맛있다. 토마토에
            뭘 뿌려줌!! 오리엔탈소수인가!!
        </p>
        <button onClick={closeModal}>뒤로가기</button>
            </div>
        </div>
    )
}