import React from 'react';
import {useRef, useState, useEffect } from 'react';
import { motion } from "framer-motion";
import {FaBars, FaTimes } from 'react-icons/fa';
import  {Link} from "react-scroll";
const Navbar = () => {
    const navRef = useRef();
    const headerRef = useRef();

    const [top, setTop] = useState(true);

    useEffect(() => {
      const scrollHandler = () => {
        setTop(window.pageYOffset <= 50)
    };
    window.addEventListener('scroll', scrollHandler);
    
    // Explicit call so that the navbar gets blurred when component mounts 
    scrollHandler(); 
    
    return () => {
        window.removeEventListener('scroll', scrollHandler);
    }

    }, [top]);

    console.log(top, "settop")
    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");

            headerRef.current.classList.toggle("responsive-style");

     

    }
  return (
   <header className={top ? "header" :  "header blurry"} ref={headerRef}>
   <Link className="logoWrapper"  spy={true} smooth={true} offset={0} duration={500} to="apufrens"> <img src="/images/logo.png" className="logo"  /> <span className="logoText"></span></Link>
   <nav className='navbar' ref={navRef}>
   <motion.ul
      initial={{ x: 250 }}
      animate={{ x: 0 }}
      transition={{ type: 'spring', stiffness:200, duration: 0.5 }} >
    <li className="strong-hover-shake"><Link activeClass="active" className="page-scroll navLinks" offset={0} spy={true} smooth={true} style={{'--i':0}} duration={500} to="apufrens">home</Link></li>
    <li className="strong-hover-shake"><Link activeClass="active" className="page-scroll navLinks" offset={-120} spy={true} smooth={true} style={{'--i':0}} duration={500} to="about">about</Link></li>
    <li className="strong-hover-shake"><Link activeClass="active" className="page-scroll navLinks" offset={-80} spy={true} smooth={true} style={{'--i':0}} duration={500} to="howtobuy">how to buy</Link></li>
   
   </motion.ul>
   <ul className='navSocials'>
   <li> <a href="#" className='social-link telegram'>
   <svg width="30" height="24" viewBox="0 0 30 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.59555 11.208C1.66054 11.1756 1.72556 11.1447 1.78893 11.1154C2.89051 10.6053 4.00671 10.1276 5.12129 9.6499C5.18141 9.6499 5.28212 9.58002 5.33898 9.55728C5.42509 9.51991 5.51122 9.48417 5.59733 9.44681C5.76306 9.37532 5.92879 9.30544 6.09289 9.23395C6.42434 9.0926 6.75414 8.95127 7.08559 8.80992C7.74686 8.52721 8.40813 8.24451 9.0694 7.96017C10.392 7.39476 11.7162 6.82769 13.0387 6.26228C14.3612 5.69686 15.6854 5.12983 17.008 4.56442C18.3305 3.99901 19.6547 3.43198 20.9772 2.86656C22.2998 2.30115 23.624 1.73412 24.9465 1.16871C25.2406 1.04198 25.559 0.853501 25.8742 0.798259C26.1391 0.751141 26.3974 0.660169 26.6638 0.609802C27.1691 0.513942 27.7264 0.474942 28.2106 0.684534C28.3779 0.757648 28.5323 0.859987 28.6607 0.988342C29.2748 1.596 29.1887 2.59362 29.0587 3.44824C28.1537 9.40457 27.2487 15.3625 26.3421 21.3189C26.2187 22.1361 26.0497 23.033 25.4047 23.5497C24.8587 23.9867 24.0821 24.0354 23.4078 23.8502C22.7336 23.6634 22.1389 23.2718 21.5556 22.8867C19.1364 21.2847 16.7155 19.6827 14.2963 18.0807C13.7211 17.7005 13.0809 17.2034 13.0874 16.5128C13.0907 16.0969 13.3393 15.7264 13.5927 15.3966C15.6952 12.654 18.7286 10.7694 20.9853 8.15351C21.3038 7.78469 21.554 7.11855 21.117 6.90571C20.857 6.77898 20.558 6.95117 20.3208 7.11527C17.3378 9.18683 14.3564 11.26 11.3733 13.3316C10.4001 14.0075 9.37976 14.7029 8.20669 14.8686C7.1571 15.0181 6.10102 14.7256 5.08555 14.4267C4.23418 14.1764 3.38441 13.9197 2.53791 13.6549C2.08786 13.5152 1.62318 13.3641 1.27548 13.0472C0.927783 12.7304 0.727965 12.1975 0.937558 11.7751C1.06916 11.5103 1.32425 11.3429 1.59234 11.2064L1.59555 11.208Z" fill="white"></path>
            </svg>
                    </a></li>
                    <li> <a href="#" className='social-link twitter'>
                    <svg width="28" height="27" viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.217988 0.312988L10.9121 14.6108L0.151367 26.2359H2.57388L11.9958 16.0585L19.6078 26.2359H27.8501L16.5548 11.1338L26.5714 0.312988H24.1489L15.4728 9.68621L8.46197 0.312988H0.219594H0.217988ZM3.77943 2.097H7.56511L24.2854 24.4519H20.4997L3.77943 2.097Z" fill="white"></path>
            </svg>
                    </a></li>
  
   </ul>
 
   </nav>
   <div className="buyWagmi">
   <a href="https://jup.ag/swap/SOL-ECutGg12PNhqhkvnH1s1FcuXgCDzKDNhSf5aLtANioR7" className="button">Buy WAGMI</a>

   <button className='nav-btn' onClick={showNavbar}>
   <FaBars />
   
   </button>
   </div>
   </header>
  )
}

export default Navbar