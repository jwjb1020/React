import { useState } from "react";
import './MyClock.css';
import style from './MyClockTime.module.css'
const MyClockTime1 = () => {
    const [myTime, setMytime] = useState(new Date().toLocaleTimeString());
    //let myTime = new Date().toLocaleTimeString() ;

    return (

        <footer>
            <hgroup>
                <h1>{myTime}</h1>
                <h2 id={style.maah2}> {myDate} </h2>
            </hgroup>
        </footer>
    );
}

export default MyClockTime1;