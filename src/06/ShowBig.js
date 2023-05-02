const ShowBig = ({ c1, sel1, setsel1 }) => {
    //const show = (item) => {
    //     console.log(item)
    // };
    const btTag = c1.map((item) =>
        <li key={item}>
            <button onClick={() => setsel1(item)}>{item}</button>
        </li>
    );

    return (
        <nav>
            <ul>
                <h1>교통사고 대분류</h1>
            </ul>
            <ul>
                {btTag}

            </ul>
        </nav>

    )

}
export default ShowBig;