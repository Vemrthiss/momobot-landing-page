import React, { useState, useEffect, useContext } from 'react';
import RemoteButton from '../RemoteButton';
import { StaticImage } from "gatsby-plugin-image";
import useThrottle from '../../hooks/useThrottle';
import useBreakpoint from '../../hooks/useBreakpoint';
import { BreakpointContext } from '../../helpers/breakpointContext';
import './Navbar.scss';

export default function Navbar() {
    // scroll
    const [hasScrolled, setHasScrolled] = useState(false);
    const scrollThrottle = useThrottle(() => calculateScroll(), 200);
    const calculateScroll = () => {
        if (window.scrollY > 0) {
            setHasScrolled(true);
        } else {
            setHasScrolled(false);
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", scrollThrottle);
    }, []);

    // breakpoint
    const windowWidth = useBreakpoint();
    const breakpointTypes = useContext(BreakpointContext);
    const renderFullNav = windowWidth >= breakpointTypes.m;

    // templating
    const navbarHamburger = (
        // <div className={hasScrolled ? 'nav-btn-wrapper--scrolled nav-btn-wrapper p-3 pt-2' : 'nav-btn-wrapper p-3 pt-2'}>
        //     <button className={hasScrolled ? 'nav-btn--scrolled nav-btn rounded-none border-none' : 'nav-btn rounded-none border-none'}></button>
        // </div>
        <div className='nav-btn-wrapper p-3 pt-2'>
            <input type="checkbox" className="nav-btn__checkbox" id="navi-toggle"></input>
            <label for="navi-toggle" className="nav-btn__button">
                <span className="nav-btn__icon">&nbsp;</span>
            </label>

            <div className="nav-btn__background">&nbsp;</div>

            <nav className="nav-btn__nav">
                <ul className="nav-btn__list">
                    {/* <li className="nav-btn__item"><a href="#" className="nav-btn__link"><span>01</span>About Natous</a></li>
                    <li className="nav-btn__item"><a href="#" className="nav-btn__link"><span>02</span>Your benfits</a></li>
                    <li className="nav-btn__item"><a href="#" className="nav-btn__link"><span>03</span>Popular tours</a></li>
                    <li className="nav-btn__item"><a href="#" className="nav-btn__link"><span>04</span>Stories</a></li>
                    <li className="nav-btn__item"><a href="#" className="nav-btn__link"><span>05</span>Book now</a></li> */}
                    </ul>
            </nav>
        </div>
    )
    const navbarFull = (
        <div className={hasScrolled ? 'navbar navbar--scrolled flex justify-between items-center py-1 pl-3 pr-5' : 'navbar flex justify-between items-center py-1 pl-3 pr-5'}>
            <div className="navbar__left">
                <a href="#">
                    <StaticImage
                        src="../assets/soar_logo_white.png"
                        alt="soar logo"
                        width={100}
                        className={hasScrolled ? 'navbar__image navbar__image--scrolled': 'navbar__image'}
                    />
                </a>
            </div>
            <div className="navbar__right flex items-center mr-2">
                <a className={hasScrolled ? "mx-4 navbar__link navbar__link--scrolled": "mx-4 navbar__link"} href="#about">About</a>
                <a className={hasScrolled ? "mx-4 navbar__link navbar__link--scrolled": "mx-4 navbar__link"} href="#features">Features</a>
                <a className={hasScrolled ? "mx-4 navbar__link navbar__link--scrolled": "mx-4 navbar__link"} href="#product-demo">Product Demo</a>
                <a className={hasScrolled ? "mx-4 navbar__link navbar__link--scrolled": "mx-4 navbar__link"} href="#team">The Team</a>
                <span className="mr-3"></span>
                <RemoteButton/>
            </div>
        </div>
    )

    return renderFullNav ? navbarFull : navbarHamburger;
}