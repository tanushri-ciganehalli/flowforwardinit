import Link from 'next/link'
import Image from 'next/image'
export default function AwarenessPage() {
    return (
    <div className="bg-blush">
       <div className="relative md:hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/aware-mobile2.png"
            alt="Illustrated background with diverse women and menstrual products"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        {/* Content Overlay */}
        <div className="relative z-10 grid grid-cols-1 h-[60vh]">
          {/* Left Side - Content */}
          <div className="px-6 py-16 flex flex-col items-center justify-center w-full lg:flex-row lg:items-center lg:justify-end lg:w-[60vw]">
            <div className="bg-white p-8 lg:p-20 rounded-3xl text-center lg:text-left">
              
              {/* Main Heading */}
              <h2 className="text-6xl  font-bold text-navyblue mb-6  leading-tight">
                Raising Awareness
              </h2>
              <h2 className="text-xl lg:text-2xl text-navyblue leading-relaxed">
            Along with initiating fundraisers and donation drives to support communities, we also believe it&apos;s 
            important to spread awareness about menstrual equity as well. That&apos;s why we are also looking into fun, 
            art-based educational tools to engage people to better educate on this pressing issue.
            </h2>

            </div>
          </div>
          
        </div>
      </div>



      {/* Hero Section with Illustrated Background */}
      <div className="hidden md:grid md:grid-cols-1 lg:grid-cols-2 lg:h-[90vh]">
        {/* Left Side - Custom Brown Color */}
        <div className="px-12 py-16 flex flex-col justify-center bg-blush">
          <div className="max-w-md  sm:">
            {/* FlowForward Text at Top */}
            <div className="mb-16">
                <h1 className="sm:text-5xl lg:text-8xl font-bold text-black leading-tight">Raising Awareness</h1>
            </div>

            
            {/* Main Heading */}
            <h2 className="text-xl lg:text-2xl text-navyblue leading-relaxed">
            Along with initiating fundraisers and donation drives to support communities, we also believe it&apos;s 
            important to spread awareness about menstrual equity as well. That&apos;s why we are also looking into fun, 
            art-based educational tools to engage people to better educate on this pressing issue.
            </h2>
            
          </div>
        </div>
        
        {/* Right Side - Full Image Background */}
        
        <div className='relative'>
          <div className="sm:h-120 lg:min-h-auto">
            <Image
              src="/images/aware-header.png"
              alt="Menstrual pad with rose"
              fill
              className="object-cover"
              priority
            />
          </div>

        </div>
      </div>


            <div className='bg-blush'>
            <div className="bg-salmon">
        
                <div className="m-0 col-span-1 xl:col-span-3 md:col-span-2 lg:col-span-2 text-left flex items-center p-8">
                    <div className=''>
                    <h2 className="text-4xl text-center lg:text-5xl font-bold pb-8">Educational Tools</h2>
                    <p className="text-xl text-center lg:pr-30 lg:pl-30 lg:text-2xl leading-relaxed">
                    Our art-based educational tools include creative comics, illustrations, 
                    and relatable messages to provide people with a way to connect and engage with menstrual equity.

                    We are currently in the process of creating various short comics to bring more people to contribute to our cause.
                    </p>
                    </div>
                    </div>
                </div>
                
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 p-6 gap-y-6 place-items-center'>
    
                      <div className="relative sm:w-100 sm:h-120 md:w-64 md:h-84 lg:w-80 lg:h-100 xl:w-140 xl:h-180">
                          {/* Circular image container */}
                          <div className="w-full h-full ">
                          <Image
                              src="/images/comic-ex.png" // Replace with your image path
                              alt="Get Involved"
                              width={512}
                              height={703}
                              className="w-full h-full object-fill rounded-2xl border-salmon border-2 bg-white p-2"
                              priority
                          />
                          </div>
                      </div>
                      <div className="relative sm:w-100 sm:h-120 md:w-64 md:h-84 lg:w-80 lg:h-100 xl:w-140 xl:h-180">
                          {/* Circular image container */}
                          <div className="w-full h-full ">
                          <Image
                              src="/images/comic2.jpg" // Replace with your image path
                              alt="Comic 2"
                              width={607}
                              height={939}
                              className="w-full h-full object-fill rounded-2xl border-salmon border-2 bg-white p-2"
                              priority
                          />
                          </div>
                      </div>
                </div>
            </div>
            
        </div>
        
    
    )
  }