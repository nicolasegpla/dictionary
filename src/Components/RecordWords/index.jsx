import { useContext } from "react"
import { GlobalState } from "../../Global/GlobalState"
import { XMarkIcon } from "@heroicons/react/24/outline"

function RecordWords() {
    
    

    const {record, closeRecord, setModalRecord, setWord, getDataRecord} = useContext(GlobalState)

    function showWord(wordSave) {
        setWord(wordSave)
        getDataRecord(wordSave)
        setModalRecord(false)
        document.body.style.overflow = '';
    }

        return (
            <>
                <h1 className="text-white text-3xl font-semibold mt-36">Recent searches</h1>
                <div className="bg-white w-3/5 h-80 max-w-80 min-w-72 py-6 mx-auto mt-6  rounded-lg flex justify-center items-center">
                    <ul className="overflow-y-auto w-96 h-72">
                        {record?.map((wordSave) => (
                            <li onClick={()=> showWord(wordSave)}   className="cursor-pointer" key={wordSave}>{wordSave}</li>
                        ))}
                    </ul>
                </div>
                <button onClick={closeRecord} className="mt-6 w-12 h-12 bg-indigo-600 hover:bg-green-300 rounded-full flex justify-center items-center mx-auto"><XMarkIcon className="size-6"/></button>
                
            </>
        )
}
export default RecordWords