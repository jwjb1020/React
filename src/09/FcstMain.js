import { Link } from "react-router-dom";
import {useState, useRef, useEffect } from "react";
import xy from './getxy.json' ;

const FcstMain = () => {
    const ops = xy.map((item) => 
        <option value={item["행정구역코드"]} key={item["행정구역코드"]} >{item["1단계"]}</option>
    );
    // console.log(xy);

    //입력 값을 가져오기 위한 ref변수
    const txt1 = useRef();
    const sel = useRef();
    //state변수
    const [dt, setDt] = useState();
    const [area, setArea] = useState();
    const [x, setX] = useState();
    const [y, setY] = useState();


    

    //테스트
    let tdt;
    

    useEffect(() => {
        console.log(dt);

    }, [dt]);

    


    //입력 이벤트
    const getDt = () => {
        tdt = txt1.current.value;
        tdt = tdt.replaceAll('-', '');
        setDt(tdt);
        
    };

    
    const getSel = (item) => {
        console.log(sel.current.value);
        let temp = xy.filter((item) => item["행정구역코드"] ===parseInt(sel.current.value))[0] ;
        console.log(temp["격자 X"]);
        setArea(temp["1단계"]);
        setX(temp["격자 X"]);
        setY(temp["격자 Y"]);
        console.log(x);

        console.log(sel.current);
        // xy.forEach((item2) => {
        //     if(item2["행정구역코드"] == item.value){
        //         x = item2["격자 X"];
        //         y = item2["격자 Y"];
        //         console.log("nx : ", nx, " ny : ", ny);
        //     }
        // });
    };

    return (
        <article>
            <header><h1>단기예보 선택</h1></header>
            <div className="grid">
                <div>
                    <input ref={txt1} type="date" name="date1" id="date1" onChange={() => getDt()}/>
                </div>
                <div>
                    <select ref={sel} id="sel" onChange={(item) => getSel(item)} required>
                        <option value=" " selected>선택</option>
                        {ops}
                    </select>
                </div>
            </div>
            <footer>
                <div className="grid">
                    <Link to={`/ultra/${dt}/${area}/${x}/${y}`} role="button" >초단기예보</Link>
                    <Link to={`/vilage/${dt}/${area}/${x}/${y}`} role="button" >단기예보</Link>
                </div>
            </footer>
        </article>

    );

}

export default FcstMain;