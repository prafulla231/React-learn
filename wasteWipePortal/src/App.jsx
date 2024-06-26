import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Main from './components/Main'

function App() {
  

  return (
    <>
      <Navbar/>
      <h1 className='bg-green-400 p-4 rounded-xl text-purple-600'>WasteWipe portal for Waste reporting</h1>
      <Main/>
      <Footer/>
    </>
  )
}

export default App
