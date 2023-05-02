const ShowSmall = ({ seldata,setseldata }) => {
    const c3arr = setseldata.map((item) => console.log(item))
    return (
        <div className="gird">
                {c3arr}
            </div>
    



    );
}
export default ShowSmall;