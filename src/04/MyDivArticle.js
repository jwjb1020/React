//전역으로 적용
import './MyDiv';
// 컴포넌트에 적용
import style from './MyDiv.module.css';
//1단계 - state 변수 사용
import { useState } from 'react';
const MyDivArticle = ({ aname }) => { //probs를 변수로 가져옴 probs == {aname}
    //const aname = probs.aname       // 위에 처럼 하면 변수 안써도됨 (매개변수 probs )
    let n = (aname === undefined) ? '0' : aname.slice(-1);
    //let cnt = 0;
    //console.log(n);
    //2단계 state 변수선언
    const [cnt, setCnt] = useState(0);
    const [cnt1, setCnt1] = useState(0);
    const [cnt2, setCnt2] = useState(0);
    //click 이벤트 처리
    const like = (n) => {// 매개 변수 n 있으면 밑에 있는 like 함수만 쓰면 안되고 람다식 함수형으로 변형 해야함
        //cnt = cnt + n;
        //2단계 state 변수내용 변경
        setCnt(cnt + n);
        console.log(cnt)
    }
    const sad = (n) => {
        setCnt1(cnt1 + n);

    }
    const love = (n) => {
        setCnt2(cnt2 + n);

    }
    return (
        <article>
            <header><h1 className={style.h1}>{aname || 'MyDiv0'}</h1></header>
            <ul className={style.aul}>
                <li className={style.ali}>{aname || 'MyDiv0'}</li>
                <li className={style.ali}>{aname}2</li>
                <li className={style.ali}>{n === '0' ? 'MyDiv0' : 'MyDiv' + n}</li>
            </ul>
            {n === "2" &&  //앞이 참이면 뒤에가 나오세용~
                <footer>
                    <h2><span onClick={() => like(1)}>😀</span>{cnt}
                        <span onClick={() => sad(1)}>😂</span>{cnt1}
                        <span onClick={() => love(1)}>😍</span>{cnt2}
                    </h2>
                </footer>

            }
        </article >
    );
}
export default MyDivArticle;