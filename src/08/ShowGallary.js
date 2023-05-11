import { useState,useEffect } from 'react';
const ShowGallary = ({ data }) => {
    const [footTag, setFootTag] = useState();

    //let trTags = [];
    //배열 순환
    useEffect(() => {
        if (data) {
            showData(data);
        }
    }, [data]);

    const showData =(data) =>{
        
    setFootTag(console.log(`${data.galTitle}, ${data.galWebImageUrl}, ${data.galPhotographyLocation}, ${data.alSearchKeyword}`))
};
    
    
   



  


    return (
        <>
            {footTag && <span>{footTag}</span>}
        </>
    )

}
export default ShowGallary;