import Image from 'next/image'
import FacebookIcon from "../assets/facebook.svg"
import PinteresetIcon from "../assets/pics.svg"
import InstagramIcon from "../assets/insta.svg"
import TiktokIcon from "../assets/tiktok.svg"
import CompaniesLogo from "../assets/companies-logos.png"
import RightArrow from "../assets/transparent-right-arrow.svg"
import Link from 'next/link'

const Footer = () => {
    return (
        <section className="pt-[42px] md:pt-[56px] pb-5 bg-[#121212]">
            <div className='px-6'>
                <div className="max-w-[1300px] w-[full] mx-auto pb-[2.5rem]">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px] ">
                        <div>
                            <h2 className="text-base mb-3 text-white f-cinzel uppercase">Flower delivery San Diego</h2>

                            <div className="flex flex-col">
                                {["Flower delivery Carlsbad ca", "Flower delivery Encinitas", "Flower delivery Oceanside", "Flower delivery La jolla", "Flower delivery Rancho Santa Fe"].map((item1, idx1) => (
                                    <Link key={idx1} href="#" className='py-[10px] text-xs text-[#ffffffB3] tracking-[0.6px] hover:text-white transition-all duration-300'>
                                        {item1}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h2 className="text-base mb-3 text-white f-cinzel uppercase">we deliver flowers</h2>

                            <div className="flex flex-col">
                                {["Flower delivery Solana Beach", "Flower delivery Del mar", "Flower delivery San Marcos", "Flower delivery Vista", "Flower delivery Escondido", "More local delivery flowers"].map((item2, idx2) => (
                                    <p key={idx2} className='py-[10px] text-xs text-[#ffffffB3] tracking-[0.6px]'>
                                        {item2}
                                    </p>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col gap-3">
                            <p className="text-xs text-[#ffffffb3] tracking-[0.6px] leading-[21.6px]">
                                We provide wedding flowers San Diego area, Orange county and Los Angeles
                            </p>

                            <Link className="text-base tracking-[0.6px] f-cinzel uppercase text-[#ffffffb3] hover:text-[#ffffff]" href="#">
                                Build your wedding Now
                            </Link>

                            <Link className="text-base tracking-[0.6px] f-cinzel uppercase text-[#ffffffb3] hover:text-[#ffffff]" href="#">
                                Business of Floral Design School
                            </Link>
                        </div>
                    </div>

                    <div className="mt-10">
                        <h2 className="mb-[20px] text-white text-base tracking-[0.6px] text-center md:text-start f-cinzel">Sign Up For Our Mail</h2>

                        <div className='flex justify-between flex-col md:flex-row items-center md:items-end gap-[40px] md:gap-[10px]'>
                            {/* Email Input Feild  */}
                            <div className='max-w-[358px] w-full h-11 relative'>
                                <input className="flex-1 bg-transparent h-full border hover:border-opacity-100 transition-all duration-300 p-4 w-full border-white text-white border-opacity-50 outline-none" type="text" placeholder="Email" />
                                <button className='absolute h-full w-11 top-0 right-0 flex items-center justify-center bg-transparent ml-1'>
                                    <Image src={RightArrow} alt='Right Arrow' />
                                </button>
                            </div>

                            <div className="flex flex-col md:flex-row gap-[30px] md:gap-[20px] items-center">
                                <button className="text-base flex items-center justify-center gap-1 text-[#ffffff] w-[162px] h-9 rounded-[48px] bg-[#5433eb]">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" className="text-inherit size-5"><path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="1.667" d="m9.14 4.502.86.881.86-.881a3.82 3.82 0 0 1 5.437-.064l.064.064c1.498 1.536 1.518 4.014.062 5.576l-.062.066L10 16.666l-6.36-6.524c-1.52-1.557-1.52-4.083 0-5.641a3.822 3.822 0 0 1 5.5 0Z"></path></svg>
                                    Follow on shop
                                </button>

                                <div className="flex flex-row gap-[20px] justify-center">
                                    <Link href="#">
                                        <Image className="w-[18px] h-[18px]" src={FacebookIcon} alt="Facebook Icon" width={18} height={18} />
                                    </Link>

                                    <Link href="#">
                                        <Image className="w-[18px] h-[18px]" src={InstagramIcon} alt="Instagram Icon" width={18} height={18} />
                                    </Link>

                                    <Link href="#">
                                        <Image className="w-[18px] h-[18px]" src={TiktokIcon} alt="Tiktok Icon" width={18} height={18} />
                                    </Link>

                                    <Link href="#">
                                        <Image className="w-[18px] h-[18px]" src={PinteresetIcon} alt="Pintereset Icon" width={18} height={18} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className='border-t-[.1rem] border-forground px-6'>
                <div className="max-w-[1300px] mx-auto w-[full] pt-10">
                    <div className=" p-[5px] flex flex-col md:flex-row justify-center" >
                        <div className="flex justify-center flex-wrap items-center">
                            {["Our story", "FAQ", "Return Policy", "Contact", "Terms of Service", "Flower care", "Local Delivery Options"].map((item, idx) => (
                                <Link key={idx} href="#" className='p-[6px] text-[13px] text-white tracking-[0.6px]'>
                                    {item}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="flex justify-center p-[5px]">
                        <Image className="max-w-[380px] w-full h-[29.2px]" src={CompaniesLogo} width={380} height={30} alt="Companies Logo" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer