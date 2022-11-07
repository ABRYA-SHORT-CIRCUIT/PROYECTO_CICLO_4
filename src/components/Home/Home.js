import Newsletter from "../commons/Newsletter";
import Banner from "./Banner";
import Info from "./Info";
import Content from "./Content";

function Home() {
    return (
        <div className="home-main">
            <Banner />
            <Content />
            <Info />
            <Newsletter />
        </div>
    )
}

export default Home;