import './App.css'
import Content from './components/Content'
import SearchProvider from './context/SearchProvider'

function App() {
  return (
    <div className="App">
      <SearchProvider >
        <Content />
      </SearchProvider>
    </div>
  )
}

export default App
