import { useEffect, useRef } from 'react'
import styles from './Gallary.module.css'
const Gallary = () => {
    //키워드 input
    const txt1 = useRef();
    useEffect(() => {
        txt1.current.focus();
    }, [])
    //useEffect는 처음 한번만 실행됨, 그러나 []안에 변하는 변수가 있다면 변수가 변할때도 다시 useeffect 안에 있는 함수를 호출함( 콜백 함수)

    const show = (e) => {
        if (txt1.current.value === '') return;

        let kw = encodeURI(txt1.current.value);
        console.log(txt1.current.value, kw)

        //https://apis.data.go.kr/B551011/PhotoGalleryService1/galleryList1?serviceKey=SnAt4v2IijJxlhQUyUDmE6dpKigedk8Oa6y9IUKqYvlmaKqX9qZocavzaqXnTxJonAiqfJE6D6GKudC%2FqmZM7Q%3D%3D&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&_type=json
        //https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?serviceKey=SnAt4v2IijJxlhQUyUDmE6dpKigedk8Oa6y9IUKqYvlmaKqX9qZocavzaqXnTxJonAiqfJE6D6GKudC%2FqmZM7Q%3D%3D&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&keyword=%eb%b6%80%ec%82%b0&_type=json
        //https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1
        //serviceKey=SnAt4v2IijJxlhQUyUDmE6dpKigedk8Oa6y9IUKqYvlmaKqX9qZocavzaqXnTxJonAiqfJE6D6GKudC%2FqmZM7Q%3D%3D
        //numOfRows=10
        //pageNo=1&
        //MobileOS=ETC&
        //MobileApp=AppTest&
        //arrange=A&
        //keyword=%eb%b6%80%ec%82%b0&
        //_type=json
    }

    const clear = (e) => {

    }

    return (
        <main>
            <form>
                <div className="grid">

                    <article>
                        <header><h1>한국관광공사_사진정보</h1></header>


                        <div className={styles.Div1}>

                            <input ref={txt1} type="text" id="txt1" placeholder='입력해주세요!' required />
                            <div className={styles.btDiv}>
                                <button onClick={(e) => show(e)} >확인</button>
                                <button onClick={(e) => clear(e)}>취소</button>

                            </div>
                        </div>


                    </article>

                </div>
            </form>
        </main>
    );
}
export default Gallary;