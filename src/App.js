import { Route } from 'react-router';

// Components
import Navbar from './components/Navbar';
import Home from './views/Home';
import About from './views/About';
import Issues from './views/Issues';
import FooterView from './components/Footer';
import DonateView from './views/Donate';
import { Layout } from 'antd';

const { Header, Footer, Content } = Layout;

function App() {
  return (
    <Layout>
      <Header
        style={{
          position: 'fixed',
          zIndex: 1,
          width: '100%',
          backgroundColor: '#ffffff',
        }}
      >
        <Navbar classes={['navbar']} />
      </Header>
      <Content style={{ marginTop: 80 }}>
        <Route path="/about" component={About} />
        <Route path="/issues" component={Issues} />
        <Route path="/donate" component={DonateView} />
        <Route exact path="/" component={Home} />
      </Content>
      <Footer>
        <FooterView />
      </Footer>
    </Layout>
  );
}

export default App;
