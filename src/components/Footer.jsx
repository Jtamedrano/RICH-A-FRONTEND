import { Col, Row } from "antd";
import Paragraph from "antd/lib/typography/Paragraph";
import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";

const Footer = () => {
  return (
    <footer>
      <Row
        justify="space-between"
        style={{ maxWidth: "1920px", margin: "0 auto" }}
        className="footerContent"
      >
        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }}>
          <div className="footerLeft">
            <Paragraph>Paid for by "Rich Arnold for Oregon"</Paragraph>
            <Paragraph style={{ fontSize: ".8em" }}>
              Developed By <a href="jtamedrano.com">Jesse Medrano</a> from
              JavaScript Lifestyle
            </Paragraph>
          </div>
        </Col>
        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }}>
          <div className="footerRight">
            <h4>Navigation</h4>
            <Row gutter={[24]} justify="space-around">
              {NavLinks.map((link, i) => (
                <Col
                  key={`footer-navLink-${i}`}
                  xs={{ span: 24 }}
                  sm={{ span: 24 }}
                  md={{ span: 24 }}
                >
                  <Link to={link.url}>{link.label}</Link>
                </Col>
              ))}
            </Row>
          </div>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
