import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './pages/Layout';
import StartPage from './pages/StartPage';
import Registery from './pages/Registery';
import Login from './pages/Login';
import NoPage from './pages/NoPage';

function App() {
  return (
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<StartPage />} />
          <Route path='/reg' element={<Registery />} />
          <Route path='/log' element={<Login />} />
          <Route path='*' element={<NoPage />} />
        </Route>
      </Routes>
  );
}

export default App;
