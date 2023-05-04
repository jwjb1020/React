import { useState, useRef, useEffect } from "react";
const Myref = () => {
    const txtref = useRef();
    //const txtref2 = useRef();
    useEffect(() => {
        txtref.current.focus();
        //focus 첨 렌더링 될때 나오는

    }, []);

    const itemArr = useRef([]);
    const [itemTag, setitemTag] = useState();

    const addItem = (e) => {
        e.preventDefault();
        let i1 = itemArr.current = [...itemArr.current, txtref.current.value];
        console.log("addItem =", itemArr.current)
        i1 = new Set(itemArr.current)
        setitemTag(i1);
    }

    const resetItem = (e) => {
        console.log("resetItem")

    }

    

    return (
        <main className="container">
            <article>
                <header>
                    <form>
                        <div className="grid">
                            <div>
                                <label htmlFor="txt1">과일/채소 입력</label>
                                <input ref={txtref} type="text" id="txt1" required />
                                
                            </div>
                            <div>
                                <button onClick={(e) => addItem(e)}>등록</button>
                                <button onClick={(e) => resetItem(e)}>취소</button>
                            </div>
                        </div>
                    </form>
                </header>
                <div className="grid">
                    {itemTag}
                </div>
            </article>
        </main>
    );
}
export default Myref;