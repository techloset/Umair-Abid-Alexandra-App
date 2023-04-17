import './App.css';
import MyCards from './myComponents/MyCard';
import Hero from './myComponents/Hero';
import Navbar from './myComponents/Navbar';
import Bottom from './myComponents/Bottom';
import Footer from './myComponents/Footer';

function App() {
  return (
    <div className="App ">

      <div className='md:bg-web bg-mobile  bg-cover bg-full bg-no-repeat'>
        <Navbar />
        <Hero />

        <MyCards />
      </div>

      <Bottom />

      <Footer />
    </div>
  );
}

export default App;
