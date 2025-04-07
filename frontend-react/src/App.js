import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout';
import MainPage from './Pages/MainPage'; // essa é a página dos cards de marmitas
import Login from './Pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/home" element={<Layout />}>
          <Route index element={<MainPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
