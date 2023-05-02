const ShowMiddle = ({ c2, sel1, sel2, setsel2 }) => {
    const c2arr = c2.filter((item) =>item[0]== sel1)

    const btTag2 = c2arr.map((item) =>
        <li key={item}>
            <button onClick={() => setsel2(item)}>{item}</button>
        </li>
    );

    return (
        <nav>
            <ul>
                <h1>교통사고 중분류</h1>
            </ul>
            <ul>
                {btTag2}

            </ul>
        </nav>

    );


}
export default ShowMiddle;