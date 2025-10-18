import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Illustrated Background */}
      <div className="relative">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/home_bg.png"
            alt="Illustrated background with diverse women and menstrual products"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        {/* Content Overlay */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 h-[90vh]">
          {/* Left Side - Content */}
          <div className="px-6 py-16 flex flex-col items-center justify-center w-full lg:flex-row lg:items-center lg:justify-end lg:w-[60vw]">
            <div className="bg-white p-8 lg:p-20 rounded-3xl text-center lg:text-left">
              {/* FlowForward Text at Top */}
              <div className="mb-8 lg:mb-16">
                <h1 className="text-navyblue text-2xl font-light tracking-widest">
                  FLOW FORWARD INITIATIVE
                </h1>
              </div>
              
              {/* Main Heading */}
              <h2 className="text-4xl sm:text-6xl lg:text-8xl font-bold text-navyblue mb-6 lg:mb-8 leading-tight">
                Communities Caring Through Every Cycle.
              </h2>
              
              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link 
                  href="/about"
                  className="inline-block border-2 border-vividred !text-vividred px-6 py-3 rounded-lg font-semibold text-lg hover:bg-vividred hover:!text-white transition-all duration-300"
                >
                  About Us
                </Link>
                <Link 
                  href="/get-involved"
                  className="inline-block bg-vividred border-2 border-vividred !text-white px-6 py-3 rounded-lg font-semibold text-lg hover:bg-transparent hover:!text-vividred transition-all duration-300"
                >
                  Get Involved
                </Link>
              </div>
            </div>
          </div>
          
          {/* Right Side - Image shifted left */}
          <div className="flex items-center justify-center hidden lg:flex">
            <div className="w-1/2 h-1/2 rounded-full overflow-hidden shadow-2xl bg-white">
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

      {/* Mission Statement Section */}
      <div className='bg-salmon p-20'>
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2">
        <div className='hidden lg:block'>
          <div className="flex items-center justify-center">
            <div className="relative w-auto transform -translate-x-32">
              <Image
                src="/images/heart-in-hand.jpg"
                alt="FlowForward Logo"
                width={612}
                height={408}
                className="w-full h-full object-contain rounded-full shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>

        {/* TEXT */}
        <div>
            <p className='text-xl lg:text-2xl leading-relaxed'>
            Our mission is to advance menstrual equity and support individuals who lack consistent access to essential feminine hygiene products. 
            Through community-based drives, mutual aid partnerships, student-led chapters, and international collaborations, we collect and distribute period products directly to unhoused and low-income women.
            <br></br><br></br>
            While youth-founded, Flow Forward Initiative operates independently of school systems to maintain flexibility and a broader community reach. Our work is grounded in community care and driven by a commitment to raising awareness about period poverty. Along with
            providing support, we work to spread awareness for menstraul equity through art-based educational tools.
            <br></br><br></br>
            We believe period products are a basic human need and not a privilege. No one should have to choose between dignity and survival. By spotlighting this urgent issue, we aim to break stigmas, mobilize resources, and leave a lasting impact.
            </p>
        </div>

      </div>
      </div>
    </div>
  )
}