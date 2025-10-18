import Image from 'next/image'

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* HEADER */}
      <div className='relative'>
  <Image
    src="/images/home-img.jpg"
    alt="Get Involved"
    width={3132}
    height={2076}
    className="w-full h-250 object-cover"
    priority
  />
  
  {/* Centered text overlay with responsive red background */}
  <div className='absolute inset-0 flex items-center justify-center p-4 sm:p-6 lg:p-8'>
    <div className='bg-salmon/80 p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 rounded-lg max-w-4xl w-full mx-4'>
    {/* OUR STORY */}
    <div>
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl font-bold mb-1 sm:mb-2 lg:mb-4 text-center leading-tight">
        Our Story
      </h1>
      
      <div className="space-y-4 sm:space-y-6 pb-4">
        <p className=' text-center text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed'> 
          Founded in 2025, Flow Forward Initiative began as a personal response to the lack of menstrual products in local shelters. 
          What started as one donation drive quickly grew into a larger mission to confront the global issue of period poverty, an issue that 
          affects over 500 million people worldwide and disproportionately impacts low-income women and women of color.
        </p>
        
        <p className=' text-center text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed'>
          Flow Forward Initiative is a youth-led organization committed to advancing menstrual equity by raising awareness, challenging stigma, 
          and supplying essential period products to unhoused and low-income women. Through community drives, student-led chapters, 
          and mutual aid partnerships, we mobilize resources while shifting public narratives around menstruation.
        </p>
        
        <p className=' text-center text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed'>
          We believe menstrual products are a basic human need, not a privilege, and no one should have to choose between dignity and survival.
        </p>
      </div>
      </div>

      {/* OUR MISSION */}
      <div className='bg-navyblue pb-0.25'></div>
    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl pt-4 font-bold mb-1 sm:mb-2 lg:mb-4 text-center leading-tight">
        Our Mission
    </h1>
    <div className="">
      <p className=' text-center text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed'> 
      To advance menstrual equity and support individuals who lack consistent access to essential feminine hygiene products, and to raise awareness about menstraul equity
      art-based educational tools.
      Our work is grounded in community care and driven by a commitment to raising awareness about period poverty.
      </p>
    </div>
    </div>
  
  </div>
