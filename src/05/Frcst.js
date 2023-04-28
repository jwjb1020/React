import data from './dataFrcst.json'
import style from './Frcst.module.css'
import { useState } from 'react';
const Frcst = () => {
    const dtkey = ["frcstOneDt", "frcstTwoDt", "frcstThreeDt", "frcstFourDt"];
    const cnkey = ["frcstOneCn", "frcstTwoCn", "frcstThreeCn", "frcstFourCn"];
    //dtkey.map((item) => console.log(data[item]));
    //cnkey.map((item) => console.log(data[item]));
    //console.log(dtkey[0])
    //오브젝트 값 설정하기
    let dtcn = {};
    dtkey.map((item, idx) => dtcn[data[item]] = data[cnkey[idx]]);

    console.log(dtcn);
    //상세정보 보기
    const [showTag, setshowTag] = useState('');
    const detail = (k) => {
        setsellTag(k);
        let dtcnItem = dtcn[k].split(',')
        dtcnItem = dtcnItem.map((item) => item.split(':'))
        dtcnItem = dtcnItem.map((item) =>
            <div key={item[0]}>
                <span className={style.sp1}>{item[0]}</span>
                {item[1].trim() === '낮음' ? <span className={style.sp2}>{item[1]}</span>
                    : item[1].trim() === '보통' ? <span className={style.sp3}>{item[1]}</span>
                        : <span className={style.sp4}>{item[1]}</span>}

            </div>)
        setshowTag(dtcnItem);

    }



    //console.log(k,dtcn[k])



    const [sellTag, setsellTag] = useState('');


    let DtTag = [];

    DtTag = Object.keys(dtcn).map((item, idx) =>
        <div className={sellTag === item ? style.dt1 : style.dt}
            key={idx}
            onClick={() => detail(item)}>
            <h2 className={style.it}>{item}</h2>
        </div>
    );
    return (
        <main className='container'>

            <article>
                <header className={style.header}>
                    <h1 className={style.h1}>초미세먼지 주간예보</h1>
                    <div className='grid'>
                        {DtTag}

                    </div>



                </header>
                <div className='grid'>
                    {showTag}
                    
                </div>

            </article>

        </main>


    );

}
export default Frcst;