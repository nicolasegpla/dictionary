import { createPortal } from "react-dom";
import '../../App.css'

function Modal({children}) {
    return(
        createPortal(
            <div className="modalLogin" style={{display: children ? 'block': 'none'}}>{children}</div>,
            document.getElementById('modalRecord')
        )
    )
}

export {Modal}