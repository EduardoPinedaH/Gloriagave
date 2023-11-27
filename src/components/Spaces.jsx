import "../App.css";

import Header from "./header/Header";
import Footer from "./footer/Footer";
import Rooms from "./rooms/Rooms";
import ScrollUp from "./scroll-up/ScrollUp";

function Spaces() {
    return (
        <>
            <Header />
            <main className='main'>
                <Rooms />
            </main>
            <Footer />
            <ScrollUp />
        </>
    );
}

export default Spaces;
