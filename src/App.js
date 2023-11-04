import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Page1 from './components/pages/Page1';
import Page2 from './components/pages/Page2';
// import Question from './components/yourRightToknow/Question';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Page1/>} ></Route>
        <Route path='/Menu' element={<Page2/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
