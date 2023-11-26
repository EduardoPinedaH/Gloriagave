import React from "react";
import "./home.css";
import HeroImg from "../../assets/HeroImg.png";

const Home = () => {
    return (
        <section className='home section -mt-10 md:-mt-0' id='home'>
            <img
                src={HeroImg}
                alt='HeroImg'
                className='md:w-[100vw] h-[25rem] md:h-auto object-cover z-[99999]'
            />
            <div className='home__container container grid mt-5'>
                <div className='flex md:flex-row flex-col justify-between'>
                    <div className='flex flex-col mt-5 md:mt-0'>
                        <h1
                            className='text-xl md:text-3xl font-light'
                            id='home__title'
                        >
                            Enjoy Tequila
                        </h1>
                        <h2
                            className='text-3xl md:text-5xl ml-20 md:ml-36 font-extrabold'
                            id='home__text'
                        >
                            with comfort...
                        </h2>
                    </div>
                    <div className='flex justify-end mr-10'>
                        <a
                            href='#reserve_link'
                            className='text-2xl w-44 h-10 flex flex-col text-center items-center justify-center transition duration-[.3s] text-slate-100 bg-[#505E5D] rounded-xl font-extrabold hover:font-black hover:bg-[rgba(80,94,93,0.8)] nav__link mt-5 md:mt-5 hover:scale-105 md:mr-20'
                            id='home__button'
                        >
                            Book now
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
