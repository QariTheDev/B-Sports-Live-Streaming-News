import React, {useState} from 'react';
import '../index.css';
import { faBars, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { bsports } from '../assets';
import { Link } from 'react-router-dom';


function Navbar() {

    const navLinks = {
        home: "/",
        cricket: "/cricket",
        football: "/football",
        tennis: "/tennis",
        golf: "/golf",
        global: "/global",
    };

    const [ toggle, setToggle ] = useState(false);
    const [ active, setActive ] = useState('Home');

    return (
        <nav className="bg-gradient-to-r from-slate-500 via-slate-600 to-red-400 h-22 w-full flex justify-center items-center">
            <Link to="/">
                <img src={bsports} alt="logo" className='w-[104px]' />
            </Link>

            <label className='text-white text-4xl md:leading-[80px] font-medium'>B-Sports</label>

            <ul className='list-none font-medium lg:flex hidden justify-end items-center flex-1 text-white uppercase transition-all duration-300 ease-in-out'>
                { Object.keys(navLinks).map((nav, index) => (
                    <li
                    key={index}
                    className={`navbar-style ${active === nav ? 'text-black' : 'text-white'}`}
                    onClick={() => setActive(nav)}
                >
                <Link to={`${navLinks[nav]}`}>{nav}</Link>
                </li>
                ))}
            </ul>

            <div className='lg:hidden flex flex-1 mr-10 justify-end items-center'>

                <div className="object-contain cursor-pointer"
                    onClick={() => setToggle((prev) => !prev)}>
                    {toggle ? <FontAwesomeIcon icon={faCircleXmark} className='h-7 w-7'/> : <FontAwesomeIcon icon={faBars} className='h-7 w-7' />}
                </div>

                <div
                className={`${ !toggle ? 'hidden' : 'flex'} p-6 px-12 -mr-0.5 bg-gradient-to-r from-slate-500 via-slate-600 to-red-400 absolute top-24 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
                >
                <ul className='list-none flex justify-end items-start flex-1 flex-col'>
                    { Object.keys(navLinks).map((nav, index) => (
                        <li
                        key={index}
                        className={`font-medium cursor-pointer text-[16px] py-3 uppercase hover:text-black ${active === nav ? 'text-black' : 'text-white'}`}
                        onClick={() => setActive(nav)}
                    >
                    <Link to={`${navLinks[nav]}`}>{nav}</Link>
                    </li>
                    ))}
                </ul>
                </div>

            </div>
    </nav>
    )
}

export default Navbar;