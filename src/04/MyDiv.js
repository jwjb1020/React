import MyDivArticle from "./MyDivArticle"
const Mydiv = () => {
    return (
        <main className="container">
            <MyDivArticle />
            <MyDivArticle aname='MyDiv1' />
            <MyDivArticle aname='MyDiv2' />
        </main>

    );
}
export default Mydiv;