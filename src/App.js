import './App.css';
import Header from './header.js';
import Main from './main.js';
import Footer from './footer.js';
import Nav from './Nav.js';
import Faq from './Faq.js';
import {BrowserRouter,Routes,Route,} from 'react-route-dom';
function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
      <div className="App">
        <Header />
        <div className='app-cont'>  
         <Routes>
                 <Route path="/nav" element= {<Nav/>}/>
                 <Route path="/Faq" element= {<Faq/>}/>
             </Routes>
      </div>
      <Footer />
      </div>
    </BrowserRouter>
      =<Main/>   
      <Footer/>
    </div>
  );

}

export default App;
