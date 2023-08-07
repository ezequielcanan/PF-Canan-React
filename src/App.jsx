import './App.scss'
import Navbar from './components/Navbar'
import ItemListContainer from './containers/ItemListContainer'

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <ItemListContainer text="Texto itemlistcontainer." />
    </div>
  )
}

export default App
