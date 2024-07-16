/* eslint-disable react/prop-types */
import { useContext } from "react"
import { GlobalState } from "../../Global/GlobalState"

function ButtonRecord({display, block}) {

    const { mode, OpenRecord } = useContext(GlobalState)
    return (
        <>
            <button onClick={OpenRecord} className={`w-24 h-10 rounded-lg ${display} ${block} ${mode ? 'bg-black text-white': 'bg-indigo-600'}`}>
                <p>Record</p>
            </button>
        </>
    )
}

export default ButtonRecord