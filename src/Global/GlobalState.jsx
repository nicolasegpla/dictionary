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
    const [ modalRecord, setModalRecord ] = useState(false)
    
    
    function getDataRecord(wordRecord) {
        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${wordRecord}`)
        .then((res) =>  res.json())
        .then((data) => {
            setDataWord(data), 
            data[0].meanings.length > 1 ? setMeaningsExists(false) : setMeaningsExists(true)
        })
        .catch(error => console.error(`tenemos este error: ${error}`))

        setWord('')
    }
    

    
    useEffect(() => {
        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/keyboard`)
        .then((res) =>  res.json())
        .then((data) => {
            setDataWord(data), 
            data[0].meanings.length > 1 ? setMeaningsExists(false) : setMeaningsExists(true)
        })
        .catch(error => console.error(`tenemos este error: ${error}`))
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

    function OpenRecord() {
        setModalRecord(true)
        document.body.style.overflow = 'hidden';
    }
    function closeRecord() {
        setModalRecord(false)
        document.body.style.overflow = '';
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

    

    const saveWord = (newWord) => {
        localStorage.setItem('RECORDWORDS', JSON.stringify(newWord));
    }

    
    
    
    function getData() {
        word == '' ? setShowInfo(true) :  null
        
        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        .then((res) =>  res.json())
        .then((data) => {
            setDataWord(data),
            data[0].meanings.length > 1 ? setMeaningsExists(false) : setMeaningsExists(true) 
            record.includes(word) ? null :  setRecord([...record, word]) 
        })
        .catch(error => {
            console.log(error)
        })
        
       
            const newData = [...record];
            newData.includes(word) ? null : newData.push(word)
            console.log(newData)
            saveWord(newData)
        
            console.log(newData.includes(word))
       
        setWord('')
    }

    useEffect(() => {
        const getLocal = localStorage.getItem('RECORDWORDS')
        const getLocalParse = JSON.parse(getLocal)
        console.log(`esto es lo que hay: ${getLocalParse}`)
        getLocalParse == null ? setRecord([]) : setRecord(getLocalParse)
        
    }, [])    
        
       
   console.log(record)
        
     function deleteRecord() {
        localStorage.removeItem('RECORDWORDS')
        setRecord([])
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
                modalRecord,
                OpenRecord,
                record,
                closeRecord,
                setModalRecord,
                setWord,
                getDataRecord,
                deleteRecord,
            }}
        >
            {children}
        </GlobalState.Provider>
    )
}

export {GlobalProvider, GlobalState}
