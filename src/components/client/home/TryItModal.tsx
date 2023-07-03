'use client'
import Image from "next/image"
import { useState } from "react"

export default function TryItModal(){
    const [ url, setUrl ] = useState('')
    const [ image, setImage ] = useState<null | string>(null)
    const [ loading, setLoading ] = useState(false)

    const getScreenshot = async () => {
        setLoading(true)
        const res = await fetch(
            '/api/screenshot?url=https://www.' + url,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
        let json = await res.json()
        let arrBuffer = json.screenshot.data
        let typedArray = new Uint8Array(arrBuffer)
        let blob = new Blob([typedArray], {type: 'image/png'})
        let urlCreator = window.URL || window.webkitURL
        let imageUrl = urlCreator.createObjectURL(blob)
        setImage(imageUrl)
        setLoading(false)
    }
    console.log(image)

    return(
        <div className='p-16 w-full max-w-7xl bg-white/5 rounded-xl backdrop-blur-3xl border border-white/10 flex flex-col gap-16 mt-32' id='try-it'>
            <span className='w-full text-center'>
            TRY IT OUT
            </span>
            <input 
                className='w-full flex justify-between bg-[#090619] rounded-full px-8 py-4 border border-white'
                placeholder='example.com'
                value={'https://www.' + url}
                onChange={(e) => {
                    let value = e.target.value
                    value = value.replace('https://www.', '')
                    setUrl(value)
                }}
            />
            <div className='w-full aspect-video rounded-xl border border-white/10 overflow-hidden flex justify-center items-center'>
                {!image
                    ? 'Your Image Will Appear Here'
                    : <img 
                        src={image}
                        alt='screenshot' 
                        className='w-full h-full '
                    />
                }
            </div>
            <div className='rounded-full px-8 py-4 cursor-pointer text-center w-full' style={{
                background: 'linear-gradient(90deg, #FFF 0%, #FFCFB4 27.08%, #E5BBFF 65.10%, #BCC3FF 88.54%, #BDEFFF 100%)'
            }} onClick={() => {
                getScreenshot()
            }}>
                {loading
                    ? 'Loading...'
                    : 'LOAD URL SCREENSHOT'
                }
            </div>
        </div>
    )
}