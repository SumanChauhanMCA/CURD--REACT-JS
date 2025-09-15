import logo from './logo.svg';
import './App.css';
import AddUser from './Components/AddUser';
import { Route, Routes } from 'react-router-dom';
import ShowUsers from './Components/ShowUsers';
import EditUser from './Components/EditUser';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<ShowUsers/>}></Route>
        <Route path='/userform' element={<AddUser/>}></Route>
        <Route path='/editform' element={<EditUser/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
