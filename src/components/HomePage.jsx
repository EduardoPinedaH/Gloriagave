import "../App.css";

import Header from "./header/Header";
import Home from "./home/Home";
import OurSpaces from "./our-spaces/Our-Spaces";
import About from "./about/About";
import Location from "./location/Location";
import Footer from "./footer/Footer";
import ScrollUp from "./scroll-up/ScrollUp";

function HomePage() {
    return (
        <>
            <Header />
            <main className='main'>
                <Home />
                <OurSpaces />
                <About />
                <Location />
            </main>
            <Footer />
            <ScrollUp />
        </>
    );
}

export default HomePage;
