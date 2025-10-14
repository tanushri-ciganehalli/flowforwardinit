import Link from 'next/link'
import Image from 'next/image'

export default function ChapterPage() {
  return (
    <div className="min-h-screen bg-blush">
      {/* Header Section */}
      <div className="relative py-16 px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side - Text Content */}
            <div className="space-y-8">
              <h1 className="text-5xl lg:text-6xl font-bold text-black leading-tight">
                Starting a New Flow Forward chapter
              </h1>
              
              <p className="text-xl lg:text-2xl text-black leading-relaxed">
                Learn how to start a new Flow Forward chapter in your community to empower local leaders to expand Flow Forward's mission and ensure consistency and alignment with our core values!
              </p>
            </div>

            {/* Right Side - Images */}
            <div className="relative flex items-center justify-center">
              {/* Container for side-by-side layout */}
              <div className="relative w-full flex  rounded-2xl items-end justify-center gap-8">
                
                {/* People illustration on the left */}
                <div className="relative w-1/2">
                  <Image
                    src="/images/chapter-pic (1).jpg"
                    alt="Diverse group of people celebrating"
                    width={600}
                    height={400}
                    className="w-full h-auto object-contain  rounded-2xl"
                    priority
                  />
                </div>

                {/* Logo on the right with border */}
                {/* <div className="relative w-1/2 border-4 border-purple-500 bg-white rounded-2xl p-4 shadow-xl">
                  <Image
                    src="/images/flowforward-logo.png"
                    alt="Flow Forward Initiative Logo"
                    width={320}
                    height={320}
                    className="w-full h-full object-contain"
                    priority
                  />
                </div> */}
                <div className="hidden lg:flex flex-1 justify-center lg:justify-end pr-8 pt-8">
                          <div className="relative w-60">
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
            </div>

          </div>
        </div>
      </div>

      {/* Additional Content Section (Optional) */}
      <div className="bg-white py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-navyblue mb-8">Why Start a Chapter?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-salmon/20 rounded-lg">
              <h3 className="text-xl font-semibold text-navyblue mb-4">Make Local Impact</h3>
              <p className="text-navyblue">
                Directly address period poverty in your community and see the immediate difference you make.
              </p>
            </div>
            
            <div className="p-6 bg-salmon/20 rounded-lg">
              <h3 className="text-xl font-semibold text-navyblue mb-4">Build Leadership Skills</h3>
              <p className="text-navyblue">
                Develop valuable organizational, communication, and leadership skills while making a difference.
              </p>
            </div>
            
            <div className="p-6 bg-salmon/20 rounded-lg">
              <h3 className="text-xl font-semibold text-navyblue mb-4">Join a Movement</h3>
              <p className="text-navyblue">
                Connect with like-minded changemakers working toward menstrual equity.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* How to Start Section */}
      <div className="bg-salmon py-16 px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-navyblue mb-8 text-center">How to Start Your Chapter</h2>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-vividred text-white rounded-full flex items-center justify-center text-xl font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-navyblue mb-2">Eligibility</h3>
                  <p className="text-navyblue">
                    To start a chapter, you must be at least 16 years old (with an adult advisor if you&apos;re under 18)
                    and assemble a minimum of 5 committed members!
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-vividred text-white rounded-full flex items-center justify-center text-xl font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-navyblue mb-2">Express Your Interst</h3>
                  <p className="text-navyblue">
                    Complete the Chapter Interest Form and submit a short mission statement describing your chapter&apos;s goals
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-vividred text-white rounded-full flex items-center justify-center text-xl font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-navyblue mb-2">Attend Orientation</h3>
                  <p className="text-navyblue">
                    Join our virtual orientation with the Flow Forward leadership team to learn about our mission, values, and chapter operations.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-vividred text-white rounded-full flex items-center justify-center text-xl font-bold">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-navyblue mb-2">Launch Your Chapter</h3>
                  <p className="text-navyblue">
                    Start holding monthly meetings, organizing drives, starting fundraisers, and making an impact in your community!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-vividred py-16 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-white mb-8">
            Start your Flow Forward chapter today and become part of the movement to end period poverty.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-vividred px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blush transition-all duration-300">
              Apply to Start a Chapter
            </button>
            <div className="border-2 border-white !text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:!text-vividred transition-all duration-300">
              <Link href = "/contact"
              className='!text-white py-4 rounded-lg font-semibold text-lg hover:bg-white hover:!text-vividred transition-all duration-300'>
              Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
