import { BookOpenIcon } from "@heroicons/react/24/outline"
import { MoonIcon } from "@heroicons/react/24/outline"
import { SunIcon } from "@heroicons/react/24/outline"
import { ChevronDownIcon } from "@heroicons/react/24/outline"
import '../../index.css'
import { useContext } from "react"
import { GlobalState } from "../../Global/GlobalState"

function Nav(){

    const { select, openOptions, option, changeOptionFont, changeMode, mode } = useContext(GlobalState)
    return(
        <>
            <nav className={`w-3/5 max-[1080px]:w-full flex justify-between px-4 items-center font-serif py-4	fixed top-0 ${mode ? 'bg-white' : 'bg-black'} z-10`}>
                <div><BookOpenIcon className={`size-10 ${mode ? 'text-zinc-700' : 'text-slate-50' } `} /></div>
                <div className="flex justify-center items-center gap-4">

                    <div className=" relative">
                        <div onClick={openOptions} className="w-30 flex justify-between items-center gap-2 cursor-pointer px-2">
                            <p className={`text-lg ${option.value}`}>{option.name}</p>
                            <ChevronDownIcon className={`size-4 ${mode ? 'text-zinc-900' : 'text-slate-50' } `} />
                        </div>
                        <div className="w-28 px-2 py-2 absolute bg-white" style={{display: select ? 'block': 'none'}}>
                            <p onClick={() => changeOptionFont({name:'Serif', value: 'font-sans'})} className="cursor-pointer font-sans text-lg text-black" value={'serif'}>Serif</p>
                            <p onClick={() => changeOptionFont({name:'San serif', value: 'font-serif'})} className="cursor-pointer font-serif text-lg text-black">sans serif</p>
                            <p onClick={() => changeOptionFont({name:'Monospace', value: 'font-mono'})} className="cursor-pointer font-mono text-lg text-black">monospace</p>
                        </div>
                    </div>
                    
                    <p className="text-zinc-400">|</p>
                    <div className="flex justify-center items-center gap-2">
                        <button onClick={changeMode} className="w-8 h-4 bg-slate-600 rounded-lg px-0.5 flex justify-start items-center" style={{justifyContent: mode ? 'start': 'end'}}>
                            <div className="w-3 h-3 bg-slate-50 rounded-full"></div>
                        </button>
                        {
                            mode ? <MoonIcon  className="size-4 text-zinc-700"/> : <SunIcon  className="size-6 text-slate-50"/>
                        }
                        
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Nav