import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout';
import MainPage from './Pages/MainPage'; // essa é a página dos cards de marmitas
import Login from './Pages/Login';
import SignIn from './Pages/SignIn';
import PrivateRoute from './Components/PrivateRoute';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/cadastro" element={<SignIn />}></Route>
        <Route path="/home" element={<PrivateRoute>
                                      <Layout />
                                     </PrivateRoute>}>
          <Route index element={<MainPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
