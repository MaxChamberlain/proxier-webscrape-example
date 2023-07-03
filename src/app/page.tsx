import google_logo from '@/assets/images/google_logo.webp'
import grammarly_logo from '@/assets/images/grammarly_logo.webp'
import microsoft_logo from '@/assets/images/microsoft_logo.webp'
import slack_logo from '@/assets/images/slack_logo.webp'
import stripe_logo from '@/assets/images/stripe_logo.webp'
import CodeExample from '@/components/client/home/CodeExample'
import Image from 'next/image'
import blur_rect_planet from '@/assets/icons/blur-rect-planet.svg'
import api_icon from '@/assets/icons/api_icon.svg'
import cart_icon from '@/assets/images/cart.png'
import house_icon from '@/assets/images/house.png'
import web_icon from '@/assets/images/web.webp'
import TryItModal from '@/components/client/home/TryItModal'

const logos = [slack_logo, google_logo, microsoft_logo, grammarly_logo, stripe_logo]

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start w-screen">
      <div className='w-full pt-24 pb-56 flex justify-center items-center' id='main'>
        <div className='w-64 h-64 rounded-full relative text-center flex flex-col items-center justify-center gap-4 pt-12'
          style={{
            background: 'linear-gradient(90deg, #FFF 0%, #FFCFB4 27.08%, #E5BBFF 65.10%, #BCC3FF 88.54%, #BDEFFF 100%)'     
          }}
        >
          <span className='z-50 text-5xl font-thin whitespace-nowrap tracking-widest mix-blend-difference'>
            WEB INTEL UNLEASHED
          </span>
          <span className='z-50 text-xl whitespace-nowrap tracking-widest mix-blend-difference'>
           Gather Vast Public Data, Top Web Scraping & Proxy Network
          </span>
         <div className='absolute top-1/3 left-0 h-64 w-64 rounded-full bg-white/10 backdrop-blur-sm border border-white/20'></div> 
        </div>
      </div>
      <div className='flex flex-col items-center justify-center gap-4 pb-24'>
        <span className=''>
          WE HAVE BEEN MENTIONED ON 1000+ SITES
        </span>
        <div className='flex gap-12 items-center justify-center'>
          {logos.map((logo, index) => (
            <div key={index} className='w-24'>
              <Image
                src={logo}
                alt="company logo"
              />
            </div>
          ))}
        </div>
      </div>
      <div className='w-screen flex justify-center items-center relative' id='api'>
        <div className='w-full max-w-3xl -mt-72 aspect-square rounded-full text-center flex flex-col items-center justify-center gap-4 pt-12 -z-50 absolute mx-auto top-1/2 opacity-20'
            style={{
              background: 'linear-gradient(90deg, #FFF 0%, #FFCFB4 27.08%, #E5BBFF 65.10%, #BCC3FF 88.54%, #BDEFFF 100%)'     
            }}
          >
        </div>
        <div className='w-full aspect-square text-center flex flex-col items-center justify-center gap-4 pt-12 -z-1 backdrop-blur-3xl absolute mx-auto top-0'>
        </div>
        <CodeExample />
      </div>
      <div className='w-full flex items-center justify-center gap-12 z-50 mt-32' id='proxies'>
        <div className='bg-white/10 rounded-full px-8 py-4 border border-white/20 cursor-pointer transition-colors duration-200'>
          PROXY
        </div>
        <div className='bg-white/10 rounded-full px-8 py-4 border border-white/20 cursor-pointer transition-colors duration-200'>
          API
        </div>
      </div>
      <div className='w-full flex items-center justify-center gap-32 z-50 mt-32'>
        <div className='relative'>
          <Image
            src={blur_rect_planet}
            alt="blur rect planet"
          />
          <div className='absolute top-0 translate-y-2/3 left-0 w-full h-2/3 bg-gradient-to-br from-white/20 to-50% to-transparent stop backdrop-blur-md'></div>
        </div>
        <div className='flex flex-col p-4 gap-12 w-fit'>
          <span className='text-[3.5rem] font-light w-[44rem] leading-[125%]'>
            POWER UP YOUR SCRAPERS WITH OUR PROXY INFRASTRUCTURE
          </span>
          <span className='text-2xl font-light w-[44rem] leading-[125%]'>
            Utilize one of the most reliable and largest proxy services in the market, covering 195 countries globally:
          </span>
          <ul className='text-2xl font-light w-[44rem] leading-[125%] list-disc'>
            <li>
              World leading pool of 100M+ Residential Proxies backed by patented technology
            </li>
            <li>
              Fast performance with 2M+ Datacenter Proxies
            </li>
          </ul>
        <div className='rounded-full px-8 py-4 cursor-pointer text-center' style={{
          background: 'linear-gradient(90deg, #FFF 0%, #FFCFB4 27.08%, #E5BBFF 65.10%, #BCC3FF 88.54%, #BDEFFF 100%)'
        }}>
          GET STARTED WITH PROXIES
        </div>
        </div>
      </div>
      <div className='w-full max-w-7xl mx-auto flex justify-between pt-32' id='pricing'>
        <div className='flex flex-col items-center justify-between gap-8 bg-white/5 backdrop-blur-xl border border-white/20 rounded-[5.4rem] p-16 relative'>
          <div className='bg-white/20 w-1/4 aspect-square rounded-full absolute top-1/2 left-1/3 -z-50 blur-3xl'></div>
          <span className='text-2xl font-bold'>
            FREE
          </span>
          <span className='text-xl'>
            1000 FREE API Calls
          </span>
          <span className='text-xl'> 
            1000 FREE Proxies
          </span>
          <span className='text-xl'>  
            1000 FREE Scraping Minutes
          </span>
          <span className='text-xl'>
            24/7 Support
          </span>
          <div className='rounded-full px-8 py-4 cursor-pointer text-center w-full' style={{
            background: 'linear-gradient(90deg, #FFF 0%, #FFCFB4 27.08%, #E5BBFF 65.10%, #BCC3FF 88.54%, #BDEFFF 100%)'
          }}>
            $0 / Month
          </div>
        </div>
        <div className='flex flex-col items-center justify-between gap-8 bg-white/5 backdrop-blur-xl border border-white/20 rounded-[5.4rem] p-16 relative'>
          <div className='bg-white/20 w-1/4 aspect-square rounded-full absolute top-1/2 left-1/3 -z-50 blur-3xl'></div>
          <span className='text-2xl font-bold'>
            PRO
          </span>
          <span className='text-xl'>
            10000 API Calls
          </span>
          <span className='text-xl'>
            1000 FREE Proxies
          </span>
          <span className='text-xl'>
            UNLIMITED Scraping Minutes
          </span>
          <span className='text-xl'>
            24/7 Support
          </span>
          <div className='rounded-full px-8 py-4 cursor-pointer text-center w-full' style={{
            background: 'linear-gradient(90deg, #FFF 0%, #FFCFB4 27.08%, #E5BBFF 65.10%, #BCC3FF 88.54%, #BDEFFF 100%)'
          }}>
            $28 / Month
          </div>
        </div>
        <div className='flex flex-col items-center justify-between gap-8 bg-white/5 backdrop-blur-xl border border-white/20 rounded-[5.4rem] p-16 relative'>
          <div className='bg-white/20 w-1/4 aspect-square rounded-full absolute top-1/2 left-1/3 -z-50 blur-3xl'></div>
          <span className='text-2xl font-bold'>
            PREMIUM
          </span>
          <span className='text-xl'>
            UNLIMITED API Calls
          </span>
          <span className='text-xl'>
            UNLIMITED Proxies
          </span>
          <span className='text-xl'>
            UNLIMITED Scraping Minutes
          </span>
          <span className='text-xl'>
            24/7 Support
          </span>
          <div className='rounded-full px-8 py-4 cursor-pointer text-center w-full' style={{
            background: 'linear-gradient(90deg, #FFF 0%, #FFCFB4 27.08%, #E5BBFF 65.10%, #BCC3FF 88.54%, #BDEFFF 100%)'
          }}>
            $64 / Month
          </div>
        </div>
      </div>
      <div className='w-full px-8 p-3 flex flex-col gap-12 items-center justify-center z-50 max-w-7xl' id='solutions'>
        <div className='w-full grid grid-cols-3 items-center justify-center gap-12 z-50 mt-32'>
          <div className='flex flex-col items-start justify-between gap-8 bg-white/5 backdrop-blur-xl border border-white/20 rounded-[5.4rem] p-16 aspect-square relative'>
            <div className='bg-white/20 w-1/4 aspect-square rounded-full absolute top-1/2 left-1/3 -z-50 blur-3xl'></div>
            <div className='w-16'>
              <Image
                src={api_icon}
                alt="api icon"
              />
            </div>
            <span className='text-2xl'>
              SERP SCRAPER API
            </span>
            <span className='text-lg opacity-60 font-light'>
              A powerful scraper with city-level structured SERP data delivery from major search engines
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </div>
          <div className='flex flex-col gap-12 h-full'>
            <div className='flex items-center justify-between gap-8 bg-white/5 backdrop-blur-xl border border-white/20 rounded-[5.4rem] p-8 h-1/2 relative'>
              <div className='bg-white/20 w-1/4 aspect-square rounded-full absolute top-1/2 left-1/3 -z-50 blur-3xl'></div>
              <div className='w-32'>
                <Image
                  src={cart_icon}
                  alt="api icon"
                />
              </div>
              <div className='flex flex-col gap-4'>
                <span className='text-xl'>
                  E-COMMERCE SCRAPER API
                </span>
                <span className='text-sm opacity-60 font-light'>
                  An adaptable e-commerce website scraper that provides structured results in JSON
                </span>
              </div>
            </div>
            <div className='flex items-center justify-between gap-8 bg-white/5 backdrop-blur-xl border border-white/20 rounded-[5.4rem] p-8 h-1/2 relative'>
              <div className='bg-white/20 w-1/4 aspect-square rounded-full absolute top-1/3 left-1/2 -z-50 blur-3xl'></div>
              <div className='w-32'>
                <Image
                  src={house_icon}
                  alt="api icon"
                />
              </div>
              <div className='flex flex-col gap-4'>
                <span className='text-xl'>
                  REAL ESTATE SCRAPER API
                </span>
                <span className='text-sm opacity-60 font-light'>
                  An advanced real estate website scraper that lets you extract data without getting blocked
                </span>
              </div>
            </div>
          </div>
          <div className='flex flex-col items-start justify-between gap-8 bg-white/5 backdrop-blur-xl border border-white/20 rounded-[5.4rem] p-16 aspect-square relative'>
            <div className='bg-white/20 w-1/4 aspect-square rounded-full absolute top-1/3 left-1/3 -z-50 blur-3xl'></div>
            <div className='w-16'>
              <Image
                src={web_icon}
                alt="api icon"
              />
            </div>
            <span className='text-2xl'>
              WEB SCRAPER API
            </span>
            <span className='text-lg opacity-60 font-light'>
              Scalable scraper that provides real-time data from a majority of websites
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </div>
        </div>
        <div className='w-full grid grid-cols-3 items-center justify-center gap-12 z-50'>
          <div className='flex flex-col gap-12 h-full'>
            <div className='flex items-center justify-between gap-8 bg-white/5 backdrop-blur-xl border border-white/20 rounded-[5.4rem] p-8 h-1/2 relative'>
              <div className='bg-white/20 w-1/4 aspect-square rounded-full absolute top-1/2 left-1/3 -z-50 blur-3xl'></div>
              <div className='w-32'>
                <Image
                  src={cart_icon}
                  alt="api icon"
                />
              </div>
              <div className='flex flex-col gap-4'>
                <span className='text-xl'>
                  E-COMMERCE SCRAPER API
                </span>
                <span className='text-sm opacity-60 font-light'>
                  An adaptable e-commerce website scraper that provides structured results in JSON
                </span>
              </div>
            </div>
            <div className='flex items-center justify-between gap-8 bg-white/5 backdrop-blur-xl border border-white/20 rounded-[5.4rem] p-8 h-1/2 relative'>
              <div className='bg-white/20 w-1/4 aspect-square rounded-full absolute top-1/3 left-1/2 -z-50 blur-3xl'></div>
              <div className='w-32'>
                <Image
                  src={house_icon}
                  alt="api icon"
                />
              </div>
              <div className='flex flex-col gap-4'>
                <span className='text-xl'>
                  REAL ESTATE SCRAPER API
                </span>
                <span className='text-sm opacity-60 font-light'>
                  An advanced real estate website scraper that lets you extract data without getting blocked
                </span>
              </div>
            </div>
          </div>
          <div className='flex flex-col items-start justify-between gap-8 bg-white/5 backdrop-blur-xl border border-white/20 rounded-[5.4rem] p-16 aspect-square relative'>
            <div className='bg-white/20 w-1/4 aspect-square rounded-full absolute top-1/4 left-4/5 -z-50 blur-3xl'></div>
            <div className='w-16'>
              <Image
                src={api_icon}
                alt="api icon"
              />
            </div>
            <span className='text-2xl'>
              SERP SCRAPER API
            </span>
            <span className='text-lg opacity-60 font-light'>
              A powerful scraper with city-level structured SERP data delivery from major search engines
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </div>
          <div className='flex flex-col gap-12 h-full'>
            <div className='flex items-center justify-between gap-8 bg-white/5 backdrop-blur-xl border border-white/20 rounded-[5.4rem] p-8 h-1/2 relative'>
              <div className='bg-white/20 w-1/4 aspect-square rounded-full absolute top-1/2 left-1/3 -z-50 blur-3xl'></div>
              <div className='w-32'>
                <Image
                  src={cart_icon}
                  alt="api icon"
                />
              </div>
              <div className='flex flex-col gap-4'>
                <span className='text-xl'>
                  E-COMMERCE SCRAPER API
                </span>
                <span className='text-sm opacity-60 font-light'>
                  An adaptable e-commerce website scraper that provides structured results in JSON
                </span>
              </div>
            </div>
            <div className='flex items-center justify-between gap-8 bg-white/5 backdrop-blur-xl border border-white/20 rounded-[5.4rem] p-8 h-1/2 relative'>
              <div className='bg-white/20 w-1/4 aspect-square rounded-full absolute top-1/3 left-1/2 -z-50 blur-3xl'></div>
              <div className='w-32'>
                <Image
                  src={house_icon}
                  alt="api icon"
                />
              </div>
              <div className='flex flex-col gap-4'>
                <span className='text-xl'>
                  REAL ESTATE SCRAPER API
                </span>
                <span className='text-sm opacity-60 font-light'>
                  An advanced real estate website scraper that lets you extract data without getting blocked
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <TryItModal />
    </main>
  )
}
