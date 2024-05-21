import "./css/header.css"

export default function WordCataory(){
    return(
        <div className="wordOptions">
        <p className="addword">단어추가</p>
        <form>
        <select name="language" id="language">
            <option value="javascript">JavaScript</option>
            <option value="python">Python</option>
            <option value="c++">C++</option>
            <option value="java">Java</option>
        </select>
        <button className="C-button">카테고리 설정</button>
        <button className="C-button">가리기</button>
        </form>
      
        </div>
    )
}