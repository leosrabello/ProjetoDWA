import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout';
import MainPage from './Pages/MainPage';
import Login from './Pages/Login';
import SignIn from './Pages/SignIn';
import PrivateRoute from './Components/PrivateRoute';
import CadastrarMarmita from './Pages/CadastrarMarmita'; // ajuste no path

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<SignIn />} />
        
        {/* Página protegida do colaborador */}
        <Route path="/cadastrar-marmita" element={<CadastrarMarmita />} />


        {/* Página protegida do cliente com layout e cards */}
        <Route path="/home" element={
          <PrivateRoute>
            <Layout />
          </PrivateRoute>
        }>
          <Route index element={<MainPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
