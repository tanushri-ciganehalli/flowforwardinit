
import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <div className='bg-vividred w-full h-full'>
      <div className="grid grid-cols-3">
        <div className='w-full p-8'>
          <div className="w-30 h-30 rounded-full overflow-hidden shadow-2xl bg-blush">
              <Image
                src="/images/flowforward-logo.png" // Replace with your image path
                alt="Get Involved"
                width={400}
                height={400}
                className="w-full h-full object-fill"
                priority
              />
            </div>
            <h1 className="!text-blush text-2xl pb-2 pt-4 font-light tracking-widest">
              FLOW
              FORWARD INITIATIVE
            </h1>
        </div>
        {/* MENU */}
        <div className='w-full'>
          <ul className='space-y-2 p-8'>
            <li className=''>
              <p className='text-xl !text-blush underline space-y-2'>Menu</p>
            </li>
            <li>
              <Link
                href="/"
                className='text-xl !text-blush hover:underline space-y-2 transition-all duration-300'
              >Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className='text-xl !text-blush hover:underline space-y-2 transition-all duration-300'
              >About
              </Link>
            </li>
            <li>
              <Link
                href="/events"
                className='text-xl !text-blush hover:underline space-y-2 transition-all duration-300'
              >Events
              </Link>
            </li>
            <li>
              <Link
                href="/get-involved"
                className='text-xl !text-blush hover:underline space-y-2 transition-all duration-300'
              >Get Involved
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className='text-xl !text-blush hover:underline space-y-2 transition-all duration-300'
              >Contact
              </Link>
            </li>
          </ul>
        </div>
        {/* SOCIALS */}
        <div className='w-full'>
          <ul className='space-y-2 p-8'>
            <li>
              <p className='text-xl text-semibold !text-blush underline space-y-2'>Contact</p>
            </li>
            {/* INSTAGRAM */}
            <li>
              <a href="https://www.instagram.com/p/DONZyyWjq-5/?utm_source=ig_web_copy_link" target="_blank" role="button">
                <span className="[&>svg]:h-6 [&>svg]:w-6 [&>svg]:fill-blush">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 448 512">
                    <path
                      d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                  </svg>
                </span>
              </a>
            </li>
            <li>
              <a href="/about" role="button" target="_blank">
                <span className="[&>svg]:h-6 [&>svg]:w-6 [&>svg]:fill-blush">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 448 512">
                    <path
                      d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                  </svg>
                </span>
              </a>
            </li>
            <li>
              <div className='flex items-center'>
              <span className="[&>svg]:h-6 [&>svg]:w-6 [&>svg]:fill-blush [&>svg]:stroke-vividred">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path d="M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H6.911a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661Z" />
                </svg>
              </span>
              <span className='text-lg !text-blush pl-1'>flowforward101@gmail.com</span></div>
            </li>
            <li>
              <div className='flex items-center'>
              <span className="[&>svg]:h-6 [&>svg]:w-6 [&>svg]:fill-blush">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                    <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
                  </svg>
              </span>
              <span className='text-lg !text-blush pl-1'>+1 (202) 553-4861</span></div>
            </li>
          </ul>
        </div>
      </div>
      </div>
  )
}