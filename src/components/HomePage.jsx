import "../App.css";

import Header from "./header/Header";
import Home from "./home/Home";
import OurSpaces from "./our-spaces/Our-Spaces";
import About from "./about/About";
import Location from "./location/Location";
import Footer from "./footer/Footer";

function HomePage() {
    return (
        <>
            <Header />
            <Home />
            <OurSpaces />
            <About />
            <Location />
            <Footer />
        </>
    );
}

export default HomePage;
