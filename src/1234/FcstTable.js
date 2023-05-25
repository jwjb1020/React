import { useState, useEffect, useRef } from "react"
import code from "./getcode.json"
const FcstTable = ({ items, gubun }) => {
    console.log(gubun);
    console.log(items);
    //useStateq변수 :변수값이 변경되면 재랜더링, 컴포넌트에서만 변경가능
    //const [items, setItems] = useState();
    const [trTags, setTrTags] = useState();
    const [opTags, setOpTags] = useState();
    const sel = useRef();
    useEffect(() => {

        // let url = 'https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?';
        // url = url + "serviceKey=SnAt4v2IijJxlhQUyUDmE6dpKigedk8Oa6y9IUKqYvlmaKqX9qZocavzaqXnTxJonAiqfJE6D6GKudC%2FqmZM7Q%3D%3D";
        // url = url + "&numOfRows=60&pageNo=1";
        // url = url + "&base_date=20230525";
        // url = url + "&base_time=0600";
        // url = url + "&nx=55&ny=127";
        // url = url + "&dataType=json"
        // console.log(url);

        // fetch(url)
        //     .then((resp) => resp.json())
        //     .then((data) => setItems(data.response.body.items.item))
        //     .catch((err) => console.log(err))

        let tempcd = code.filter((i) => i["예보구분"] === gubun);
        // console.log("code", code);
        tempcd = tempcd.map((i) =>
             //<option key={i["항목값"]} value={i["항목값"]}>{i["항목명"]}({i["항목값"]})</option>
             <option key={i[" 항목값"]} value={i["항목값"]}>{i["항목명"]}({i["항목값"]})</option>
        );
        setOpTags(tempcd);
        console.log(tempcd);

    }, []);

    // useEffect(() => {
    //     if (items === undefined) return;
    //     let temp = items.filter((i) => i.category === sel.current.value);
    //     let tempcd = code.filter((i) => i["예보구분"] === gubun && i["항목값"] === sel.current.value);
    //     tempcd = tempcd[0]
    //     let skyobj = { "1": "맑음", "3": "구름많음", "4": "흐림" }
    //     let ptyobj = { "0": "없음", "1": "비", "2": "비/눈", "3": "눈", "5": "빗방울", "6": "빗방울날림", "7": "눈날림" }
    //     temp = temp.map((i, idx) =>
    //         <tr key={i.category + idx}>
    //             <td>{tempcd["항목명"]}</td>
    //             <td>{i.fcstDate}</td>
    //             <td>{i.fcstTime}</td>
    //             <td>
    //                 {(i.category === "SKY") ? skyobj[i.fcstValue]
    //                     : (i.category === "PTY") ? ptyobj[i.fcstValue] :
    //                         i.fcstValue + tempcd["단위"]}

    //             </td>

    //         </tr>

    //     );
    //     console.log('items', items);
    //     console.log(temp);
    //     setTrTags(temp);
    // }, [gubun])


    const showItem = (e) => {
        e.preventDefault();
        console.log("sel", sel.current.value)
        if (items === undefined) return;
        let temp = items.filter((i) => i.category === sel.current.value);
        let tempcd = code.filter((i) => i["예보구분"] === gubun && i["항목값"] === sel.current.value);
        tempcd = tempcd[0]
        let skyobj = { "1": "맑음", "3": "구름많음", "4": "흐림" }
        let ptyobj = { "0": "없음", "1": "비", "2": "비/눈", "3": "눈", "5": "빗방울", "6": "빗방울날림", "7": "눈날림" }
        temp = temp.map((i, idx) =>
            <tr key={i.category + idx}>
                <td>{tempcd["항목명"]}</td>
                <td>{i.fcstDate}</td>
                <td>{i.fcstTime}</td>
                <td>
                    {(i.category === "SKY") ? skyobj[i.fcstValue]
                        : (i.category === "PTY") ? ptyobj[i.fcstValue] :
                            i.fcstValue + tempcd["단위"]}

                </td>

            </tr>

        );
        console.log('items', items);
        console.log(temp);
        setTrTags(temp);

    }
    return (
        <main className="container">
            <article>
                <header>
                    <form>
                        <div className="grid">
                            <div><h2>기상청 {gubun} </h2></div>
                            <div>
                                <select ref={sel} id="sel" name="sel" onChange={(e) => showItem(e)}>

                                    <option val="">선택</option>
                                    {opTags}
                                </select>

                            </div>

                        </div>
                    </form>
                </header>
                <table>
                    <thead>
                        <tr>
                            <th scope="col">자료구분 코드</th>
                            <th scope="col">예측일자</th>
                            <th scope="col">예측시간</th>
                            <th scope="col">예보 값</th>

                        </tr>
                     
                            {items && trTags}
                       
                    </thead>
                </table>
            </article>
        </main>



    );
}
export default FcstTable;