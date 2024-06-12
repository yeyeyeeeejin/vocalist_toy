import { useState } from 'react';
import { useRef } from 'react';
import './css/wordBoard.css';
import './css/btn.css';

/* 카테고리 수정 / 삭제 */
export function CategoryUpdate() {
  const [modalOpen, setModalOpen] = useState(false);
  
  const closeModal = ()=>{
    setModalOpen(!modalOpen);
  }
  const modalBackground = useRef();

  return (
    <div>
       <div className={'btn-wrapper'}>
        <button className={'button'} onClick={() => setModalOpen(true)}>
          카테고리 설정
        </button>
      </div> 
      {
        modalOpen &&
        <div className='modal'>
        <div className='overlay' ref={modalBackground} onClick={e => {
          if (e.target === modalBackground.current) {
            setModalOpen(false);
          }}}>  
          <div className='modal-content'>
            <div className='setCategory'>
              <h1 className='categoryTitle'>카테고리 설정</h1>

              <div className='addCategory'>
                <AddCategory />
              </div>
              <button onClick={closeModal}>뒤로가기</button>

              <div className='category-radio'>
                <div className='form-check'>
                  <FormCheck id='english' text='영어단어' />
                </div>
                <div className='form-check'>
                  <FormCheck id='japanese' text='일본어' />
                </div>
              </div>

              <div className='btn'>
                <Btn text='삭제'/>
              </div>
            </div>
          </div>
          </div>
          </div>
      }
    </div> 
    
  )
}

/* 카테고리 추가 */
function AddCategory() {
  return (
    <>
      <input className='addCategoryinput' />
      <button className='addBtn'>추가</button>
    </>
  )
}

/* 카테고리 목록 */
function FormCheck ({id, text}) {
  return (
    <>
      <input
        className='form-check-input'
        type='radio'
        name='category'
        id={id}
      />
      <label className='form-check-lable'>{text}</label>
    </>
  )
}

/* 카테고리 삭제 버튼 */
function Btn ({text}) {
  return (
    <button>{text}</button>
  )
}

/* 단어 추가 */
export function AddWord() {
  const [modalOpen, setModalOpen] = useState(false);
  const modalBackground = useRef();
  
  return (
    <>
      <div className={'btn-wrapper'}>
        <button className={'button'} onClick={() => setModalOpen(true)}>
          단어추가
        </button>
      </div>
      {
        modalOpen &&
        <div className='modal'>
        <div className='overlay' ref={modalBackground} onClick={e => {
          if (e.target === modalBackground.current) {
            setModalOpen(false);
          }
        }}>
          <div className='modal-content'>
            <h1 className='wordTitle'>단어추가</h1>
              <WordName text='단어명' />
              <WordName text='단어뜻' />
              <WordCategorydiv />
              <div className='btn'>
                <Btn text='추가' />
              </div>            
          </div>
        </div>
      </div>
      }
      
    </>
  );
}

/* 단어명/단어뜻 입력 */
function WordName({text}) {
  return(
    <div className='wordName'>
      <p className='word'>{text}</p>
      <input className='addwordinput' />
    </div>
  )
}

/* 카테고리 선택 */
function WordCategorydiv () {
  return(
    <div className='wordCategorydiv'>
      <select className='wordCategory'>
        <option selected>카테고리 선택</option>
        <option value='en'>영어</option>
        <option value='jp'>일본어</option>
        <option value='ch'>중국어</option>
      </select>
    </div>   
  )
}

/* 단어 수정/삭제 */
function WordUpdate() {
  const [modalOpen, setModalOpen] = useState(false);
  const modalBackground = useRef();
  
  return (
    <>
      <div className={'btn-wrapper'}>
        <button className={'modal-open-btn'} onClick={() => setModalOpen(true)}>
          단어 수정/삭제
        </button>
      </div>
      {
        modalOpen &&
        <div className={'modal'} ref={modalBackground} onClick={e => {
          if (e.target === modalBackground.current) {
            setModalOpen(false);
          }
        }}>
          <div className={'modal-content'}>
            <h1 className='wordTitle'>단어 수정/삭제</h1>

            <div className='wordUpdate'>
              <Word word='단어명' name='guitar' />
              <Word word='단어뜻' name='기타' />

              <WordCategorydiv />

              <div className='btn'>
                <Btn text='수정' />
                <Btn text='삭제' />
              </div>
            </div>              
          </div>
        </div>
      }
    </>
  );
}

/* 단어명/단어뜻 */
function Word({word, name}) {
  return(
    <div className='wordName'>
      <p className='word'>
        {word} <br></br>
        {name}
      </p>
    </div>
  )
}


/* 실행 */
function App() {

  return (
    <>
      <CategoryUpdate />
      <AddWord />
      <WordUpdate />
    </>
    
  );
}

