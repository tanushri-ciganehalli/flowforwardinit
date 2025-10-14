import Link from 'next/link'
import Image from 'next/image'


export default function GetInvolvedPage() {
  return (
    <div>
    <div className="w-full relative overflow-hidden py-16 lg:py-24">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-blush"></div>
      
      {/* Content container */}
      <div className="relative z-10 flex items-center justify-between px-8 lg:px-16">
        
        {/* Left side - Text content with semicircle-rectangle background */}
        <div className="flex-1 relative">
          {/* Semicircle-rectangle shape behind text - responsive */}
          <div className="absolute -left-8 sm:-left-16 md:-left-24 lg:-left-32 top-1/2 -translate-y-1/2 
                          w-[60vw] sm:w-[70vw] md:w-[60vw] lg:w-[50vw] xl:w-[65vw]
                          h-[30vh] sm:h-[45vh] md:h-[50vh] lg:h-[55vh] xl:h-[60vh]
                          bg-salmon"
               style={{
                 borderRadius: '0 min(25vw, 500px) min(25vw, 500px) 0'
               }}></div>
          
          {/* Text content - UPDATED to use full width */}
          <div className="relative z-20 pl-4 sm:pl-8 lg:pl-16 pr-4 sm:pr-8 lg:pr-16 max-w-5xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-4 sm:mb-6 lg:mb-8 font-bold text-navyblue leading-tight">
              Get<br />
              Involved
            </h1>
            
            <p className="text-xl lg:text-2xl text-navyblue leading-relaxed">
              Access to period products isn&apos;t a luxury — it&apos;s a basic human need. 
              Yet millions of people around the world, including right here in our own communities, struggle to afford or access the supplies they 
              need. See how you can help by getting involved.
            </p>
          </div>
        </div>
        
        {/* Right side - Image circle */}
        <div className="hidden lg:flex flex-1 justify-center lg:justify-end">
          <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[70vh] xl:h-[70vh]">
            {/* Circular image container */}
            <div className="w-full h-full rounded-full overflow-hidden shadow-2xl">
              <Image
                src="/images/involved-pic-big.jpg"
                alt="Get Involved"
                width={6000}
                height={3000}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
        
      </div>
    </div>
    
    {/* See Our Events */}
    <div className="py-16 bg-white">
      <div className="container mx-auto px-8">
      <div className="text-center pb-8">
          <p className="text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed">
          See how you can join us at our events.
          </p>
        </div>
        <div className='flex justify-center'>
          <Link 
            href="/events"
            className="inline-block border-2 border-vividred text-vividred px-8 py-2 rounded-lg font-semibold text-lg hover:bg-vividred hover:text-blush transition-all duration-300"
          >
            See Our Events
          </Link>
        </div> 
      </div>
    </div>
    
    <div className='bg-vividred py-6'></div>
    {/* START A CHAPTER SECTION */}
    <div className="grid grid-cols-1 lg:grid-cols-2 bg-blush">
      
      <div className="container mx-auto bg-salmon mask-r-from-80% w-[90vw] pb-14">
      <div className="m-0 text-left pl-8 lg:pl-16">
          <h2 className="text-5xl pb-10 pt-12 font-bold text-navyblue">Start a Flow Forward Initiative Chapter</h2>
          <p className="text-xl lg:text-2xl leading-relaxed pb-30 w-[50vw]">
          Bring Flow Forward Initiative to your school or community. As a chapter lead, you&apos;ll
          
          organize local drives, run awareness campaigns, and help shape the
          
          movement where you are.
          </p>
        </div>
        <div className='pl-8 lg:pl-16'>
          <Link 
            href="/get-involved/start-a-new-chapter"
            className="inline-block bg-vividred border-2 border-vividred text-blush px-8 py-2 rounded-lg font-semibold text-lg hover:bg-transparent hover:text-vividred transition-all duration-300"
          >
            Learn More
          </Link>
        </div> 
      </div>
      <div className="hidden lg:flex flex-1 justify-center lg:justify-end pr-8 pt-8">
          <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96">
            {/* Circular image container */}
            <div className="w-full h-full rounded-full overflow-hidden shadow-2xl bg-white">
              <Image
                src="/images/flowforward-logo.png" // Replace with your image path
                alt="Get Involved"
                width={400}
                height={400}
                className="w-full h-full object-fill"
                priority
              />
            </div>
          </div>
        </div>
    </div>
    {/* PRODUCT DRIVE SECTION */}
    <div className='bg-vividred pb-1'></div>            
    <div className='bg-blush'>

      <h2 className="text-5xl font-bold pl-8 lg:pl-16 pt-12 pb-4 text-gray-600 leading-relaxed">Host a Product Drive</h2>
      <p className="pb-6 pl-8 lg:pl-16 text-xl lg:text-2xl mx-auto leading-relaxed">
        Start a local collection of menstrual hygiene products. We&apos;ll provide guidance, flyers, and coordination support.
      </p>
      <div className='pl-8 lg:pl-16 pb-8'><Link 
        href="/get-involved/donation-guidelines"
        className="inline-block border-2 border-vividred text-vividred px-8 py-2 rounded-lg font-semibold text-lg hover:bg-vividred hover:text-blush transition-all duration-300"
      >
        Donation Guidelines
      </Link></div>


      {/* Donation categories header and section */}
      <div className='bg-winter'>
        <h2 className="text-4xl font-light text-center tracking-wider pl-8 lg:pl-16 text-gray-500 leading-relaxed">Donation Categories</h2>  
      </div>     
      {/* Three pictures*/}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-8 place-items-center py-14">
        <div className='w-90'>
          <div className="relative h-110 overflow-hidden border-2 border-salmon"
              style={{
                borderRadius: '150px 150px 0 0' // Semicircle on top, straight bottom
              }}>
            <Image
              src="/images/opt1.png" // Replace with your image path
              alt="Door shaped image"
              width={400}
              height={500}
              className="w-full h-full object-fit"
              priority
            />
          </div>
          <div className="m-0 text-center pt-6 text-gray-600">
            <h2 className="text-2xl leading-relaxed font-light pb-2">Tampons, Pads, & Liners</h2>
            <p className="text-xl leading-relaxed tracking-wider font-light ">
            Distributing menstrual essentials to those who need them most
            </p>
          </div>
        </div>
        
        <div className='w-90'>
          <div className="relative h-110 overflow-hidden border-2 border-salmon"
              style={{
                borderRadius: '150px 150px 0 0' // Semicircle on top, straight bottom
              }}>
            <Image
              src="/images/opt2.png" // Replace with your image path
              alt="Door shaped image"
              width={400}
              height={500}
              className="w-full h-full object-fit"
              priority
            />
          </div>
          <div className="m-0 text-center pt-6 text-gray-600">
            <h2 className="text-2xl leading-relaxed font-light pb-2">Body Care</h2>
            <p className="text-xl leading-relaxed tracking-wider font-light ">
            Providing comfort and dignity through essential items like wipes, soap, deodorant, and lotion.
            </p>
          </div>
        </div>

        <div className='w-90'>
          <div className="relative h-110 overflow-hidden border-2 border-salmon"
              style={{
                borderRadius: '150px 150px 0 0' // Semicircle on top, straight bottom
              }}>
            <Image
              src="/images/opt3.png" // Replace with your image path
              alt="Door shaped image"
              width={400}
              height={500}
              className="w-full h-full object-fit"
              priority
            />
          </div>
          <div className="m-0 text-center pt-6 text-gray-600">
            <h2 className="text-2xl leading-relaxed font-light pb-2">Advocacy & Education</h2>
            <p className="text-xl leading-relaxed tracking-wider font-light ">
            Fighting stigma through outreach initiatives
            </p>
          </div>
        </div>

      </div>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center">
      {/* Waht we collect*/}
      <div className='bg-[#e49198] h-full w-full place-items-center'>
        <div className='bg-winter'>
          <h2 className="text-4xl font-light text-center tracking-wider w-[50vw] pt-2 pb-2 text-gray-500 leading-relaxed">What We Collect</h2>  
        </div> 
        <div>
        {/* bg-vividred inline-block text-blush px-8 py-2 text-lg font-light tracking-wider */}
          <ul className='list-none space-y-2 p-8'>
            <li className=''>
              <p className='bg-salmon inline-block border-1 border-white text-white text-center p-2 w-100 py-2 text-lg font-light tracking-wider'>Pads (all sizes)</p>
            </li>
            <li className=''>
              <p className='bg-salmon inline-block border-1 border-white inline-block text-white text-center p-2 w-100 py-2 text-lg font-light tracking-wider'>Tampons</p>
            </li>
            <li className=''>
              <p className='bg-salmon inline-block border-1 border-white inline-block text-white text-center p-2 w-100 py-2 text-lg font-light tracking-wider'>Panty liners</p>
            </li>
            <li className=''>
              <p className='bg-salmon inline-block border-1 border-white inline-block text-white text-center p-2 w-100 py-2 text-lg font-light tracking-wider'>Wipes (fragrance-free preferred)</p>
            </li>
            <li className=''>
              <p className='bg-salmon inline-block border-1 border-white inline-block text-white text-center p-2 w-100 py-2 text-lg font-light tracking-wider'>New underwear (all sizes)</p>
            </li>
            <li className=''>
              <p className='bg-salmon inline-block border-1 border-white inline-block text-white text-center p-2 w-100 py-2 text-lg font-light tracking-wider'>Heating pads / pain relief items</p>
            </li>
            <li className=''>
              <p className='bg-salmon inline-block border-1 border-white inline-block text-white text-center p-2 w-100 py-2 text-lg font-light tracking-wider'>Zipper pouches or discreet bags</p>
            </li>
          </ul>
        </div>
      </div>
      {/* Where it goes */}
      <div className='bg-[#e6b1bd] h-full w-full'>
        <div className='bg-winter'>
          <h2 className="text-4xl font-light text-center tracking-wider w-[50vw] pt-2 pb-2 text-gray-500 leading-relaxed">Where It Goes</h2>  
        </div>

        <div className="m-0 pt-6 text-gray-600 p-8">
          <h2 className="text-2xl leading-relaxed text-center">Donations go directly to:</h2>
          <ul className='space-y-2 pb-8 pr-8 pl-25 pt-4 list-disc'>
            <li><p className="text-xl leading-relaxed tracking-wider font-light ">Local women and family shelters</p></li>
            <li><p className="text-xl leading-relaxed tracking-wider font-light ">Community outreach programs</p></li>
            <li><p className="text-xl leading-relaxed tracking-wider font-light ">Students and low-income individuals through mutual aid groups</p></li>
          </ul>
        </div>
        
        <p className="text-xl leading-relaxed tracking-wider text-center font-bold p-8 align-baseline">We focus on direct distribution to ensure items get where they are most needed–fast</p>
      </div>
    </div>

    <div className='bg-vividred pb-1'></div>
    <div className=''>

    </div>
      <h2 className="pl-8 lg:pl-16 text-5xl pb-10 pt-12 font-bold text-navyblue">Raise Awareness</h2>
      <p className="pb-6 pl-8 lg:pl-16 text-xl lg:text-2xl mx-auto leading-relaxed">
      Help us spread the word through
      
      social media, campus events, and community outreach. Your voice breaks stigma.
      </p>

    {/* FOOTER */}
    {/* <Footer></Footer> */}
    
    </div>
    
  )
}
