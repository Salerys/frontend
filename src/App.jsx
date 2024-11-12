import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import NotFound from './pages/NotFound';

function RegisterAndLogout() {
  localStorage.clear();
  return <Register />;
}

function Logout() {
  localStorage.clear();
  return <Navigate to="/login" />;
}

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<RegisterAndLogout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
