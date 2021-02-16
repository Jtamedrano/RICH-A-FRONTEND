import { Row, Col } from 'antd';
import Paragraph from 'antd/lib/typography/Paragraph';
import Title from 'antd/lib/typography/Title';
import React from 'react';
import CtaForm from '../../components/CtaForm';

const Hero = () => {
  return (
    <Row
      className="hero"
      justify="space-between"
      align="middle"
      gutter={[16, 16]}
    >
      <Col
        span={12}
        xs={{ order: 2, span: 24 }}
        sm={{ order: 2, span: 24 }}
        md={{ order: 1, span: 12 }}
        className="heroParagraph"
      >
        <Title level={2}>Corvallis is ready for action</Title>
        <Paragraph>
          Every student deserves the opportunity to strive for a higher purpose,
          but until our school board has leadership in place to accomplish this
          goal, we run the risk of taking that away from our children.
        </Paragraph>
        <Paragraph>
          Vote Richard Arnold for School District Board _____
        </Paragraph>
        <Paragraph>Let Richard know you're in!</Paragraph>
        <CtaForm rootClass="heroCta" />
      </Col>
      <Col
        span={12}
        className="heroImage"
        xs={{ order: 1, span: 24 }}
        sm={{ order: 1, span: 24 }}
        md={{ order: 2, span: 12 }}
      >
        <img src="/images/sb-logo.png" alt="Corvallis School Board Logo" />
      </Col>
    </Row>
  );
};

export default React.memo(Hero);
