import { Row, Col } from "antd";
import Title from "antd/lib/typography/Title";
import React from "react";
import CtaForm from "../../components/CtaForm";

const Hero = () => {
  return (
    <Row gutter={8 * 6} className="hero" justify="space-between" align="middle">
      <Col
        xs={{ order: 2, span: 24 }}
        sm={{ order: 2, span: 24 }}
        md={{ order: 2, span: 24 }}
        lg={{ order: 1, span: 16 }}
        className="heroParagraph"
      >
        <Title level={2}>Corvallis, Ready For Change</Title>
        <p>
          Every student deserves the opportunity to reach their full academic
          potential, but until our school board has leadership in place that
          begins to focus on helping our student’s improving their lagging
          academic achievement this will never occur.
        </p>
        <p>
          <strong>Elect Richard Arnold</strong> to{" "}
          <strong>Corvallis School Board Position #4</strong>
        </p>
        <CtaForm rootClass="heroCta" />
      </Col>
      <Col
        xs={{ order: 1, span: 24 }}
        sm={{ order: 1, span: 24 }}
        md={{ order: 1, span: 24 }}
        lg={{ order: 2, span: 8 }}
        className="heroImage"
      >
        <img src="/images/Selfie.png" alt="Richard Arnold" />
      </Col>
    </Row>
  );
};

export default React.memo(Hero);
