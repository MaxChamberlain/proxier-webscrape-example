'use client'
import EndpointExampleCode from '@/components/client/EndpointExampleCode'
import { useState } from 'react'

export default function CodeExample(){
    const [ language, setLanguage ] = useState('curl')
    return(
        <div className='p-4 md:p-8 lg:p-16 w-full lg:w-3/5 bg-white/5 rounded-xl backdrop-blur-3xl border border-white/10 flex flex-col gap-4 md:gap-8 lg:gap-16 mt-32'>
            <span className='w-full text-center'>
              GET STARTED
            </span>
            <EndpointExampleCode language={language} />
            <div className='w-full flex justify-center gap-4 text-center lg:flex-nowrap flex-wrap'>
              <div className={`bg-gradient-to-br from-white/10 to-white/20 hover:from-white/15 hover:to-white/25 rounded-full px-2 py-1 lg:px-8 lg:py-4 border ${language === 'python' ? 'border-blue-500' : 'border-white/20'} lg:w-full w-fit cursor-pointer transition-colors duration-200`} onClick={() => {
                setLanguage('python')
              }}>
                PYTHON
              </div>
              <div className={`bg-gradient-to-br from-white/10 to-white/20 hover:from-white/15 hover:to-white/25 rounded-full px-2 py-1 lg:px-8 lg:py-4 border ${language === 'curl' ? 'border-blue-500' : 'border-white/20'} lg:w-full w-fit cursor-pointer transition-colors duration-200`} onClick={() => {
                setLanguage('curl')
              }}>
                CURL
              </div>
              <div className={`bg-gradient-to-br from-white/10 to-white/20 hover:from-white/15 hover:to-white/25 rounded-full px-2 py-1 lg:px-8 lg:py-4 border ${language === 'nodejs' ? 'border-blue-500' : 'border-white/20'} lg:w-full w-fit cursor-pointer transition-colors duration-200`} onClick={() => {
                setLanguage('nodejs')
              }}>
                NODEJS
              </div>
              <div className={`bg-gradient-to-br from-white/10 to-white/20 hover:from-white/15 hover:to-white/25 rounded-full px-2 py-1 lg:px-8 lg:py-4 border ${language === 'php' ? 'border-blue-500' : 'border-white/20'} lg:w-full w-fit cursor-pointer transition-colors duration-200`} onClick={() => {
                setLanguage('php')
              }}>
                PHP
              </div>
              <div className={`bg-gradient-to-br from-white/10 to-white/20 hover:from-white/15 hover:to-white/25 rounded-full px-2 py-1 lg:px-8 lg:py-4 border ${language === 'c++' ? 'border-blue-500' : 'border-white/20'} lg:w-full w-fit cursor-pointer transition-colors duration-200`} onClick={() => {
                setLanguage('c++')
              }}>
                C++
              </div>
              <div className={`bg-gradient-to-br from-white/10 to-white/20 hover:from-white/15 hover:to-white/25 rounded-full px-2 py-1 lg:px-8 lg:py-4 border ${language === 'java' ? 'border-blue-500' : 'border-white/20'} lg:w-full w-fit cursor-pointer transition-colors duration-200`} onClick={() => {
                setLanguage('java')
              }}>
                JAVA
              </div>
            </div>
        </div>
    )
}