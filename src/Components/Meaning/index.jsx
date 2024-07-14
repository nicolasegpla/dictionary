/* eslint-disable react/prop-types */
function Meaning({ synonyms, dataul, title }) {
    return(
        <>
        <div className="py-10 text-left flex flex-col justify-start gap-3 w-4/5 min-[1080px]:w-1/2 min-[1080px]:px-4">
            <p className="text-lg text-slate-400">Meaning</p>
            <ul className="text-base list-disc pl-8">
                {
                    dataul?.map(m => (
                        
                        <li className="mr-8" key={m.definition}>{m.definition}</li>
                    ))
                }
                
            </ul>
            {
                !synonyms == '' ? <p className="text-lg text-slate-400">{title}<span className="text-lg text-indigo-600 font-semibold ml-4">{synonyms}</span></p> : null
            }
            
            
        </div>
        </>
    )
}

export default Meaning