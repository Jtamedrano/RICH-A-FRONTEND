import { Row, Col } from 'antd';
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
        xs={{ order: 2, span: 24 }}
        sm={{ order: 2, span: 24 }}
        md={{ order: 1, span: 12 }}
        className="heroParagraph"
      >
        <Title level={2}>Corvallis ready for change</Title>
        <p>
          Every student deserves the opportunity to reach their full academic
          potential, but until our school board has leadership in place that
          begins to focus on helping our student’s improving their lagging
          academic achievement this will never occur.
        </p>
        <p>
          <strong>Elect Richard Arnold</strong> to{' '}
          <strong>Corvallis School Board Position #4</strong>
        </p>
        <p>Let Richard know you're in!</p>
        <CtaForm rootClass="heroCta" />
      </Col>
      <Col
        xs={{ order: 1, span: 24 }}
        sm={{ order: 1, span: 24 }}
        md={{ order: 2, span: 12 }}
        className="heroImage"
      >
        <img src="/images/selfie.jpg" alt="Richard Arnold" />
      </Col>
    </Row>
  );
};

export default React.memo(Hero);
