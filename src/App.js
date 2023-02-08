import './App.css';
 
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom' 
import { ProductListing } from './containers/ProductListing'
import {ProductDetail} from './containers/ProductDetail'
import MainMenu from './components/MainMenu'
 
function App() {
  return (
    <div className="App">
      
      <Router>
          <MainMenu/>
         <Routes>             
            <Route path="/" element={<ProductListing/>}/>
            <Route path="/product/:productId" element={<ProductDetail/>}/>
            <Route>404</Route>
         </Routes>
      </Router>
      
    </div>
  );
}


export default App;