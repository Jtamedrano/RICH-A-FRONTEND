import { Button, Col, Form, Input, Row } from 'antd';

const CtaForm = ({ rootClass = 'CTA' }) => {
  const [form] = Form.useForm();

  return (
    <Form
      layout="vertical"
      form={form}
      className={rootClass}
      style={{ maxWidth: '800px', margin: '0 auto' }}
    >
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} wrap={true}>
        <Col span="12">
          <Form.Item label="First Name" name="firstname">
            <Input
            // className={`${rootClass}__FirstNameInput`}
            // placeholder="First Name"
            />
          </Form.Item>
        </Col>
        <Col span="12">
          <Form.Item label="Last Name" name="lastname">
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col span="24">
          <Form.Item label="Email" name="email">
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Row justify="center" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col span="12" flex="auto">
          <Button
            style={{ width: '100%' }}
            type="primary"
            className={`${rootClass}__SignUpButton`}
          >
            Sign Up
          </Button>
          {/* <button className={`${rootClass}__SignUpButton`}>Sign Up</button> */}
        </Col>
        <Col span="12" flex="auto">
          <Button
            style={{ width: '100%' }}
            type="primary"
            className={`${rootClass}__DonateButton`}
          >
            Donate
          </Button>
          {/* <button className={`${rootClass}__DonateButton`}>Donate</button> */}
        </Col>
      </Row>
    </Form>
  );
};

export default CtaForm;
