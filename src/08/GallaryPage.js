import styles from './Gallary.module.css'
import ShowGallary from './ShowGallary';

import { useEffect, useRef, useState } from 'react'

const GallaryPage = ({ pageKey, setPageKey, show }) => {
    console.log(pageKey)
    // 다음 페이지로 넘어가게 하기



    const showPre = (e) => {
        e.preventDefault();
        setPageKey((pageKey) => Math.max(1, pageKey - 1));
        show(e)




    }
    //이전페이지로 넘어가게 하기
    const showNext = (e) => {
        e.preventDefault();
        setPageKey((prevPageKey) => prevPageKey + 1);
        show(e)
    }

    return (<div className={styles.page}>
        <button onClick={(e) => showPre(e)}>이전</button>
        {/* <button onClick={(e) => showNext(e)}>다음</button> */}
        <button onClick={(e) =>
            showNext(e)
        }>다음</button>
    </div>);
}
export default GallaryPage;