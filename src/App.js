import { Route } from 'react-router';

// Components
import Navbar from './components/Navbar';
import Home from './views/Home';
import About from './views/About';
import Issues from './views/Issues';
import Footer from './components/Footer';
import DonateView from './views/Donate';

function App() {
  return (
    <>
      <Navbar classes={['navbar']} />
      <Route path="/about" component={About} />
      <Route path="/issues" component={Issues} />
      <Route path="/donate" component={DonateView} />
      <Route exact path="/" component={Home} />
      <Footer />
    </>
  );
}

export default App;
