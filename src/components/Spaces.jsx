import "../App.css";

import Header from "./header/Header";
import Footer from "./footer/Footer";
import Rooms from "./rooms/Rooms";

function Spaces() {
    return (
        <>
            <Header />
            <main className='main'>
                <Rooms />
            </main>
            <Footer />
        </>
    );
}

export default Spaces;
