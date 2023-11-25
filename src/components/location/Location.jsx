import React from "react";
import "./location.css";
import Map from "../../assets/Map.png";

const Location = () => {
    return (
        <section className='about section' id='about'>
            <div id='fade'>
                <span className='section__subtitle text-[1rem]'>
                    Tequila, Jalisco
                </span>
                <h2 className=' text-center text-[3.125rem] font-[900] text-black'>
                    Our Location
                </h2>
                <span className='section__subtitle mb-8 text-black text-[1rem]'>
                    A place to escape to...
                </span>
                <div className='max-w-[1206px] mr-auto ml-auto'>
                    {/* <img
                        src={Map}
                        alt='Space1'
                        className='w-[1206px] h-[552px]'
                    /> */}
                    <iframe
                        src='https://snazzymaps.com/embed/548639'
                        className='w-[500px] md:w-[1206px] h-[300px] md:h-[552px] mr-auto ml-auto'
                    ></iframe>
                    <a
                        href='https://www.google.com/maps/dir//Hotel+Gloriagave,+Galeana+225,+La+Mezcalera,+46400+Tequila,+Jal./@20.8789636,-103.9250185,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x842615e7bd12aedd:0x7c34219aa579f58d!2m2!1d-103.8426168!2d20.8789833?hl=es-419&entry=ttu'
                        target='_blank'
                        rel='noreferrer'
                        className='text-[1rem] items-center text-center'
                    >
                        Open in maps
                        <i className='uil uil-angle-double-right text-right text-2xl hover:scale-105 transition ease-linear duration-[0.3s] align-baseline'></i>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Location;
