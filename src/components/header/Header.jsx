import { useState } from "react";
import "./header.css";
import Logo from "../../assets/Logo.png";
import NameLogo from "../../assets/NameLogo.png";
import { Link } from "react-router-dom";

const Header = () => {
    /* =============== BACKGROUND HEADER =============== */
    window.addEventListener("scroll", function () {
        const header = document.querySelector(".header");
        if (this.scrollY >= 80) header.classList.add("scroll-header");
        else header.classList.remove("scroll-header");
    });

    /*=============== Toggle menu ===============*/
    const [Toggle, setToggle] = useState(false);

    return (
        <header className='w-full fixed top-0 left-0 z-[100] header py-1 md:py-0 px-2 md:px-0'>
            <nav className='md:h-[8rem] flex justify-around items-center gap-[1rem] nav max-w-[1200px] mr-auto ml-auto'>
                <a href='/'>
                    <img
                        src={Logo}
                        alt='Logo'
                        className='nav__logo w-6 md:w-12 h-auto lg:mr-48'
                    />
                </a>

                <a href='/'>
                    <img
                        src={NameLogo}
                        alt='NameLogo'
                        className='nav__logo w-[90px] md:w-[192px] md:h-[35.3px]'
                    />
                </a>

                <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className='flex gap-[2rem] nav__list'>
                        <li className='nav__item'>
                            <Link
                                to='/spaces'
                                className='text-base flex flex-col text-center items-center justify-center transition duration-[.3s] text-[#505E5D] font-extrabold hover:font-black hover:text-[#2c3333] mt-1 nav__link'
                            >
                                Our Spaces
                            </Link>
                        </li>
                        <li className='nav__item'>
                            <a
                                href='https://hotels.cloudbeds.com/reservation/W0owHe'
                                className='text-base w-32 h-8 flex flex-col text-center items-center justify-center transition duration-[.3s] text-[#505E5D] bg-[rgba(255,255,255,0.3)] rounded-2xl font-extrabold hover:font-black hover:text-[#2c3333] hover:bg-[rgba(255,255,255,0.6)] nav__link'
                                target='_blank'
                                rel='noreferrer'
                            >
                                Reserve
                            </a>
                        </li>
                    </ul>

                    <i
                        className='uil uil-times text-[#505E5D] hover:text-[#2c3333] transition duration-[.3s] hidden nav__close'
                        onClick={() => setToggle(!Toggle)}
                    ></i>
                </div>
                <div
                    className='hidden nav__toggle'
                    onClick={() => setToggle(!Toggle)}
                >
                    <i className='uil uil-bars text-[#505E5D] hover:text-[#2c3333] transition duration-[.3s]'></i>
                </div>
            </nav>
        </header>
    );
};

export default Header;
