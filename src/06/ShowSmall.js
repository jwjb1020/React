const ShowSmall = ({seldata}) => {
   const tagkey = ['사고건수','사망자수','중상자수','경상자수','부상신고자수']
    let tags = tagkey.map((k,idx) =>
    <div key = {'k '+ idx}>
        {k} : {seldata[k]}

    </div>
    )
    return (


        <div className = 'grid'>
            {tags}
        </div>






    );
}
export default ShowSmall;