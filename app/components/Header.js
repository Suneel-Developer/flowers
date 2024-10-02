"use client"
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Logo from "../assets/logo.jpg"
import DownArrow from "../assets/down-arrow.svg"
import SearchIcon from "../assets/search-icon.svg"
import CartIcon from "../assets/cart-icon.svg"
import ToggleIcon from "../assets/toggle-icon.svg"
import WhiteRightArrow from "../assets/white-down-arrow.svg"
import CloseIcon from "../assets/close-icon.svg"
import FacebookIcon from "../assets/facebook-icon.svg"
import PintresetIcon from "../assets/pintreset-icon.svg"
import InstagramIcon from "../assets/instagram-icon.svg"
import TiktokIcon from "../assets/tiktok-icon.svg"
import BlackRightArrow from "../assets/black-right-arrow.svg"
import Link from 'next/link'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Function to toggle the menu
    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    // Close the menu when clicking outside the white box
    const handleOutsideClick = (e) => {
        if (e.target.id === 'menu-overlay') {
            setIsMenuOpen(false);
        }
    };

    // Lock and unlock background scroll when menu opens/closes
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isMenuOpen]);



    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        if (isMenuOpen) {
            setIsAnimating(true);
        } else if (isAnimating) {
            const timer = setTimeout(() => setIsAnimating(false), 300);
            return () => clearTimeout(timer);
        }
    }, [isMenuOpen, isAnimating]);

    const [activeSection, setActiveSection] = useState('');

    // Handle clicks to open subsections
    const handleSectionClick = (section) => {
        setActiveSection(section);
    };

    // Handle the back button click
    const handleBackClick = () => {
        setActiveSection('');
    };
    return (
        <>

            {/* Discount Bar  */}
            <div className='h-[37px] px-4 w-full bg-base-text2 border-b-[.1rem] border-forground flex items-center justify-center'>
                <div className='flex items-center cursor-pointer'>
                    <span className='text-[13px] text-white f-cinzel tracking-[1px]'>Weddings</span>
                    <Image src={WhiteRightArrow} alt='White Right Arrow' className='mb-[.2rem] ml-2' />
                </div>
            </div>


            {/* Header  */}
            <header className='w-full bg-white sticky top-0 border-b border-base-text h-[89px] pl-4 pr-2 flex items-center z-50'>
                <div className='max-w-[1300px] mx-auto flex justify-between items-center h-full w-full gap-2'>
                    {/* toggle Icon  */}
                    <button className='flex lg:hidden' onClick={toggleMenu}>
                        <Image src={ToggleIcon} alt='Toggle Icon' />
                    </button>

                    <Image src={Logo} alt="Chick Flowers Logo" className='flex lg:hidden' />



                    {/* Logo Section */}
                    <div className='hidden lg:flex items-center gap-10'>
                        <Image src={Logo} alt="Chick Flowers Logo" className='hidden lg:block' />

                        {/* Navigation Menu */}
                        <nav>
                            {/* for Desktop Screens  */}
                            <ul className='hidden lg:flex items-center gap-2 z-auto'>
                                {/* Retail Shop Dropdown */}
                                <li className='relative group'>
                                    <div className='text-[13px] flex items-center gap-1 text-text uppercase px-5 py-2 group-hover:bg-alto transition-all duration-300 cursor-pointer'>
                                        <span>Retail Shop</span>
                                        <Image
                                            src={DownArrow}
                                            alt='Down Arrow'
                                            className='transform transition-transform duration-300 group-hover:rotate-180'
                                        />
                                    </div>

                                    {/* Dropdown Content */}
                                    <div className='absolute mt-[2px] left-0 z-50 top-full bg-white py-6  border border-base-text w-[200px] opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300'>
                                        {["Birthday Flowers", "Wedding Menu", "Love and Romance", "Wrapped Bouquets | Flower Boxes", "Sympathy Flowers", "Orchids and Plants", "Designers Choice", "All"].map((item, idx) => (
                                            <Link key={idx} href="#" className='text-[13px] m-[2px] px-5 py-2 block tracking-[0.4px] text-text hover:bg-alto transition-colors duration-300 hover:text-[#121212]'>
                                                {item}
                                            </Link>
                                        ))}
                                    </div>
                                </li>

                                {/* Single Links */}
                                <li>
                                    <Link href="#" className='text-[13px] flex items-center gap-1 text-text uppercase px-5 py-2 hover:bg-alto transition-all duration-300 cursor-pointer'>
                                        Courses
                                    </Link>
                                </li>

                                <li>
                                    <Link href="#" className='text-[13px] flex items-center gap-1 text-text uppercase px-5 py-2 hover:bg-alto transition-all duration-300 cursor-pointer'>
                                        Build Your Wedding
                                    </Link>
                                </li>

                                {/* Weddings Dropdown */}
                                <li className='relative group'>
                                    <div className='text-[13px] flex items-center gap-1 text-text uppercase px-5 py-2 group-hover:bg-alto transition-all duration-300 cursor-pointer'>
                                        <span>Weddings</span>
                                        <Image
                                            src={DownArrow}
                                            alt='Down Arrow'
                                            className='transform transition-transform duration-300 group-hover:rotate-180'
                                        />
                                    </div>

                                    {/* Dropdown Content */}
                                    <div className='absolute left-0 mt-[2px] top-full bg-white py-6  border border-base-text w-[200px] opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300'>
                                        {["Gallery of our events", "Build Your Wedding", "Weddings gallery", "A la carte menu", "Book Free Phone Consultation"].map((item, idx) => (
                                            <Link key={idx} href="#" className='text-[13px] m-[2px] px-5 py-2 block tracking-[0.4px] text-text hover:bg-alto transition-colors duration-300 hover:text-[#121212]'>
                                                {item}
                                            </Link>
                                        ))}
                                    </div>
                                </li>

                                {/* About/More Dropdown */}
                                <li className='relative group'>
                                    <div className='text-[13px] flex items-center gap-1 text-text uppercase px-5 py-2 group-hover:bg-alto transition-all duration-300 cursor-pointer'>
                                        <span>About/More</span>
                                        <Image
                                            src={DownArrow}
                                            alt='Down Arrow'
                                            className='transform transition-transform duration-300 group-hover:rotate-180'
                                        />
                                    </div>

                                    {/* Dropdown Content */}
                                    <div className='absolute left-0 mt-[2px] top-full bg-white py-6  border border-base-text w-[200px] opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300'>
                                        {["About", "Services", "Ideas & Advice", "Flower Subscription", "Book Free Consultation", "Flowers Vending Machine"].map((item, idx) => (
                                            <Link key={idx} href="#" className='text-[13px] m-[2px] px-5 py-2 block tracking-[0.4px] text-text hover:bg-alto transition-colors duration-300 hover:text-[#121212]'>
                                                {item}
                                            </Link>
                                        ))}
                                    </div>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    {/* Icons Section */}
                    <div className='flex items-center gap-1 sm:gap-4'>
                        <button aria-label="Search">
                            <Image src={SearchIcon} alt="Search Icon" />
                        </button>

                        <button aria-label="Cart">
                            <Image src={CartIcon} alt='Cart Icon' />
                        </button>
                    </div>
                </div>
            </header>

            {/* Nav Links For Mobile Screens  */}
            {isMenuOpen && (
                <div
                    id="menu-overlay"
                    className={`bg-[#12121280] h-screen fixed left-0 right-0 w-full top-0 z-50 transition-opacity duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                        }`}
                    onClick={handleOutsideClick}
                >
                    <div
                        className={`max-w-[400px] w-full bg-white h-full flex flex-col justify-between pt-20 relative transition-transform transform ${isAnimating ? 'translate-x-0' : '-translate-x-full'
                            } duration-300 ease-in-out`}
                    >
                        {/* Close Button */}
                        <button className='absolute right-5 top-5' onClick={toggleMenu}>
                            <Image src={CloseIcon} alt='Close Icon' />
                        </button>

                        {/* Nav Content */}
                        {activeSection === '' && (
                            <div>
                                {/* Retail Shop Button */}
                                <button
                                    className='py-2 px-5 flex items-center justify-between w-full gap-1 m-[2px] hover:bg-[#fadcdc] transition-all duration-300'
                                    onClick={() => handleSectionClick('retail')}
                                >
                                    <span className='text-[13px] text-[#121212] uppercase'>Retail Shop</span>
                                    <Image src={BlackRightArrow} alt='Black Right Arrow' width={15} height={10} />
                                </button>

                                {/* Other Nav Links */}
                                <Link href="#" className='py-2 block px-5 m-[2px] hover:bg-[#fadcdc] transition-all duration-300 text-[13px] text-[#121212] uppercase'>Courses</Link>
                                <Link href="#" className='py-2 block px-5 m-[2px] hover:bg-[#fadcdc] transition-all duration-300 text-[13px] text-[#121212] uppercase'>BUILD YOUR WEDDING</Link>

                                {/* Weddings Button */}
                                <button
                                    className='py-2 px-5 flex items-center justify-between w-full gap-1 m-[2px] hover:bg-[#fadcdc] transition-all duration-300'
                                    onClick={() => handleSectionClick('weddings')}
                                >
                                    <span className='text-[13px] text-[#121212] uppercase'>Weddings</span>
                                    <Image src={BlackRightArrow} alt='Black Right Arrow' width={15} height={10} />
                                </button>

                                {/* About/More Button */}
                                <button
                                    className='py-2 px-5 flex items-center justify-between w-full gap-1 m-[2px] hover:bg-[#fadcdc] transition-all duration-300'
                                    onClick={() => handleSectionClick('about')}
                                >
                                    <span className='text-[13px] text-[#121212] uppercase'>About/More</span>
                                    <Image src={BlackRightArrow} alt='Black Right Arrow' width={15} height={10} />
                                </button>
                            </div>
                        )}

                        {/* Retail Shop Links  */}
                        {activeSection === 'retail' && (
                            <div className={`transition-all duration-500 ease-in-out transform 
                                ${activeSection === 'retail' ? 'translate-x-0' : 'translate-x-full'}`
                            }>
                                <div
                                    className='py-3 px-5 flex items-center gap-2 m-[2px] hover:bg-[#fadcdc] transition-all duration-300 cursor-pointer'
                                    onClick={handleBackClick}
                                >
                                    <Image src={BlackRightArrow} alt='Back Arrow' width={15} height={10} className='rotate-180' />
                                    <span className='text-[13px] text-[#121212] uppercase'>Retail Shop</span>
                                </div>

                                {['Birthday Flowers', 'Wedding Menu', 'Love and Romance', 'Wrapped Bouquets | Flower Boxes', 'Sympathy Flowers', 'Orchids and Plants', 'Designers Choice', 'All'].map((item, idx) => (
                                    <Link key={idx} href="#" className='text-sm m-[2px] px-5 py-2 block tracking-[0.4px] text-text hover:bg-alto transition-colors duration-300 hover:text-[#121212]'>
                                        {item}
                                    </Link>
                                ))}
                            </div>
                        )}

                        {/* Weddings LInks  */}
                        {activeSection === 'weddings' && (
                            <div>
                                <div
                                    className='py-3 px-5 flex items-center gap-2 m-[2px] hover:bg-[#fadcdc] transition-all duration-300 cursor-pointer'
                                    onClick={handleBackClick}
                                >
                                    <Image src={BlackRightArrow} alt='Back Arrow' width={15} height={10} className='rotate-180' />
                                    <span className='text-[13px] text-[#121212] uppercase'>Weddings</span>
                                </div>

                                {['Gallery of our events', 'Build Your Wedding', 'Weddings gallery', 'A la carte menu', 'Book Free Phone Consultation'].map((item, idx) => (
                                    <Link key={idx} href="#" className='text-[13px] m-[2px] px-5 py-2 block tracking-[0.4px] text-text hover:bg-alto transition-colors duration-300 hover:text-[#121212]'>
                                        {item}
                                    </Link>
                                ))}
                            </div>
                        )}

                        {/* About/More Links  */}
                        {activeSection === 'about' && (
                            <div>
                                <div
                                    className='py-3 px-5 flex items-center gap-2 m-[2px] hover:bg-[#fadcdc] transition-all duration-300 cursor-pointer'
                                    onClick={handleBackClick}
                                >
                                    <Image src={BlackRightArrow} alt='Back Arrow' width={15} height={10} className='rotate-180' />
                                    <span className='text-[13px] text-[#121212] uppercase'>About/More</span>
                                </div>

                                {['About', 'Services', 'Ideas & Advice', 'Flower Subscription', 'Book Free Consultation', 'Flowers Vending Machine'].map((item, idx) => (
                                    <Link key={idx} href="#" className='text-sm m-[2px] px-5 py-2 block tracking-[0.4px] text-text hover:bg-alto transition-colors duration-300 hover:text-[#121212]'>
                                        {item}
                                    </Link>
                                ))}
                            </div>
                        )}


                        <div className='p-5 bg-[#12121208] flex items-center'>
                            <button className='w-11 h-11 flex items-center justify-center'>
                                <Image src={FacebookIcon} alt='Facebook Icon' width={18} height={18} />
                            </button>

                            <button className='w-11 h-11 flex items-center justify-center'>
                                <Image src={PintresetIcon} alt='Pintreset Icon' width={18} height={18} />
                            </button>

                            <button className='w-11 h-11 flex items-center justify-center'>
                                <Image src={InstagramIcon} alt='Instagram Icon' width={18} height={18} />
                            </button>

                            <button className='w-11 h-11 flex items-center justify-center'>
                                <Image src={TiktokIcon} alt='Tiktok Icon' width={18} height={18} />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Header;
