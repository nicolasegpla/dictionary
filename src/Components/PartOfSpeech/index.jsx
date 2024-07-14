/* eslint-disable react/prop-types */
function PartOfSpeech({data}) {

    console.log(data)
    return (
        <>
            <div className="w-4/5 min-[1080px]:w-1/2 flex justify-start items-center gap-2 min-[1080px]:px-4">
                <span className="font-semibold">{data}</span>
                <div style={{height: '0.1px'}} className="w-full  bg-gray-300"></div>
            </div>
        </>
    )
}

export default PartOfSpeech