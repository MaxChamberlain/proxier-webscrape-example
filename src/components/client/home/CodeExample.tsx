'use client'
import EndpointExampleCode from '@/components/client/EndpointExampleCode'
import { useState } from 'react'

export default function CodeExample(){
    const [ language, setLanguage ] = useState('curl')
    return(
        <div className='p-16 w-3/5 bg-white/5 rounded-xl backdrop-blur-3xl border border-white/10 flex flex-col gap-16 mt-32'>
            <span className='w-full text-center'>
              CHOOSE PRODUCT
            </span>
            <div className='w-full flex justify-between bg-[#090619] rounded-full px-8 py-4 border border-white'>
              <span>
                DEDICATED DATACENTER PROXIES
              </span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </div>
            <EndpointExampleCode language={language} />
            <div className='w-full flex justify-center gap-4 text-center'>
              <div className={`bg-gradient-to-br from-white/10 to-white/20 hover:from-white/15 hover:to-white/25 rounded-full px-8 py-4 border ${language === 'python' ? 'border-blue-500' : 'border-white/20'} w-full cursor-pointer transition-colors duration-200`} onClick={() => {
                setLanguage('python')
              }}>
                PYTHON
              </div>
              <div className={`bg-gradient-to-br from-white/10 to-white/20 hover:from-white/15 hover:to-white/25 rounded-full px-8 py-4 border ${language === 'curl' ? 'border-blue-500' : 'border-white/20'} w-full cursor-pointer transition-colors duration-200`} onClick={() => {
                setLanguage('curl')
              }}>
                CURL
              </div>
              <div className={`bg-gradient-to-br from-white/10 to-white/20 hover:from-white/15 hover:to-white/25 rounded-full px-8 py-4 border ${language === 'nodejs' ? 'border-blue-500' : 'border-white/20'} w-full cursor-pointer transition-colors duration-200`} onClick={() => {
                setLanguage('nodejs')
              }}>
                NODEJS
              </div>
              <div className={`bg-gradient-to-br from-white/10 to-white/20 hover:from-white/15 hover:to-white/25 rounded-full px-8 py-4 border ${language === 'php' ? 'border-blue-500' : 'border-white/20'} w-full cursor-pointer transition-colors duration-200`} onClick={() => {
                setLanguage('php')
              }}>
                PHP
              </div>
              <div className={`bg-gradient-to-br from-white/10 to-white/20 hover:from-white/15 hover:to-white/25 rounded-full px-8 py-4 border ${language === 'c++' ? 'border-blue-500' : 'border-white/20'} w-full cursor-pointer transition-colors duration-200`} onClick={() => {
                setLanguage('c++')
              }}>
                C++
              </div>
              <div className={`bg-gradient-to-br from-white/10 to-white/20 hover:from-white/15 hover:to-white/25 rounded-full px-8 py-4 border ${language === 'java' ? 'border-blue-500' : 'border-white/20'} w-full cursor-pointer transition-colors duration-200`} onClick={() => {
                setLanguage('java')
              }}>
                JAVA
              </div>
            </div>
        </div>
    )
}