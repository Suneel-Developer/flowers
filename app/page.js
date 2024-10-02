import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Footer from './components/Footer'
import ContactBanner from './components/ContactBanner'

const Home = () => {
  return (
    <main>
      <Header />
      <Hero />

      {/*  Dream clients */}
      <section className="px-4 py-9 pb-24">
        <div className="max-w-[1300px] w-[full] mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-20">
          <div className='bg-[url("/assets/dream-detail.webp")] w-full h-[498px] bg-cover bg-center'>
            {/* <img className="w-full h-[498px]" src="/assets/dream-detail.webp" alt="dream-detail" /> */}
          </div>

          <div className="mt-8 md:mt-0 pt-0 md:pt-20">
            <h2 className='text-[30px] md:text-[40px] leading-[39px] md:leading-[52px] text-[#121212] f-cinzel tracking-[0.6px] mb-5'>Build a Successful wedding flowers business with your dream clients</h2>

            <div className="mt-4">
              <p className="mb-[10px] tracking-[0.6px] text-[15px] md:text-base text-[#121212bf]">
                Take a step towards success with our easy-to-follow online classes:
              </p>

              <p className="mb-8 tracking-[0.6px] text-[15px] md:text-base text-[#121212bf]">
                Learn everything you need, step by step - from important paperwork to the nitty-gritty of running, pricing, talking to clients, and marketing. I&apos;ve got a special plan to make your brand stand out and grow. I&apos;ll guide you with my simple and proven methods that helped me build successful businesses. Ready to boost your brand? Join now and let&apos;s get started!
              </p>
            </div>

            <button className="tracking-[0.6px] text-[#121212] text-[15px] px-3 py-2 h-12 w-[308px] border border-opacity-55 hover:border-opacity-100 border-[#121212] transition-all duration-300 text-center">
              Go to Podia to see the details
            </button>
          </div>
        </div>
      </section>

      <section className="px-4 py-[15px] lg:py-9">
        <div className="max-w-[1300px] w-full mx-auto flex flex-col lg:flex-row">
          <div className="order-1 lg:order-2 border border-[#F3F3F3] h-[400px] md:h-[500px] w-full lg:w-[430px] flex justify-center items-center  ">
            <img className="rounded-full w-[340px] md:w-[400px] h-[340px] md:h-[400px]" src="/assets/blog-1.webp" alt="image" />
          </div>

          <div className="order-2 lg:order-1 p-[30px] md:p-[70px] flex-1 flex flex-col items-center lg:items-start ">
            <h2 className="text-lg md:text-2xl text-[#121212] text-center f-cinzel tracking-[0.6px] mb-5 lg:text-start">
              We take it Personal, because each client is like a flower - unique.
            </h2>

            <p className="mb-5 text-[15px] tracking-[0.6px] text-[#121212] text-center lg:text-start f-cinzel">
              Through 10 years and more then 800 weddings, We learned that owning a business is similar to having a baby - it requires constant care and attention. With dreaming, building, planning, designing, and creating we take florals into next level. Not only Making them one of a kind, but also infusing them with emotions and stories.
            </p>

            <p className="text-[15px] tracking-[0.6px] text-[#121212] text-center lg:text-start f-cinzel">
              Our dream is to continue touching people&apos;s lives through the beauty and power of flowers, creating unforgettable moments and leaving a lasting legacy in the world of floristry.
            </p>

            <button className="tracking-[0.6px] text-[#121212] text-lg mt-12 bg-[#FADCDC] px-2 py-2 border border-opacity-55 hover:border-opacity-100 border-[#121212] transition-all duration-300 w-[150px] text-center">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      <section className="px-4 py-[15px] lg:py-9">
        <div className="max-w-[1300px] w-full mx-auto flex flex-col lg:flex-row ">
          <div className="order-1 lg:order-1 border border-[#F3F3F3] h-[400px] md:h-[500px] w-full lg:w-[430px] flex justify-center items-center  ">
            <img className="rounded-full w-[340px] md:w-[400px] h-[340px] md:h-[400px]" src="/assets/b.webp" alt="image" />
          </div>

          <div className="order-2 lg:order-2 p-[30px] md:p-[70px] flex-1 flex flex-col items-center lg:items-start ">
            <h2 className="text-[30px] md:text-[40px] text-[#121212] text-center f-cinzel tracking-[0.6px] mb-5 lg:text-start">
              Wedding Flowers in San Diego
            </h2>

            <p className="mb-5 text-xs md:text-[13px] tracking-[0.6px] text-[#121212] text-center lg:text-start f-cinzel">
              Each petal is a work of art at Chic Flowers. We design everything with it in mind, so every single detail is a mix of artistry, hard work, and uniqueness.
            </p>

            <p className="mb-5 text-xs md:text-[13px] tracking-[0.6px] text-[#121212] text-center lg:text-start f-cinzel">
              Just like a flower, every client is unique, and we always keep this in mind.
            </p>

            <p className="mb-5 text-xs md:text-[13px] tracking-[0.6px] text-[#121212] text-center lg:text-start f-cinzel">
              Pricing for weddings is custom and based on the flowers selected and scale of the projects.
            </p>

            <p className="text-xs md:text-[13px] tracking-[0.6px] text-[#121212] text-center lg:text-start f-cinzel">
              Our French Garden style with a touch of chic elegance will transfer you to a world of elegance, romance, and charm.
            </p>

            <button className="tracking-[0.6px] text-[#121212] text-lg mt-12 bg-[#FADCDC] px-2 py-2 border border-opacity-55 hover:border-opacity-100 border-[#121212] transition-all duration-300 w-[195px] text-center">
              IDEA & ADVICE
            </button>
          </div>
        </div>
      </section>

      <ContactBanner />
      <Footer />
    </main>
  )
}

export default Home