import "../App.css";

import sdk1 from "../assets/suite deluxe king 1.jpg";
import sdk2 from "../assets/suite deluxe king 2.jpg";
import sdk3 from "../assets/suite deluxe king 3.jpg";

import Header from "./header/Header";
import Footer from "./footer/Footer";

function Spaces() {
    return (
        <>
            <Header />
            <div className='w-3/4 m-auto'>
                <div className=' mt-20'>
                    {RoomsInfo.map((index) => (
                        <div>
                            <div>
                                <img src={index.img1} alt='img1' />
                                <img src={index.img2} alt='img2' />
                                <img src={index.img3} alt='img3' />
                            </div>

                            <div>
                                <h1>{index.title}</h1>
                                <p>{index.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
}

const RoomsInfo = [
    {
        title: "Suite Deluxe King",
        description:
            "A quaint town nestled in  Jalisco, built with cobblestone streets and the aroma of blue agave, a place where history and tradition harmonize in every adobe wall. Its essence, distilled in the warmth of hospitality, beckons travelers to savor the rich heritage woven into its vibrant tapestry.",
        img1: sdk1,
        img2: sdk2,
        img3: sdk3,
    },
];

export default Spaces;
