/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
//import { useGetData } from "../Hooks/useGetData";

const GlobalState = React.createContext();

function GlobalProvider({children}) {

    const [ dataWord, setDataWord ] = useState('')
    const [ mode, setMode ] = useState(true)
    const [ select, setSelect ] = useState(false)
    const [ option, setOption ] = useState({name:'Sans serif', value: 'font-serif'})
    const [ word, setWord ] = useState('')
    const [ valueWord, setvalueWord ] = useState(false)
    const [ showInfo, setShowInfo ] = useState(false)
    const [ record, setRecord ] = useState([])
    const [ meaningsExists, setMeaningsExists ] = useState(true)
    const [ recordParsed, setRecordParsed] = useState([])
    const [ saveWord, setSaveWord] = useState([])
    
    
    

    //const  dataWord  = useGetData(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)

    useEffect(() => {
        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/keyboard`)
        .then((res) =>  res.json())
        .then((data) => {
            setDataWord(data), 
            console.log(data)
            data[0].meanings.length > 1 ? setMeaningsExists(false) : setMeaningsExists(true)
        })
        .catch(error => console.log(`tenemos este error: ${error}`))

        
        
    }, [])

    
    

    function openOptions() {
        setSelect(true)
    }
    function changeOptionFont(font) {
        setOption(font)
        setSelect(false)
    }
    function changeMode() {
        setMode(state => !state)
    }

    function handlerInput({target}) {
        const validator = /^[a-zA-Z]*$/
        const {value} = target;
        const valueLowCase = value.toLowerCase()
        const validatorword = validator.test(valueLowCase) 
        setShowInfo(false)
        

        if(validatorword) {
            setWord(valueLowCase)
            setvalueWord(false)
        }else {
            setvalueWord(true)
        }
    }

    console.log(word)
    
    
    function getData() {
        word == '' ? setShowInfo(true) :  console.log(dataWord)
        

        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        .then((res) =>  res.json())
        .then((data) => {
            setDataWord(data), 
            console.log(data)
            data[0].meanings.length > 1 ? setMeaningsExists(false) : setMeaningsExists(true) 
        })
        .catch(error => console.log(`tenemos este error: ${error}`))

        setRecord([...record, word])
        setWord('')
    }
    
    
    
   

    return(
        <GlobalState.Provider
            value={{
                openOptions,
                select,
                option,
                changeOptionFont,
                changeMode,
                mode,
                handlerInput,
                valueWord,
                getData,
                word,
                showInfo,
                dataWord,
                meaningsExists,
                
            }}
        >
            {children}
        </GlobalState.Provider>
    )
}

export {GlobalProvider, GlobalState}
