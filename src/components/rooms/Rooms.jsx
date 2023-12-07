import React, { useState, useEffect } from "react";
import { RoomsInfo, RoomsNav } from "./Data";
import OurSpaces1 from "../../assets/Our Spaces1.JPG";
import OurSpaces2 from "../../assets/Our Spaces2.JPG";
import OurSpaces3 from "../../assets/Our Spaces3.JPG";
import OurSpaces4 from "../../assets/Our Spaces4.jpg";
import OurSpaces5 from "../../assets/Our Spaces5.jpg";

import "./rooms.css";

const Rooms = () => {
    const [item, setItem] = useState({ name: "all suites" });
    const [projects, setProjects] = useState([]);
    const [active, setActive] = useState(0);

    useEffect(() => {
        if (item.name === "all suites") {
            setProjects(RoomsInfo);
        } else {
            const newProjects = RoomsInfo.filter((project) => {
                return project.title.toLowerCase() === item.name;
            });
            setProjects(newProjects);
        }
    }, [item]);

    const handleClick = (e, index) => {
        setItem({ name: e.target.textContent.toLowerCase() });
        setActive(index);
    };

    let pressed = false;
    let startX = 0;
    let arrowColor = "#e1e1e1";

    const grabbing = (e) => {
        const wrapper = document.querySelector(".wrapper");
        pressed = true;
        startX = e.clientX;
        wrapper.style.cursor = "grabbing";
    };

    const leave = (e) => {
        pressed = false;
    };

    const grab = (e) => {
        const wrapper = document.querySelector(".wrapper");
        pressed = false;
        wrapper.style.cursor = "grab";
    };

    const move = (e) => {
        const wrapper = document.querySelector(".wrapper");
        if (!pressed) {
            return;
        }
        wrapper.scrollLeft += startX - e.clientX;
    };

    return (
        <>
            <section className='mx-auto max-w-[1600px] relative flex flex-col mb-5 md:mb-0'>
                <h1 className='mt-10 md:mt-32 text-[2.75rem] md:text-[3.125rem] w-full md:w-4/5 text-center md:text-left m-auto text-black font-[900]'>
                    Our Spaces
                </h1>
                <p className='text-[.75rem] md:text-[1rem] w-full md:w-4/5 text-center md:text-left m-auto'>
                    Enjoy your time with us in an atmosphere of <br />{" "}
                    relaxation and comfort...
                </p>
            </section>

            <section className='flex flex-col py-0 md:py-12'>
                <div
                    className='wrapper'
                    onMouseDown={grabbing}
                    onMouseLeave={leave}
                    onMouseUp={grab}
                    onMouseMove={move}
                >
                    <svg
                        viewBox='0 0 18 30'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                        className='z-[99999] md:w-8 w-4 absolute right-2 mt-6 md:right-5 md:mt-2'
                    >
                        <path
                            d='M1 10L7 16.0645L1 22'
                            stroke={arrowColor}
                            stroke-width='2'
                        />
                        <path
                            d='M4 1L17 15.1505L4 29'
                            stroke={arrowColor}
                            stroke-width='2'
                        />
                    </svg>
                    <div className='slider md:w-[100vw] h-[50rem] md:h-auto z- overflow-y-hidden min-w-full flex justify-center items-center'>
                        <img
                            src={OurSpaces1}
                            alt='ourspaces1'
                            className='image bg-cover bg-no-repeat h-[20vh] md:min-w-[100vw] md:h-auto'
                        />
                    </div>

                    <div className='slider md:w-[100vw] h-[50rem] md:h-auto z- overflow-y-hidden min-w-full flex justify-center items-center'>
                        <img
                            src={OurSpaces2}
                            alt='ourspaces2'
                            className='image bg-cover bg-no-repeat h-[20vh] md:min-w-[100vw] md:h-auto'
                        />
                    </div>
                    <div className='slider md:w-[100vw] h-[50rem] md:h-auto z- overflow-y-hidden min-w-full flex justify-center items-center'>
                        <img
                            src={OurSpaces3}
                            alt='ourspaces3'
                            className='image bg-cover bg-no-repeat h-[20vh] md:min-w-[100vw] md:h-auto'
                        />
                    </div>
                    <div className='slider md:w-[100vw] h-[50rem] md:h-auto z- overflow-y-hidden min-w-full flex justify-center items-center'>
                        <img
                            src={OurSpaces4}
                            alt='ourspaces4'
                            className='image bg-cover bg-no-repeat h-[20vh] md:min-w-[100vw] md:h-auto'
                        />
                    </div>
                    <div className='slider md:w-[100vw] h-[50rem] md:h-auto z- overflow-y-hidden min-w-full flex justify-center items-center'>
                        <img
                            src={OurSpaces5}
                            alt='ourspaces5'
                            className='image bg-cover bg-no-repeat h-[20vh] md:min-w-[100vw] md:h-auto'
                        />
                    </div>
                </div>
            </section>

            <section className='mx-auto max-w-[1600px] relative flex flex-col'>
                <h1 className='md:mt-10 text-[2.75rem] md:text-[3.125rem] w-4/5 text-center md:text-left m-auto text-black'>
                    Rooms
                </h1>
                <div className='flex flex-row flex-wrap md:flex-nowrap justify-center items-center gap-3 text-[14px] w-4/5 md:w-[1240px] text-center m-auto mt-5'>
                    {RoomsNav.map((item, index) => {
                        return (
                            <span
                                className={`${
                                    active === index ? "active-work" : ""
                                } work__item w-[150px] md:w-[314px]`}
                                key={index}
                                onClick={(e) => {
                                    handleClick(e, index);
                                }}
                            >
                                {item.name}
                            </span>
                        );
                    })}
                </div>

                <div className='w-4/5 m-auto'>
                    {projects.map((item) => {
                        return (
                            <div className=' mt-10 mb-20 md:mb-0'>
                                <div
                                    key={item.id}
                                    className='h-full md:h-[390px] gap-10 flex overflow-y-hidden flex-col md:flex-row '
                                >
                                    <div className=' w-full md:w-2/3'>
                                        <h1 className=' text-[1.5rem] md:text-[2rem] text-center md:text-left text-black mb-6'>
                                            {item.title}
                                        </h1>
                                        <p className='text-xs md:text-sm'>
                                            {item.description}
                                        </p>
                                    </div>
                                    <svg
                                        viewBox='0 0 18 30'
                                        fill='none'
                                        xmlns='http://www.w3.org/2000/svg'
                                        className='z-[99999] md:w-5 w-3 absolute right-14 mt-48 md:right-44 md:mt-4'
                                    >
                                        <path
                                            d='M1 10L7 16.0645L1 22'
                                            stroke={arrowColor}
                                            stroke-width='3'
                                        />
                                        <path
                                            d='M4 1L17 15.1505L4 29'
                                            stroke={arrowColor}
                                            stroke-width='3'
                                        />
                                    </svg>

                                    <div className='flex w-full items-start justify-start gap-8 overflow-x-auto overflow-y-hidden h-[390] custom-scrollbar '>
                                        <img
                                            src={item.img1}
                                            alt='img1'
                                            className='bg-cover bg-no-repeat min-w-[250px] md:min-w-[585px]'
                                        />

                                        <img
                                            src={item.img2}
                                            alt='img2'
                                            className='bg-cover bg-no-repeat min-w-[250px] md:min-w-[585px]'
                                        />
                                        <img
                                            src={item.img3}
                                            alt='img3'
                                            className='bg-cover bg-no-repeat min-w-[250px] md:min-w-[585px]'
                                        />
                                        <img
                                            src={item.img4}
                                            alt='img4'
                                            className='bg-cover bg-no-repeat min-w-[250px] md:min-w-[585px]'
                                        />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>
        </>
    );
};

<script src='slider.js'></script>;

export default Rooms;
