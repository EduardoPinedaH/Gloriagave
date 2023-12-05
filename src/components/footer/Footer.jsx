import React from "react";
import "./footer.css";

const Footer = () => {
    return (
        <footer className='footer md:mt-10'>
            <div className='footer__container flex justify-around'>
                <div className='text-slate-100'>
                    <p>33 1699 4497</p>
                    <p>contacto@mail.com</p>
                    <a
                        href='https://www.instagram.com/hotelgloriagave/'
                        target='_blank'
                        rel='noreferrer'
                    >
                        Follow us on{" "}
                        <span className=' text-white font-black'>
                            Instagram
                        </span>
                    </a>
                </div>
                <div className='text-white font-black'>© Gloriagave 2023</div>
            </div>
        </footer>
    );
};

export default Footer;
