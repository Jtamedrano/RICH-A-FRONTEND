import { Button, Col, Row } from "antd";
import Title from "antd/lib/typography/Title";
import { Link } from "react-router-dom";

const SummaryAbout = () => {
  const rootClass = "summaryAbout";

  return (
    <div className="codeBehindCTA">
      <Row className={`${rootClass}`} justify="space-between" align="center">
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 12 }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src="/images/male-thinking.png"
            alt="2d male thinking"
            className="aboutImg"
          />
        </Col>
        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }}>
          <div className="sumText">
            <Title level={3} style={{ color: "#fff" }}>
              About Richard Arnold
            </Title>
            <p>
              With 24 years of public service with state agencies and
              institutions of higher education, Richard has contributed much of
              his passion to ensuring students get the education they deserve.
            </p>
            <Link to="/about">
              <Button>Learn More</Button>
            </Link>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default SummaryAbout;
