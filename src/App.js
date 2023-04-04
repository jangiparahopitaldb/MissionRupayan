import './App.css';
import MyNavBar from './components/MyNavBar';
import Home from './components/Home';
import About from './components/About';
import Database from './components/Database';
import Info from './components/Info';
import EditPage from './components/Editpage';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const App=()=>{
  return (
    <BrowserRouter>
      <MyNavBar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/database' element={<Database/>}></Route>
        <Route path='/details' element={<Info/>}></Route>
        <Route path='/edit/:id' element={<EditPage/>}></Route>
      </Routes>
    </BrowserRouter>    
  );
}

export default App;
