import React, { useState, useEffect } from "react";
import { RoomsInfo, RoomsNav } from "./Data";

import "./rooms.css";
import Images from "./Images";

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

    return (
        <section className='mx-auto max-w-[1600px] relative flex flex-col py-10 lg:mb-10 lg:py-20'>
            <h1 className='md:mt-10 text-[3.5rem] md:text-[3.125rem] w-4/5 text-center md:text-left m-auto text-black'>
                Rooms
            </h1>
            <div className='flex md:flex-row flex-wrap md:flex-nowrap justify-center items-center gap-3 text-[14px] w-2/5 md:w-[1240px] text-center m-auto mt-5'>
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

            <div className='w-4/5 m-auto '>
                {projects.map((item) => {
                    return (
                        <div className=' mt-10 '>
                            <div
                                key={item.id}
                                className='h-full md:h-[390px] gap-10 flex overflow-y-hidden flex-col md:flex-row'
                            >
                                <div className=' w-full md:w-2/3'>
                                    <h1 className=' text-[1.5rem] md:text-[2rem] text-center md:text-left text-black mb-6'>
                                        {item.title}
                                    </h1>
                                    <p className='text-xs md:text-sm'>
                                        {item.description}
                                    </p>
                                </div>

                                <div className='flex w-full items-start justify-start gap-8 overflow-x-auto overflow-y-hidden h-[390]'>
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
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Rooms;
