import MenuMakanan from './pages/MenuMakanan';
import Contact from './pages/Contact';
import MainMenu from './pages/Main';
import AboutUs from './pages/AboutUs';
import Header from './pages/Header';
import Footer from './pages/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <MainMenu/>
      <MenuMakanan/>
      <AboutUs/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
