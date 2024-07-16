/* eslint-disable react/prop-types */
function ContainerCom({block, children}) {
    return(
        <>
            <div className={`${block} w-4/5 min-[1080px]:w-1/2 min-[1080px]:px-4 py-3 flex justify-between items-center max-[420px]:flex-col max-[420px]:items-start `}>
                {children}
            </div>
        </>
    )
}

export default ContainerCom