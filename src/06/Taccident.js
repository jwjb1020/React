import ShowBig from './ShowBig';
import ShowMiddle from './ShowMiddle';
import ShowSmall from './ShowSmall';
import data from './dataTaccident.json';
import { useState, useEffect } from 'react';
const Taccident = () => {

    //데이터 값 가지고 오기
    //console.log(data['data']);
    //console.log(data.data);


    //데이터 안에서 사고유형_ 대분류 뽑아오기
    const data2 = data.data;
    let c1 = data2.map((item) => item.사고유형_대분류);

    //console.log(c1);
    //console.log(data.data.map(item => item.사고유형_대분류));

    // Set으로 중복 없에기 - 오브젝트 나옴
    c1 = new Set(c1);
    //console.log(c1);

    //... -  데이터를 배열로 두개도 붙일 수 있음 [...c1,...c2...c3]
    c1 = [...c1]
    //console.log(c1);

    //let temp = [];
    /* const c2 = [];
    for(let item of data2){
        temp.push(item.사고유형_대분류);
        temp.push(item.사고유형_중분류)
        c2.push(temp);
    } */


    const c2 = data2.map((item) => [item.사고유형_대분류, item.사고유형_중분류]);
    //console.log(c2)

    const [sel1, setsel1] = useState(0); //대분류 선택
    const [sel2, setsel2] = useState([]); //중분류 선택
    const [seldata, setseldata] = useState({});
    // useEffect(() => {
    //    console.log('Taccident sel1 useeffect []', sel1)

    // }, []);

    //useEffect(() => {
    //    console.log('Taccident sel1 useeffect []', sel1)

    //}, [sel1]);

    useEffect(() => {
        console.log('Taccident sel2 useeffect ', sel2)
        let temp = data2.filter((item) => item.사고유형_대분류 === sel2[0] &&
            item.사고유형_중분류 === sel2[1]);
        setseldata(temp[0])


    }, [sel2]);

    useEffect(() => {
        console.log('Taccident selData useeffect', seldata)

    }, [seldata]);

    //useEffect(() => {
    //    console.log('Taccident sel1 useeffect', sel1)

    //});
    return (
        <main>
            <header>
                <ShowBig c1={c1} sel1={sel1} setsel1={setsel1} />
                <ShowMiddle c2={c2} sel1={sel1} sel2={sel2} setsel2={setsel2} />

            </header>
            
                <ShowSmall  />
           

        </main>
    )





}
export default Taccident;