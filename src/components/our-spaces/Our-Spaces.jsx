import React from "react";
import "./our-spaces.css";
import { Link } from "react-router-dom";
import Space1 from "../../assets/space 1.jpg";
import Space2 from "../../assets/space 2.jpg";
import Space3 from "../../assets/space 3.jpg";

const OurSpaces = () => {
    return (
        <section className='about section' id='about'>
            <div>
                <h2
                    className=' text-center text-[3.125rem] font-[900] text-black'
                    id='spaces__title'
                >
                    Our Spaces
                </h2>
                <span className='section__subtitle mb-8' id='spaces__text'>
                    Our amenities were specifically crafted to create an
                    atmosphere
                    <br />
                    of relaxation and luxury for our clients, making sure they
                    enjoy
                    <br />
                    Tequila the way we know they would like.
                </span>
                <Link
                    to='/spaces'
                    className=' text-2xl w-52 h-10 flex flex-col text-center items-center justify-center transition duration-[.6s] text-slate-100 bg-[#505E5D] rounded-xl font-extrabold hover:font-black hover:bg-[rgba(80,94,93,0.8)] nav__link mr-auto ml-auto hover:scale-105'
                    id='spaces__button'
                >
                    Learn more
                </Link>
                <div className='flex flex-col md:flex-row justify-around md:w-5/6 md:h-4/6 mr-auto ml-auto md:gap-4 mt-10'>
                    <img
                        src={Space1}
                        alt='Space1'
                        className='w-300px md:w-[20vw] object-contain hidden md:block'
                        id='spaces__img1'
                    />
                    <img
                        src={Space2}
                        alt='Space2'
                        className='w-700px md:w-[46vw] object-cover'
                        id='spaces__img2'
                    />
                    <img
                        src={Space3}
                        alt='Space3'
                        className='w-300px md:w-[20vw] object-fill hidden md:block'
                        id='spaces__img3'
                    />
                </div>
            </div>
        </section>
    );
};

export default OurSpaces;
