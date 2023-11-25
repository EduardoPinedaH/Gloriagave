import React from "react";
import "./about.css";
import Agave from "../../assets/Agave.jpg";
import Space2 from "../../assets/space 2.jpg";
import Space3 from "../../assets/space 3.jpg";

const About = () => {
    return (
        <section className='about section' id='about'>
            <div className='flex w-3/4 mr-auto ml-auto gap-10'>
                <div
                    className='flex flex-col
                '
                >
                    <h2 className='text-left text-[3.125rem] font-[900] text-black'>
                        About our town
                    </h2>
                    <span className=' text-[1rem] mb-8 '>
                        Tequila it’s quaint town nestled in Jalisco, built with
                        cobblestone streets <br />
                        and the aroma of blue agave, a place where history and
                        tradition
                        <br /> harmonize in every adobe wall. Its essence,
                        distilled in the warmth of
                        <br />
                        hospitality, beckons travelers to savor the rich
                        heritage woven into its <br />
                        vibrant tapestry.
                    </span>
                    <h2 className=' text-left text-[1.875rem] font-[900] text-black'>
                        What to do?
                    </h2>
                    <span className=' mb-8'>
                        <span className=' font-[900] text-black'>
                            Learn the artesanal process of out heritage
                        </span>{" "}
                        <br />
                        See first hand how the Agave turns to Tequila through{" "}
                        <br />
                        multiple steps of handmade work learned trough <br />
                        generations.
                    </span>
                    <span className=' mb-8'>
                        <span className=' font-[900] text-black'>
                            Learn the artesanal process of out heritage
                        </span>{" "}
                        <br />
                        See first hand how the Agave turns to Tequila through{" "}
                        <br />
                        multiple steps of handmade work learned trough <br />
                        generations.
                    </span>
                    <span className=' mb-8'>
                        <span className=' font-[900] text-black'>
                            Learn the artesanal process of out heritage
                        </span>{" "}
                        <br />
                        See first hand how the Agave turns to Tequila through{" "}
                        <br />
                        multiple steps of handmade work learned trough <br />
                        generations.
                    </span>
                </div>
                <div className='flex flex-col w-3/6 h-5/6 mr-auto ml-auto gap-5'>
                    <img
                        src={Agave}
                        alt='Agave'
                        className='w-[700px] h-[200px] object-cover'
                    />
                    <img
                        src={Space2}
                        alt='Space2'
                        className='w-[700px] h-[130px] object-cover'
                    />
                    <img
                        src={Space3}
                        alt='Space3'
                        className='w-[700px] h-[130px] object-cover'
                    />
                    <img
                        src={Space3}
                        alt='Space3'
                        className='w-[700px] h-[130px] object-cover'
                    />
                </div>
            </div>
        </section>
    );
};

export default About;
