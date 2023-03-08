import './App.css';
import MyCards from './MyComponents/MyCard';
import Hero from './MyComponents/Hero';
// import 'bootstrap/dist/css/bootstrap.min.css';

// import Landing from './Components/Landing/Landing';

import Navbar from './MyComponents/Navbar';
import Bottom from './MyComponents/Bottom';
import Footer from './MyComponents/Footer';

function App() {
  return (
    <div className="App">

      <div className='back-image'>

        <Navbar />
        <Hero />
      </div>

      <MyCards />
      <Bottom/>
      <Footer/>


    </div>
  );
}

export default App;
