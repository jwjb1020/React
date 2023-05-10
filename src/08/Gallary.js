import { useEffect, useRef } from 'react'
import styles from ''
const Gallary = () => {
    //키워드 input
    const txt1 = useRef();
    useEffect(()=>{
        txt1.current.focus();
    },[])

    const show = (e) => {
        if(txt1.current.value === '') return;

        let kw = encodeURI(txt1.current.value);
        console.log(txt1.current.value, kw)
       
        

    }
    const clear = (e) =>{

    }

    return (
        <main>
            <form>
                <div className="grid">

                    <article>
                        <header><h1>한국관광공사_사진정보</h1></header>
                        <div>
                            
                            <input ref={txt1} type="text" id="txt1" placeholder='입력해주세요!' required />

                        </div>
                        <div className={styles.btDiv}>
                            <button onClick={(e) =>show(e)} >확인</button>
                            <button onClick={(e) =>clear(e)}>취소</button>

                        </div>
                    </article>

                </div>
            </form>
        </main>
    );
}
export default Gallary;