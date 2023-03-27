import './App.css';
import MyCards from './myComponents/MyCard';
import Hero from './myComponents/Hero';
import Navbar from './myComponents/Navbar';
import Bottom from './myComponents/Bottom';
import Footer from './myComponents/Footer';

function App() {
  return (
    <div className="App ">

      <div className='md:bg-web-image bg-mobile-image max-sm:bg-center bg-cover bg-no-repeat'>
        <Navbar />
        <Hero />
      </div>
      <MyCards />
      <Bottom />
      <Footer />
    </div>
  );
}

export default App;
