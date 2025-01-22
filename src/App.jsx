import {BrowserRouter as Router , Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contect from './components/Contect';
import Layout from './Layout';

function App() {
  

  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="contect" element={<Contect/>}/>
        </Route>
      </Routes>
     </Router>
    </>
  )
}

export default App
