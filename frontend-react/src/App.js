import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout';
import MainPage from './MainPage'; // essa é a página dos cards de marmitas

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
