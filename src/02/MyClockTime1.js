import { useState } from "react";

const MyClockTime = () => {
    const [myTime, setMytime] = useState(new Date().toLocaleTimeString());
    //let myTime = new Date().toLocaleTimeString() ;
    
    return (
        <footer>
            <h1>{myTime}</h1>
        </footer>
    );
}

export default MyClockTime;