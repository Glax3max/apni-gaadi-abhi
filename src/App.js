import './App.css';
import Bookride from './component/Bookride';
import Footer from './component/Footer';
import Nav from './component/Nav';
import Ride from './component/Ride';
import Service from './component/Service';
import Services from './component/Services';

function App() {
  return (
    <div className="App">
      <Nav className="nav1"/>
      <img className="cab-img2" src='cab3.jpg' alt="yellowcar"/>
      <img className="cab-img1" src='cab5.jpg'alt="yellowcar"/>
      <Service />
      <Bookride />
      <Ride />
      <Services />
      <Footer />
     
    </div>
  );
}

export default App;
