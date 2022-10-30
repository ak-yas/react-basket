import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavbarContainer from './components/navbar'
import { Container } from 'react-bootstrap'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Store from './pages/store'
import Success from './pages/success'
import Cancel from './pages/cancel'
import CartContextProvider from './cartContext'
function App() {
  return (
    <CartContextProvider>
      <Container>
        <NavbarContainer></NavbarContainer>
        <BrowserRouter>
          <Routes>
            <Route index element={<Store />} />
            <Route path="success" element={<Success />} />
            <Route path="cancel" element={<Cancel />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </CartContextProvider>
  )
}

export default App