</div>

      <div className='bg-vividred py-6'></div>
      {/* <div className='bg-vividred pb-1'></div> */}

      {/* CHIEF OFFICERS */}
      <div className='grid place-items-center'>
        
        <div><h2 className="text-6xl font-bold tracking-wider pt-12 pb-4 leading-tight text-center">Our Team</h2></div>

        <div className=''>
          <div className="grid grid-cols-1 lg:grid-cols-2 max-w-7xl pb-15">
            <div className="relative h-80 w-80 overflow-hidden border-3 border-salmon">
              <Image
                src="/images/leyla-pic2.jpeg" 
                alt="Door shaped image"
                width={774}
                height={774}
                className="w-full h-full object-fit"
                priority
              />
            </div>

            <div className=''>
              <p className="text-5xl font-bold tracking-wider pt-10 pb-8 leading-relaxed">Chief Executive Officer</p>
              <p className="text-3xl font-bold tracking-wider pb-4 leading-relaxed">Leyla Merrifield</p>
              <p className="text-xl font-light tracking-wider leading-relaxed">
              I am the CEO/Founder. I lead the vision and direction of FFI, guide my team, make key deductions, and represent our organization publicly to inspire support and impact.
              I made the Flow Forward Initiative because I wanted to make menstrual equity both accessible and relatable, specifically through artistic expression. 
              Via short educational comics, I strive to break taboos and turn a silent topic into empowerment for all women struggling with accessing feline hygiene products. I love watching TV shows and listening to music! 
              I want FFI to be widely recognized for our artistic approach, collaborate with more organizations with the same goals, and donate to as many shelters as possible not just in California, but in other states as well! 
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 max-w-7xl pb-15">
            <div className="relative h-80 w-80 overflow-hidden border-3 border-salmon">
              <Image
                src="/images/aisha-pic2.jpg" // Replace with your image path
                alt="Door shaped image"
                width={409}
                height={409}
                className="w-full h-full object-fit"
                priority
              />
            </div>

            <div className=''>
              <p className="text-5xl font-bold tracking-wider pt-10 pb-8 leading-relaxed">Chief Finance Officer</p>
              <p className="text-3xl font-bold tracking-wider pb-4 leading-relaxed">Aisha Hanif</p>
              <p className="text-xl font-light tracking-wider leading-relaxed">
              Hi! I&apos;m Aisha Hanif, and I&apos;m the CFO for Flow Forward. I&apos;m a sophomore at Foothill High School, 
              and I help keep track of our budget and donations. I also get to talk with donors and share why our organization is so important!
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 max-w-7xl pb-15">
            <div className="relative h-80 w-80 overflow-hidden border-3 border-salmon">
              <Image
                src="/images/placeholder.png" 
                alt="Door shaped image"
                width={1036}
                height={775}
                className="w-full h-full object-fit"
                priority
              />
            </div>

            <div className=''>
              <p className="text-5xl font-bold tracking-wider pt-10 pb-8 leading-relaxed">Chief Operations Officer</p>
              <p className="text-3xl font-bold tracking-wider pb-4 leading-relaxed">Ananya Menon</p>
              <p className="text-xl font-light tracking-wider leading-relaxed">
              I joined Flow Forward because I wanted to build a smoother, more reliable way for people to help tackle 
              the period poverty crisis. As our operations lead, I create checklists and event templates, coordinate 
              drives and partnerships, and make sure funds and supplies reach their respective places. 
              Outside of Flow Forward I&apos;m into neuroscience research, ceramics, and swimming, and our goal for our 
              organization is to expand to student-led chapters in multiple cities and increase donations of period care to those in need. 
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 max-w-7xl pb-15">
            <div className="relative h-80 w-80 overflow-hidden border-3 border-salmon">
              <Image
                src="/images/placeholder.png" // Replace with your image path
                alt="Door shaped image"
                width={400}
                height={500}
                className="w-full h-full object-fit"
                priority
              />
            </div>

            <div className=''>
              <p className="text-5xl font-bold tracking-wider pt-10 pb-8 leading-relaxed">Chief Technology Officer</p>
              <p className="text-3xl font-bold tracking-wider pb-4 leading-relaxed">Tanushri Ciganehalli</p>
              <p className="text-xl font-light tracking-wider leading-relaxed">
              Hi, I&apos;m Tanushri Ciganehalli and I serve as the CTO of Flow Forward Initiative. I manage our website and help the team use technology to share our mission and connect with the community. 
              I&apos;ve always been interested in healthcare, which inspires me to volunteer and support causes that promote dignity and well-being. I enjoy math, coding, and learning about design. 
              I&apos;m excited to combine my passion for healthcare and technology to help Flow Forward Initiative grow and reach more people.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 max-w-7xl pb-15">
            <div className="relative h-80 w-80 overflow-hidden border-3 border-salmon">
              <Image
                src="/images/placeholder.png" // Replace with your image path
                alt="Door shaped image"
                width={400}
                height={500}
                className="w-full h-full object-fit"
                priority
              />
            </div>

            <div className=''>
              <p className="text-5xl font-bold tracking-wider pt-10 pb-8 leading-relaxed">Chief Outreach Officer</p>
              <p className="text-3xl font-bold tracking-wider pb-4 leading-relaxed">Aditi Bambhani</p>
              <p className="text-xl font-light tracking-wider leading-relaxed">
              Hi, My name is Aditi Bhambhani, I&apos;m currently at Amador Valley High. I love to swim, read, walk, listen to music, and color guard!
              I joined Flow Forward because I was super passionate about the main idea of this, as women we go through so many struggles especially as we reach puberty.
              A pad and care should be every woman&apos;s right and I wish to deliver so through Flow Forward.
              Currently I am COO of Outreach, meaning I work with other shelters and companies to help us grow bigger!
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 max-w-7xl pb-15">
            <div className="relative h-80 w-80 overflow-hidden border-3 border-salmon">
              <Image
                src="/images/aahana-pic2.png" // Replace with your image path
                alt="Door shaped image"
                width={850}
                height={850}
                className="w-full h-full object-fit"
                priority
              />
            </div>

            <div className=''>
              <p className="text-5xl font-bold tracking-wider pt-10 pb-8 leading-relaxed">Chief Administration and Creative Officer</p>
              <p className="text-3xl font-bold tracking-wider pb-4 leading-relaxed">Aahana Lohia</p>
              <p className="text-xl font-light tracking-wider leading-relaxed">
              I joined Flow Forward because I wanted to help address the stigma and lack of access around menstruation in a way that blends both advocacy and creativity. 
              As Chief of Administration and Creative Officer (CACO), I manage organizational tasks to keep our projects running smoothly while also leading the creative 
              direction for campaigns, designs, and outreach. I also coordinate with partner organizations on events like drives, art fairs, and pop-up sales.
              Outside of Flow Forward, I enjoy drawing, music, reading, research, and volunteering! I hope Flow Forward grows into a movement that not only provides 
              products to those in need but also sparks conversations that normalize menstruation and empower youth to lead change.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 max-w-7xl pb-15">
            <div className="relative h-80 w-80 overflow-hidden border-3 border-salmon">
              <Image
                src="/images/placeholder.png" // Replace with your image path
                alt="Door shaped image"
                width={400}
                height={500}
                className="w-full h-full object-fit"
                priority
              />
            </div>

            <div className=''>
              <p className="text-5xl font-bold tracking-wider pt-10 pb-8 leading-relaxed">Chief Social Media Officer</p>
              <p className="text-3xl font-bold tracking-wider pb-4 leading-relaxed">Anam Hanif</p>
              <p className="text-xl font-light tracking-wider leading-relaxed">
              
              </p>
            </div>
          </div>

        </div>
      </div>

    {/* FOOTER */}
      

    </div>
  )
}