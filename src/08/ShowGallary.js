import { useState, useEffect } from 'react';
import styles from './Gallary.module.css'
const ShowGallary = ({ data }) => {
    console.log(data)

    //tags 값들 끊어서 배열 만들기


    const showPhoto = data.map((item, index) => {
        const tagItem = item.galSearchKeyword;
        const tagItemArr = tagItem.split(',')
        
        return (
        <article className={styles.photos} key={index}>
            <h2> {item.galTitle}</h2>
            <img src={item.galWebImageUrl}>

            </img>
            <div className={styles.tags}>
                {tagItemArr.map((tag,tagIdx)=>
                 <span key={tagIdx}> # {tag} </span> )
                } 
            </div>

        </article>)

    });






    return (

        <div className={styles.gridcontainer}>
            {showPhoto}

        </div>
    );

}
export default ShowGallary;