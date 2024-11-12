import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Register from './pages/Register';

function RegisterAndLogout() {
  localStorage.clear();
  return <Register />;
}

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<RegisterAndLogout />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
