//import BoxRows from "./BoxRows";
import BoxRows1 from "./BoxRows1";
import './Box.css';
import { useRef, useState, useEffect } from "react";


const Box = () => {




    const [mvlist, setmvlist] = useState();
    let seldt;
    useEffect(() => {
        let yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        seldt = yesterday.getFullYear();

        let month = yesterday.getMonth() + 1;
        month = month < 10 ? `0${month}` : month;
        let day = yesterday.getDate();
        day = day < 10 ? `0${day}` : day;
        seldt = `${seldt}${month}`
        seldt = `${seldt}${day}`
        console.log(seldt)
        getData(seldt)
    }, [])

    //날짜 입력
    const dt1 = useRef();
    //날짜 선택
    const getDt = () => {
        seldt = dt1.current.value.replaceAll('-', '')
        console.log("dt1 = ", seldt)
        getData(seldt);

        // let url = 'http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt='
        // url = url + seldt;
        // console.log('url', url);

        // fetch(url)
        //     .then((resp) => resp.json())
        //     .then((data) => setmvlist(data.boxOfficeResult.dailyBoxOfficeList))
        //     .catch((err) => console.log(err))
    }

    //fetch함수 만들기(데이터가져오기)
    const getData = (sd) => {
        let url = 'http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt='
        url = url + sd;
        console.log('url', url);

        fetch(url)
            .then((resp) => resp.json())
            .then((data) => setmvlist(data.boxOfficeResult.dailyBoxOfficeList))
            .catch((err) => console.log(err))

    }

    return (
        <main className="container">
            <article>
                <header><h1>일일박스오피스</h1></header>

                <ul>
                    <li>
                        <input ref={dt1} type="date" id="dt1" name="dt1" onChange={() => getDt()} />
                    </li>
                </ul>
                <table>
                    <thead>
                        <tr>
                            <th scope="col">순위</th>
                            <th scope="col">영화명</th>
                            <th scope="col">매출액</th>
                            <th scope="col">증감</th>
                        </tr>
                    </thead>

                    {/* <BoxRows mv={mvlist} />  */}
                    {mvlist && < BoxRows1 mv={mvlist} />}

                    <tfoot>

                    </tfoot>
                </table>
            </article>
        </main>
    );

}

export default Box;