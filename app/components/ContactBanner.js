import React from 'react'

const ContactBanner = () => {
    return (
        <section className="h-[560px] flex flex-col items-center justify-center relative bg-cover bg-center bg-no-repeat md:bg-[url('/assets/contact-us-banner.webp')]">
            <div className="h-[544px] w-full flex md:hidden bg-cover bg-center bg-no-repeat bg-[url('/assets/contact-us-banner.webp')]"></div>
            <div className="p-5 md:p-[109px] relative bg-[#ffffffb5] flex flex-col gap-2 items-center justify-center md:border-[3px] border-[#fadcdc] max-w-[894px] mx-auto w-full">
                <h2 className="text-[40px] f-cinzel text-[#121212] text-center">
                    Contact Us
                </h2>

                <p className="text-base text-[#000000] text-center tracking-[0.6px] max-w-[676px] w-full mx-auto">
                    We&apos;ll be happy to send you a detailed floral proposal, after we&apos;ll get your wedding information
                </p>

                <button className="tracking-[0.6px] text-[#121212] text-lg mt-4 bg-[#FADCDC] px-3 py-2 border border-opacity-55 hover:border-opacity-100 border-[#121212] transition-all duration-300 w-[176px] text-center">
                    GET QUOTE
                </button>
            </div>
        </section>

    )
}

export default ContactBanner