import './App.css'
import Art from './pages/Art'

function App() {
  return (
    <div className='bg-blue text-center'>
      <div className='container mx-auto py-10'>
          <h1 className='text-4xl text-beige font-medium'>Blather's Art Gallery</h1>
          <h2 className='text-beige italic text-md pt-2'>by Natalie</h2>
        <Art />
      </div>
    </div>
  )
}

export default App
