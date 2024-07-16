import AppUi from './Pages/AppUi'
import './App.css'
import { GlobalProvider } from './Global/GlobalState'


function App() {

 
  
  return (
    <>
      <GlobalProvider>
        
          
          <AppUi />

        
      </GlobalProvider>
    </>
  )
}

export default App
