import Nav from "../../Components/Nav/index"
import Layout from "../../Components/Layout/index"
import Seeker from "../../Components/Seeker/index";
import '../../index.css'
import WordAndVoice from "../../Components/WordAndVoice";
import { useContext } from "react";
import { GlobalState } from "../../Global/GlobalState";
import PartOfSpeech from "../../Components/PartOfSpeech";
import Meaning from "../../Components/Meaning";
import { Modal } from "../../Components/Modal";
import ButtonRecord from "../../Components/ButtonRecord";
import ContainerCom from "../../Components/ContainerCom";
import RecordWords from "../../Components/RecordWords"

function AppUi() {

    const { dataWord, meaningsExists, modalRecord } = useContext(GlobalState)    

    return (
        <>
            <Layout className={`${modalRecord ? 'overflow-hidden' : 'overflow-scroll'}`}>
                <Nav/>
                <ContainerCom block={'min-[478px]:hidden'}>
                    <ButtonRecord  />
                </ContainerCom>
                <Seeker />
                
                {
                    dataWord ? <WordAndVoice  title={dataWord[0].word} wordSy={dataWord[0].phonetic} pho={dataWord[0].phonetics[0].audio}/> : <WordAndVoice  title={'Keyboard'} wordSy={'/fdrg/'}/>
                }
                {
                    dataWord ?  <PartOfSpeech data={dataWord[0].meanings[0].partOfSpeech} /> : <PartOfSpeech data={'nou'} />
                    
                }
                {
                    dataWord ? <Meaning dataul={dataWord[0].meanings[0].definitions.slice(0,3)} title={'Synonyms'}  synonyms={dataWord[0].meanings[0].synonyms.slice(0,3)}/> : null
                }
                {
                    !meaningsExists ?  <PartOfSpeech data={dataWord[0].meanings[1].partOfSpeech} /> : null
                    
                }
                {
                    !meaningsExists ? <Meaning dataul={dataWord[0].meanings[1].definitions.slice(0,3)}  synonyms={''}/> : null
                }
                <div className="w-4/5 min-[1080px]:w-1/2 flex justify-start items-center gap-2 min-[1080px]:px-4">
                    <div style={{height: '0.1px'}} className="w-full  bg-gray-300"></div>
                </div>
                {
                    dataWord ?  <div className="w-4/5 min-[1080px]:w-1/2 flex justify-start items-center gap-2 min-[1080px]:px-4 pt-4 pb-8">
                    <p className="text-lg text-slate-400">Source <span className="font-thin text-sm cursor-pointer hover:text-indigo-600">{dataWord[0].sourceUrls[0]}</span></p>
                    </div> : null
                }
                
                <Modal>
                    {
                        modalRecord ? <RecordWords /> : null
                    }
                </Modal>
               
                
                
            </Layout>
            
        </>
    )
}

export default AppUi