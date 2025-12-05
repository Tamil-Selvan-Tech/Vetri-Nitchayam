import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CreateUser from './components/CreateUser'
import Navbar from './components/Navbar'
import UpdateUser from './components/UpdateUser'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<CreateUser />} />
          <Route path='/update' element={<UpdateUser />} />
        </Routes>
      </BrowserRouter>


    </>
  )
}

export default App