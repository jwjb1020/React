import { useEffect, useState } from "react";
import FcstTable from "./FcstTable";
import { useParams } from "react-router-dom";
import code from "./getcode.json";
const UltraSrtFcst = () => {

    const ops2 = code.filter((item) => item["예보구분"] === "초단기예보"
    )
    console.log(ops2);
    let i=0;
    const op3 = ops2.map((item) => <option value={item["예보구분"]} key={i++}>
        {item["항목명"]}({item["항목값"]})</option>)
    const { dt } = useParams();
    console.log(dt);
    const { area } = useParams();
    console.log(area);

    const { x } = useParams();
    console.log(x);
    const { y } = useParams();
    console.log(y);
    //pageNo=1&numOfRows=1000&dataType=JSON&base_date=20230521&base_time=0630&nx=55&ny=127

    let base_date = dt;

    let nx = x;
    let ny = y;
    let url = `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey=SnAt4v2IijJxlhQUyUDmE6dpKigedk8Oa6y9IUKqYvlmaKqX9qZocavzaqXnTxJonAiqfJE6D6GKudC%2FqmZM7Q%3D%3D&pageNo=1&numOfRows=1000&dataType=json&base_date=${base_date}&base_time=0500&nx=${nx}&ny=${ny}`
    const [datas, setDatas] = useState();
    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => setDatas(data.response.body.items))
            .catch((err) => console.log(err))
    }, [])




    return (
        <article>
            <header>
                <div className="grid">
                    <div>
                        <h1>{area}</h1>
                    </div>

                    <div>
                        <select id="sel" required>
                            <option value=" " selected>선택</option>

                            {op3}
                            {datas && <FcstTable datas={datas} gb="초단기예보" />}

                        </select>
                    </div>
                </div>
            </header>
            {/* props로 넘겨서 테이블 띄우기 */}
            <FcstTable />
        </article>
    );

}

export default UltraSrtFcst;