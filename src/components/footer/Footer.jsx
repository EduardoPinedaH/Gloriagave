import React from "react";
import "./footer.css";

const Footer = () => {
    return (
        <footer className='footer md:mt-10'>
            <div className='footer__container flex justify-around md:justify-between'>
                <div className='text-slate-100'>
                    <p>33 3333 3333</p>
                    <p>contacto@mail.com</p>
                    <p>Follow us on Instagram</p>
                </div>
                <div className='text-slate-100'>© Gloriagave 2023</div>
            </div>
        </footer>
    );
};

export default Footer;
