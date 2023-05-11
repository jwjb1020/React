import { useEffect, useRef, useState } from 'react'
import styles from './Gallary.module.css'
import ShowGallary from './ShowGallary';
const Gallary = () => {
    //usestate를 통해 변수 저장
    const [kw, setKw] = useState();
    const [GallaryData, setGallaryData] = useState([]);
    //키워드 input
    const txt1 = useRef();
    useEffect(() => {
        txt1.current.focus();
    }, [])
    //useEffect는 처음 한번만 실행됨, 그러나 []안에 변하는 변수가 있다면 변수가 변할때도 다시 useeffect 안에 있는 함수를 호출함( 콜백 함수)

    const show = (e) => {
        e.preventDefault();
        if (txt1.current.value === '')

            return;


        const encodekw = encodeURI(txt1.current.value);
        console.log(txt1.current.value, encodekw)

        getData(encodekw)


        //https://apis.data.go.kr/B551011/PhotoGalleryService1/galleryList1?serviceKey=SnAt4v2IijJxlhQUyUDmE6dpKigedk8Oa6y9IUKqYvlmaKqX9qZocavzaqXnTxJonAiqfJE6D6GKudC%2FqmZM7Q%3D%3D&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&_type=json
        //https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?serviceKey=SnAt4v2IijJxlhQUyUDmE6dpKigedk8Oa6y9IUKqYvlmaKqX9qZocavzaqXnTxJonAiqfJE6D6GKudC%2FqmZM7Q%3D%3D&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&keyword=%eb%b6%80%ec%82%b0&_type=json
        //
        //serviceKey=SnAt4v2IijJxlhQUyUDmE6dpKigedk8Oa6y9IUKqYvlmaKqX9qZocavzaqXnTxJonAiqfJE6D6GKudC%2FqmZM7Q%3D%3D&
        //numOfRows=10
        //pageNo=1&
        //MobileOS=ETC&
        //MobileApp=AppTest&
        //arrange=A&
        //
        //_type=json

    }

    // 여기는 인풋타입에 입력되는 값

    //관광공사 api 접속할 때 쓰는 url
    let firstUrl = "https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?";
    //서비스키
    let serviceKey = "serviceKey=SnAt4v2IijJxlhQUyUDmE6dpKigedk8Oa6y9IUKqYvlmaKqX9qZocavzaqXnTxJonAiqfJE6D6GKudC%2FqmZM7Q%3D%3D&";
    //한 페이지 결과수
    let showPage = "numOfRows=10&";
    //페이지 번호
    let showpageNo = "pageNo=1&";
    //os구분
    let MobileOS = "MobileOS=ETC&";
    //서비스 명 
    let MobileApp = "MobileApp=AppTest&";

    //정렬구분 A 촬영일 B 제목 C 수정일
    let arrange = "arrange=A&"
    //요청 키워드 (url 인코딩 한글일 경우) 키워드 뒤에는 확인 버튼을 눌렀을 때 url로 인코딩하는 usestate!!!!!! 변수가 필요할거 같음

    //응답 메세지 형식
    let endType = "_type=json";

    const clear = (e) => {

    }
    //fetch함수 만들기(데이터가져오기)
    const getData = (encodekw) => {
        let keyword = "keyword=" + encodekw + "&";
        console.log(keyword)
        let url = firstUrl + serviceKey + showPage + showpageNo + MobileOS + MobileApp + arrange + keyword + endType;
        url = url
        console.log('url', url);
        //https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?serviceKey=SnAt4v2IijJxlhQUyUDmE6dpKigedk8Oa6y9IUKqYvlmaKqX9qZocavzaqXnTxJonAiqfJE6D6GKudC%2FqmZM7Q%3D%3D&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&keyword=undefined&_type=json
        //https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?serviceKey=SnAt4v2IijJxlhQUyUDmE6dpKigedk8Oa6y9IUKqYvlmaKqX9qZocavzaqXnTxJonAiqfJE6D6GKudC%2FqmZM7Q%3D%3D&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&keyword=%EB%B6%80%EC%82%B0&_type=json  
        fetch(url)
            .then((resp) => resp.json())
            .then((data) => setGallaryData(data.response.body.items.item))
            .catch((err) => console.log(err))

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
                <div>
                    {GallaryData &&< ShowGallary data={GallaryData} />}
                </div>
            </form>
        </main>
    );
}
export default Gallary;