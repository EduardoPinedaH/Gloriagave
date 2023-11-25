import React from "react";
import "./about.css";
import Agave from "../../assets/Agave.jpg";
import Agave2 from "../../assets/Agave2.jpg";
import Agave3 from "../../assets/Agave3.jpg";
import Agave4 from "../../assets/Agave4.jpg";

const About = () => {
    return (
        <section className='about section' id='about'>
            <div
                className='flex flex-wrap md:flex-col mr-auto ml-auto md:gap-5'
                id='fade'
            >
                <div className='flex flex-col md:flex-row md:w-[1100px] md:gap-10 mr-auto ml-auto'>
                    <div className='md:flex md:flex-col md:w-4/5 mb-5 md:mb-0'>
                        <h1 className='text-center md:text-left text-5xl md:text-[3.125rem] font-[900] text-black mb-5 md:mb-0'>
                            About our town
                        </h1>
                        <span className=' text-center text-sm md:text-left md:text-[1rem] md:mb-8'>
                            Tequila it’s quaint town nestled in Jalisco, built
                            with cobblestone streets
                            <br /> and the aroma of blue agave, a place where
                            history and tradition
                            <br /> harmonize in every adobe wall. Its essence,
                            distilled in the warmth of
                            <br /> hospitality, beckons travelers to savor the
                            rich heritage woven into its
                            <br /> vibrant tapestry
                        </span>
                    </div>
                    <div>
                        <img
                            src={Agave}
                            alt='Agave'
                            className='h-[200px] w-full md:w-[700px] md:h-[200px] object-cover'
                        />
                    </div>
                </div>
                <div className='flex flex-col md:flex-row md:w-[1100px] md:gap-10 mr-auto ml-auto'>
                    <div className='md:flex md:flex-col md:w-4/5'>
                        <h2 className='text-left text-[1.875rem] font-[900] text-black'>
                            What to do?
                        </h2>
                        <p>
                            <span className='font-[900] text-black'>
                                Learn the artesanal process of out heritage
                            </span>{" "}
                            <br />
                            See first hand how the Agave turns to Tequila
                            through <br />
                            multiple steps of handmade work learned trough{" "}
                            <br />
                            generations.
                        </p>
                    </div>
                    <div>
                        <img
                            src={Agave2}
                            alt='Agave2'
                            className='w-[700px] h-[130px] object-cover'
                        />
                    </div>
                </div>
                <div className='flex flex-col md:flex-row md:w-[1100px] md:gap-10 mr-auto ml-auto'>
                    <div className='md:flex md:flex-col md:w-4/5'>
                        <p>
                            <span className=' font-[900] text-black'>
                                Learn the artesanal process of out heritage
                            </span>{" "}
                            <br />
                            See first hand how the Agave turns to Tequila
                            through <br />
                            multiple steps of handmade work learned trough{" "}
                            <br />
                            generations.
                        </p>
                    </div>
                    <div>
                        <img
                            src={Agave3}
                            alt='Agave3'
                            className='w-[700px] h-[130px] object-cover'
                        />
                    </div>
                </div>
                <div className='md:flex flex-col md:flex-row md:w-[1100px] md:gap-10 mr-auto ml-auto'>
                    <div className='flex md:flex-col md:w-4/5'>
                        <p>
                            <span className=' font-[900] text-black'>
                                Learn the artesanal process of out heritage
                            </span>{" "}
                            <br />
                            See first hand how the Agave turns to Tequila
                            through <br />
                            multiple steps of handmade work learned trough{" "}
                            <br />
                            generations.
                        </p>
                    </div>
                    <div>
                        <img
                            src={Agave4}
                            alt='Agave4'
                            className='w-[700px] h-[130px] object-cover'
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
