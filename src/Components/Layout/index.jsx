import { useContext } from "react"
import { GlobalState } from "../../Global/GlobalState"

/* eslint-disable react/prop-types */
function Layout({children}) {

    const {mode, option} = useContext(GlobalState)

    return(
        <>
            <div style={{backgroundColor: mode ? '#ffffff': '#060606', color: mode ? '#060606' : "#ffffff"}}  className={`flex flex-col justify-start items-center w-full h-full bg-slate-900 pt-32 ${option.value}`}>
                {children}
            </div>
        </>
    )
}

export default Layout