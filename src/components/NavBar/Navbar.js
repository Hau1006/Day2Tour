import React, { useEffect, useRef, useState } from 'react'
import { links, social } from './data';
import { FaBars } from 'react-icons/fa';
import logo from './logo.svg';
import './Navbar.css'
const Navbar = () => {
    const [showLinks, setshowLinks] = useState(false);
    const linksContainerref = useRef(null);
    const linksRef = useRef(null);
    const toggleLinks = () => {
        setshowLinks(!showLinks);
    }

    useEffect(() => {
        //getBoundingClientRect phai truyen vao dau do moi doc duoc
        const linksHeight = linksRef.current.getBoundingClientRect().height;
        console.log(linksHeight, "this is link height");
        if (showLinks) {
            linksContainerref.current.style.height = `${linksHeight}px`

        } else (
            linksContainerref.current.style.height = '0px'
        )

    }, [showLinks]);
    return (
        <nav>
            <div className="nav-center">
                <div className="nav-header">
                    <img src={logo} alt="logo" className="logo" />
                    <button className="nav-toggle" onClick={toggleLinks}>
                        <FaBars />
                    </button>
                </div>
                <div className="links-container" ref={linksContainerref}>
                    <ul className="links" ref={linksRef}>
                        {links.map((link) => {
                            const { id, url, text } = link;
                            return (
                                <li key={id}>
                                    <a href={url}>{text}</a>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <ul className="social-icons">
                    {
                        social.map((socialIcon) => {
                            const { id, url, icon } = socialIcon;
                            return (
                                <li key={id}>
                                    <a href={url}>{icon}</a>
                                </li>
                            )
                        })
                    }
                </ul>


            </div>
        </nav>
    )
}

export default Navbar
