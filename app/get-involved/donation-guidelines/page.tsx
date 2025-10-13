export default function DonationGuidelines() {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100">
        {/* Header */}
        <header className="bg-gradient-to-r from-[#FF6B6B] to-[#FF4757] text-white shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-center mb-4">
              Donation Guidelines
            </h1>
            <p className="text-lg sm:text-xl text-center text-white/95 max-w-3xl mx-auto">
              Flow Forward
            </p>
          </div>
        </header>
  
        {/* Main Content */}
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          
          {/* Introduction */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 sm:p-8 mb-8 border-l-4 border-[#FF4757]">
            <p className="text-[#1a1a2e] text-base sm:text-lg leading-relaxed">
              Thank you for considering a donation to Flow Forward! Your generosity helps ensure that everyone has access to essential menstrual hygiene products. Please review our guidelines below to make sure your donation can be accepted and distributed to those in need.
            </p>
          </div>
            
          {/* What We Accept */}
          <section className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 sm:p-8 mb-8">
            <h2 className="text-3xl sm:text-4xl font-light text-[#FF4757] mb-6 pb-3 border-b-2 border-pink-100">
              What We Accept
            </h2>
            <p className="text-[#1a1a2e] mb-4">We welcome donations of new, unopened menstrual hygiene products, including:</p>
            <ul className="space-y-3 text-[#1a1a2e]">
              <li className="flex items-start">
                <span className="text-[#FF4757] font-bold mr-3 text-xl">✓</span>
                <span>Pads (all sizes)</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#FF4757] font-bold mr-3 text-xl">✓</span>
                <span>Tampons (all absorbencies)</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#FF4757] font-bold mr-3 text-xl">✓</span>
                <span>Menstrual cups</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#FF4757] font-bold mr-3 text-xl">✓</span>
                <span>Period underwear (new, in original packaging)</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#FF4757] font-bold mr-3 text-xl">✓</span>
                <span>Panty liners</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#FF4757] font-bold mr-3 text-xl">✓</span>
                <span>Reusable cloth pads (new only)</span>
              </li>
            </ul>
  
            <h3 className="text-2xl font-light text-[#FF4757] mt-8 mb-4">We also accept:</h3>
            <ul className="space-y-3 text-[#1a1a2e]">
              <li className="flex items-start">
                <span className="text-[#FF4757] font-bold mr-3 text-xl">✓</span>
                <span>Wipes</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#FF4757] font-bold mr-3 text-xl">✓</span>
                <span>New underwear (all sizes, in original packaging)</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#FF4757] font-bold mr-3 text-xl">✓</span>
                <span>Pain relief products</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#FF4757] font-bold mr-3 text-xl">✓</span>
                <span>Hot water bottles and heating pads (new only)</span>
              </li>
            </ul>
          </section>
  
          {/* Product Requirements */}
          <section className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl shadow-lg p-6 sm:p-8 mb-8 border-l-4 border-[#FF4757]">
            <h2 className="text-3xl sm:text-4xl font-light text-[#FF4757] mb-6">
              Product Requirements
            </h2>
            <p className="text-[#1a1a2e] mb-4 font-medium">All donated items must be:</p>
            <ul className="space-y-3 text-[#1a1a2e]">
              <li className="flex items-start">
                <span className="text-[#FF4757] font-bold mr-3">•</span>
                <span><strong className="text-[#FF4757]">New and unopened</strong> in their original packaging</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#FF4757] font-bold mr-3">•</span>
                <span><strong className="text-[#FF4757]">Unexpired</strong> with a minimum of 6 months until expiration date</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#FF4757] font-bold mr-3">•</span>
                <span><strong className="text-[#FF4757]">Free from damage</strong> such as torn packaging or water damage</span>
              </li>
            </ul>
          </section>
  
          {/* What We Cannot Accept */}
          <section className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 sm:p-8 mb-8">
            <h2 className="text-3xl sm:text-4xl font-light text-[#FF4757] mb-6 pb-3 border-b-2 border-pink-100">
              What We Cannot Accept
            </h2>
            <p className="text-[#1a1a2e] mb-4">For health and safety reasons, we cannot accept:</p>
            <ul className="space-y-3 text-[#1a1a2e]">
              <li className="flex items-start">
                <span className="text-red-500 font-bold mr-3 text-xl">✗</span>
                <span>Opened or used products of any kind</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 font-bold mr-3 text-xl">✗</span>
                <span>Expired products</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 font-bold mr-3 text-xl">✗</span>
                <span>Products with damaged or compromised packaging</span>
              </li>
            </ul>
            <h3 className="text-2xl font-light text-[#FF4757] mt-8 mb-4">Ethical Standards</h3>
            <p className="text-[#1a1a2e] mb-4">Flow Forward does not accept products from:</p>
            <ul className="space-y-3 text-[#1a1a2e]">
              <li className="flex items-start">
                <span className="text-red-500 font-bold mr-3 text-xl">✗</span>
                <span>Companies engaged in discriminatory or unethical practices</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 font-bold mr-3 text-xl">✗</span>
                <span>Items designed to shame, stigmatize, or misinform about menstraul health</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 font-bold mr-3 text-xl">✗</span>
                <span>All donations are logged and tracked to ensure fair and transparent distribution</span>
              </li>
            </ul>
          </section>
  
          {/* How to Donate */}
          <section className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 sm:p-8 mb-8">
            <h2 className="text-3xl sm:text-4xl font-light text-[#FF4757] mb-2 pb-3 border-b-2 border-pink-100">
              How to Donate
            </h2>
            
            <div className=" mr-3 p-6">
            <ul className='space-y-3 list-disc'>
            <li><p className="">Donations can be dropped off at approved Flow Forward drives, events, or collection sites
            </p></li>
            <li><p className="">For large-scale donations, please contact the Flow Forward leadership team for coordination</p></li>
            <li><p className="">Shipping donations is allowed, but donors are responsible for postage</p></li>
            </ul>
        </div>
          </section>
  
          
  
          {/* Contact */}
          <section className="bg-gradient-to-r from-[#FF6B6B] to-[#FF4757] rounded-2xl shadow-lg p-6 sm:p-8 text-white text-center">
            <h2 className="text-3xl sm:text-4xl font-light mb-4 border-b-2 border-white/30 pb-3">
              Questions?
            </h2>
            <p className="text-lg mb-6">
              If you have questions about donating or aren't sure if your items qualify, please reach out to us:
            </p>
            <div className="space-y-2 text-lg">
              <p>Email: <a href="mailto:flowforward101@gmail.com" className="underline hover:text-white/80 transition-colors">flowforward101@gmail.com</a></p>
              <p>Phone: <span className="font-light">(202) 553-4861</span></p>
            </div>
          </section>
  
          {/* Footer Message */}
          <div className="text-center mt-12 py-8 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg">
            <p className="text-2xl text-[#1a1a2e] font-light italic">
              Every donation makes a difference.
            </p>
            <p className="text-lg text-[#1a1a2e]/80 mt-2">
              Thank you for helping us break down barriers to menstrual equity and dignity.
            </p>
          </div>
        </main>
      </div>
    );
  }