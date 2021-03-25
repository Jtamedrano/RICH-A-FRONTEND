import { Route, Switch } from "react-router";

// Components
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import About from "./views/About";
import Issues from "./views/Issues";
import FooterView from "./components/Footer";
import { Layout } from "antd";
// import ComingSoonPage from "./views/ComingSoon";
import PaymentConfirmationView from "./views/PaymentConfirmation";
import DonateView from "./views/Donate";
import AdminView from "./views/Admin";

const { Header, Footer, Content } = Layout;

function App() {
  return (
    <Layout className="window">
      <Switch>
        <Route path="/admin" component={AdminView} />
        <Route path="/">
          <Header
            style={{
              position: "fixed",
              zIndex: 1,
              width: "100%",
              backgroundColor: "#ffffff",
            }}
          >
            <Navbar classes={["navbar"]} />
          </Header>
          <Content className="mainContent">
            <Route
              path="/payment-confirmation/:payment"
              component={PaymentConfirmationView}
            />
            <Route path="/about" component={About} />
            <Route path="/issues" component={Issues} />
            <Route path="/donate" component={DonateView} />
            <Route exact path="/" component={Home} />
          </Content>
          <Footer>
            <FooterView />
          </Footer>
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
