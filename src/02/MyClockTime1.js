import { useState } from "react";
import './MyClock.css';
import style from './MyClockTime.module.css'
const MyClockTime1 = () => {
    let t = new Date().toLocaleTimeString();
    let myDate = new Date().toLocaleDateString();
    const [myTime, setMyTime] = useState(t);
    setInterval(() => setMyTime(new Date().toLocaleTimeString()), 1000);
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