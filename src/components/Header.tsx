'use client'
import { LayoutGroup, motion } from 'framer-motion'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Header(){
    const [mostRecentElement, setMostRecentElement] = useState<string | null>(null)
    const onScroll = () => {
        const header = document.querySelector('header')
        if(window.scrollY > 0){
            header?.classList.add('bg-white/5')
            header?.classList.add('shadow')
            header?.classList.add('backdrop-blur-lg')
        }else{
            header?.classList.remove('bg-white/5')
            header?.classList.remove('shadow')
            header?.classList.remove('backdrop-blur-lg')
        }
        const targetIds = [
            ['main', document.getElementById('main')?.getBoundingClientRect()?.top],
            ['api', document.getElementById('api')?.getBoundingClientRect()?.top],
            ['proxies', document.getElementById('proxies')?.getBoundingClientRect()?.top],
            ['pricing', document.getElementById('pricing')?.getBoundingClientRect()?.top],
            ['solutions', document.getElementById('solutions')?.getBoundingClientRect()?.top],
            ['try-it', document.getElementById('try-it')?.getBoundingClientRect()?.top],
        ]
        const targetId = targetIds.filter((object) => Number(object[1]) < window.innerHeight / 2).pop()
        if(targetId){
            setMostRecentElement(targetId[0]?.toString() ?? 'main')
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', onScroll)
        onScroll()
        return () => window.removeEventListener('scroll', onScroll)
    }, [])
    return(
        <header className='w-screen p-8 flex justify-between sticky top-0 z-[999] transition-colors duration-500'>
            <div className='w-full font-black text-center text-4xl h-full flex items-center justify-center'>
                proxier.io
            </div>
            <LayoutGroup>
            <motion.div className='w-full flex justify-center' layout layoutRoot>
                <div className='w-fit bg-white/5 border border-white/10 p-1 rounded-full flex gap-4'>
                    <Link href='#main'>
                        <div className='rounded-full px-4 py-2 relative'>
                            {(mostRecentElement === 'main' || !mostRecentElement) && <motion.div layout layoutId='nav-bubble' className='absolute top-0 left-0 right-0 bottom-0 bg-white/80 text-black rounded-full shadow-[0_0_8px_-2px_rgba(255,255,255.3)]'></motion.div>}
                            <span className='text-white mix-blend-difference'>
                                Home
                            </span>
                        </div>
                    </Link>
                    <Link href='#api'>
                        <div className='rounded-full px-4 py-2 relative'>
                            {mostRecentElement === 'api' && <motion.div layout layoutId='nav-bubble' className='absolute top-0 left-0 right-0 bottom-0 bg-white/80 text-black rounded-full shadow-[0_0_8px_-2px_rgba(255,255,255.3)]'></motion.div>}
                            <span className='text-white mix-blend-difference'>
                                ProScraper API
                            </span>
                        </div>
                    </Link>
                    <Link href='#proxies'>
                        <div className='rounded-full px-4 py-2 relative'>
                            {mostRecentElement === 'proxies' && <motion.div layout layoutId='nav-bubble' className='absolute top-0 left-0 right-0 bottom-0 bg-white/80 text-black rounded-full shadow-[0_0_8px_-2px_rgba(255,255,255.3)]'></motion.div>}
                            <span className='text-white mix-blend-difference'>
                                Proxies
                            </span>
                        </div>
                    </Link>
                    <Link href='#pricing'>
                        <div className='rounded-full px-4 py-2 relative'>
                            {mostRecentElement === 'pricing' && <motion.div transition={{ bounce: 20 }} layout layoutId='nav-bubble' className='absolute top-0 left-0 right-0 bottom-0 bg-white/80 text-black rounded-full shadow-[0_0_8px_-2px_rgba(255,255,255.3)]'></motion.div>}
                            <span className='text-white mix-blend-difference'>
                                Pricing
                            </span>
                        </div>
                    </Link>
                    <Link href='#solutions'>
                        <div className='rounded-full px-4 py-2 relative'>
                            {mostRecentElement === 'solutions' && <motion.div layout layoutId='nav-bubble' className='absolute top-0 left-0 right-0 bottom-0 bg-white/80 text-black rounded-full shadow-[0_0_8px_-2px_rgba(255,255,255.3)]'></motion.div>}
                            <span className='text-white mix-blend-difference'>
                                Solutions
                            </span>
                        </div>
                    </Link>
                </div>
            </motion.div>
            </LayoutGroup>
            <div className='w-full flex justify-center'>
                <div className='w-fit bg-white/5 border border-white/10 p-1 rounded-full flex gap-4'>
                    <Link href='#main'>
                        <div className='rounded-full px-4 py-2 relative'>
                            {mostRecentElement !== 'try-it' && <motion.div layout layoutId='nav-bubble-2' className='absolute top-0 left-0 right-0 bottom-0 bg-white/80 text-black rounded-full shadow-[0_0_8px_-2px_rgba(255,255,255.3)]'></motion.div>}
                            <span className='text-white mix-blend-difference'>
                                Buy Now
                            </span>
                        </div>
                    </Link>
                    <Link href='#try-it'>
                        <div className='rounded-full px-4 py-2 relative flex items-center justify-center gap-2'>
                            {mostRecentElement === 'try-it' && <motion.div layout layoutId='nav-bubble-2' className='absolute top-0 left-0 right-0 bottom-0 bg-white/80 text-black rounded-full shadow-[0_0_8px_-2px_rgba(255,255,255.3)]'></motion.div>}
                            <div className='h-3 aspect-square rounded-full bg-white z-50 mix-blend-difference'></div>
                            <span className='text-white mix-blend-difference'>
                                Try It
                            </span>
                        </div>
                    </Link>
                </div>
            </div>
        </header>
    )
}