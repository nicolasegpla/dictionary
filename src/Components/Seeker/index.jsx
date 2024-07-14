import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"
import { useContext } from "react"
import { GlobalState } from "../../Global/GlobalState"

function Seeker() {

    const { handlerInput, valueWord, getData, word, showInfo } = useContext(GlobalState)
     
    return (
        <>
            
            <form className=" w-3/5 max-[1080px]:w-full flex flex-col justify-center items-center text-left" action="">
                <label className="relative w-4/5 flex flex-col justify-center items-start" htmlFor="">
                    <input onChange={handlerInput} className={`bg-slate-100 w-full h-12 rounded-md px-4 text-black`} type="text" placeholder="Example: keyboard " value={word} />
                    <button type="button" onClick={getData} className="flex justify-center items-center absolute top-2 right-2 bg-none w-9 h-9">
                        <MagnifyingGlassIcon className="size-4 text-slate-600" />
                    </button>
                    <span className={`text-red-600 text-sm font-semibold mt-2 px-2 ${!valueWord ? 'hidden' : 'block'}`}>Enter only values, in letters.</span>
                    <span className={`text-red-600 text-sm font-semibold mt-2 px-2 ${!showInfo ? 'hidden' : 'block'}`}>Enter a word</span>
                </label>
                
            </form>
        </>
    )
}

export default Seeker