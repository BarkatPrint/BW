import './App.css';
import Header from './Component/Header';
import Home from './Component/home';
import Search from './Component/Search';
import Sponser from './Component/Sponser';
import Trust from './Component/Trust';
import Popular from './Component/Popular';
import Toplogo from './Component/Toplogo';
import Easy from './Component/Easy';
import { BrowserRouter } from 'react-router-dom';  // Import BrowserRouter
import Easy2 from './Component/Easy2'
import Download from './Component/Download'
import Categories from './Component/Categories'
import  Professional from './Component/Professional'
import Cities from './Component/Cities'
import Footer from './Component/Footer'

function App() {
  return (
    <BrowserRouter> {/* Wrap the entire app in BrowserRouter */}
      <Header />
      <div className="pt-20"> {/* Header ke niche space dene ke liye */}
        <Home />
        <Search />
        <Sponser />
        <Trust />
        <Popular />
        <Toplogo />
        <Easy />
        <Easy2 />
        <Download />
        <Categories />
        <Professional />
        <Cities />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
