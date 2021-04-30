import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Particles from 'react-particles-js';
import Navbar from './components/Navbar';
import Header from './components/Header';

function App() {
  return (
    <>
      <Particles
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 900
              }
            },
            shape: {
              type: 'star',
              color: '#f9ab00',
              stroke: {
                width: 6,
                color: '#f9ab00'
              }
            },
            line_linked: {
              color: '#ef4035',
              width: 3, 
            }
          }
        }}
      />
      <Navbar/>
      <Header/>
    </>
  );
}

export default App;
