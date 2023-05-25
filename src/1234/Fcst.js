import { useState, useEffect } from "react"
const Fcst = () => {
    //useStateq변수 :변수값이 변경되면 재랜더링, 컴포넌트에서만 변경가능
    const [items, setItems] = useState();
    const [trTags, setTrTags] = useState();
    useEffect(() => {
        let url = "https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst?";
        url = url + "serviceKey=SnAt4v2IijJxlhQUyUDmE6dpKigedk8Oa6y9IUKqYvlmaKqX9qZocavzaqXnTxJonAiqfJE6D6GKudC%2FqmZM7Q%3D%3D";
        url = url + "&numOfRows=60&pageNo=1";
        url = url + "&base_date=20230525";
        url = url + "&base_time=0600";
        url = url + "&nx=55&ny=127";
        url = url + "&dataType=json"
        console.log(url);

        fetch(url)
            .then((resp) => resp.json())
            .then((data) => setItems(data.response.body.items.item))
            .catch((err) => console.log(err))
    }, []);

    useEffect(() => {
        if (items === undefined) return;
        
        let temp = items.map((i,idx) =>
            <tr key = {i.category +idx }>
                <td>{i.category}</td>
                <td>{i.baseTime}</td>
                <td>{i.baseDate}</td>
                <td>{i.obsrValue}</td>
            </tr>

        );
        console.log('items', items);
        console.log(temp);
        setTrTags(temp);
    }, [items])

    return (
        <main className="container">
            <article>
                <header><h2>기상청 초단기 예보</h2></header>
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
export default Fcst;