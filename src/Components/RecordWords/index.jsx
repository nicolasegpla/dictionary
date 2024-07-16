import { useContext } from "react"
import { GlobalState } from "../../Global/GlobalState"

function RecordWords() {

    const {record} = useContext(GlobalState)
        return (
            <>
            <h1>hola record papaicvgf</h1>
                <div>
                    <ul>
                        {record?.map((wordSave) => (
                            <li key={wordSave}>{wordSave}</li>
                        ))}
                    </ul>
                </div>
                
            </>
        )
}
export default RecordWords