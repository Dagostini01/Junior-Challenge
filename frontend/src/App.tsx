import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Users from './pages/Users';
import AddUser from './pages/AddUser';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/add" element={<AddUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;