/* eslint-disable react/prop-types */
import { PlayIcon } from "@heroicons/react/24/solid"
import { useRef } from "react"
function WordAndVoice({title, wordSy, pho}) {
     const audioRef = useRef()

     function playaudio() {
        audioRef.current.play()
     }
    
    
    return (
        <>

            <div className="  w-4/5 min-[1080px]:w-1/2 min-[1080px]:px-4 py-10 flex justify-between items-center max-[420px]:flex-col max-[420px]:items-start">
                <div className="flex flex-col justify-start gap-2 ">
                    <h2 className="text-5xl font-semibold">{title}</h2>
                    <span className="text-indigo-500 font-medium text-2xl">{wordSy}</span>
                </div>
                <div>
                    {
                        pho == '' ? null :
                    
                    <div onClick={playaudio} className="w-12 h-12 bg-indigo-400 rounded-full hover:bg-green-300 flex justify-center items-center cursor-pointer max-[420px]:mt-4">
                        <audio ref={audioRef} src={pho}>
                            <source src={pho} type="audio/mpeg"/>
                        </audio>
                    
                        <PlayIcon className="size-6 text-indigo-800 hover:text-green-600  " />
                    </div>
                    }
                </div>
            </div>
        </>
    )
}

export default WordAndVoice