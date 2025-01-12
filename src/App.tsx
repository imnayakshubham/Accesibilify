
import './App.css'
import { AppContextProvider } from './Context/Context'
import { Footer } from './components/Footer/Footer'
import { Navbar } from './components/Navbar/Navbar'
import { Products } from './components/Products/Products'
import { Widget } from './components/Widget/Widget'

function App() {


  return (
    <>
      <Navbar />
      <Products />
      <Footer />
      <Accesibilify />
    </>
  )
}

const Accesibilify = () => {
  return <AppContextProvider>
    <Widget />
  </AppContextProvider>
}

export default App
